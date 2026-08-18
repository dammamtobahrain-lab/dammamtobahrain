import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/utils/supabase/server';
import { validateLeadInput, isRateLimited } from '@/utils/leadValidation';
import { notifyLead } from '@/utils/notifyLead';

function getClientIp(request) {
    const fwd = request.headers.get('x-forwarded-for');
    if (fwd) return fwd.split(',')[0].trim();
    return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ success: false, reason: 'invalid_json', message: 'Invalid request.' }, { status: 400 });
    }

    // Honeypot — hidden field real users never fill. Bots that fill every
    // field will trip this. Respond with a generic success-shaped payload so
    // we don't tip off the bot, but never touch the database.
    if (body.website) {
        return NextResponse.json({ success: true, id: null }, { status: 201 });
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
        return NextResponse.json(
            { success: false, reason: 'rate_limited', message: 'Too many requests. Please wait a moment and try again.' },
            { status: 429 }
        );
    }

    const validation = validateLeadInput(body);
    if (!validation.valid) {
        return NextResponse.json(
            { success: false, reason: 'validation_error', errors: validation.errors },
            { status: 400 }
        );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
        console.error('[api/leads] Supabase is not configured (missing env vars).');
        return NextResponse.json(
            { success: false, reason: 'db_unavailable', message: "We couldn't submit your request right now." },
            { status: 503 }
        );
    }

    const userAgent = request.headers.get('user-agent') || null;

    const { data: inserted, error } = await supabase
        .from('leads')
        .insert([{ ...validation.data, user_agent: userAgent }])
        .select()
        .single();

    if (error) {
        // Covers: paused/unreachable Supabase project, RLS misconfiguration,
        // missing table, etc. The lead is NOT saved — never claim success.
        console.error('[api/leads] Supabase insert failed:', error.message);
        return NextResponse.json(
            { success: false, reason: 'db_unavailable', message: "We couldn't submit your request right now." },
            { status: 503 }
        );
    }

    // Best-effort admin notification — must never affect the response the
    // customer sees. The lead is already safely stored at this point.
    notifyLead(inserted).catch(() => {});

    return NextResponse.json({ success: true, id: inserted.id }, { status: 201 });
}

export async function GET() {
    return NextResponse.json({ success: false, message: 'Method not allowed.' }, { status: 405 });
}
