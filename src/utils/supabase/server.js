import { createClient } from '@supabase/supabase-js';

// Server-only client used by API routes to insert leads. Uses the anon key
// (no service-role key is configured) — RLS restricts the anon role to
// INSERT-only on public.leads (see supabase/migrations/0001_create_leads_table.sql),
// so this cannot be used to read or modify existing leads even if the key leaked.
export function getSupabaseServerClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) return null;

    return createClient(url, key, {
        auth: { persistSession: false },
    });
}
