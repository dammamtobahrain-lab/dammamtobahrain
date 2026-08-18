import nodemailer from 'nodemailer';

// Best-effort admin notification email using the site's existing, verified
// Gmail SMTP configuration (SMTP_HOST/PORT/USER/PASS in .env.local). This is
// NEVER allowed to fail the lead submission — the lead is already saved in
// Supabase by the time this runs. Errors are logged and swallowed.
export async function notifyLead(lead) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
        console.warn('[notifyLead] SMTP/ADMIN_EMAIL not fully configured — skipping notification email.');
        return { sent: false, reason: 'not_configured' };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: parseInt(SMTP_PORT || '587', 10),
            secure: parseInt(SMTP_PORT || '587', 10) === 465,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        const row = (label, value) => `<tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:bold;background:#f9f9f9;">${label}</td><td style="padding:8px 12px;border:1px solid #eee;">${value ?? '—'}</td></tr>`;

        await transporter.sendMail({
            from: `"Dammam to Bahrain Taxi — Leads" <${SMTP_USER}>`,
            to: ADMIN_EMAIL,
            subject: `New Quote Request: ${lead.pickup} → ${lead.destination} (${lead.travel_date})`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                    <h2 style="margin-bottom: 4px;">New Quote Request</h2>
                    <p style="color:#666;margin-top:0;">Lead #${lead.id} — ${new Date(lead.created_at).toLocaleString()}</p>
                    <table style="border-collapse: collapse; width: 100%;">
                        ${row('WhatsApp', lead.whatsapp)}
                        ${row('Pickup', lead.pickup)}
                        ${row('Destination', lead.destination)}
                        ${row('Travel Date', lead.travel_date)}
                        ${row('Pickup Time', lead.pickup_time)}
                        ${row('Passengers', lead.passengers)}
                        ${row('Return Trip', lead.return_trip ? `Yes — ${lead.return_date || ''} ${lead.return_time || ''}` : 'No')}
                        ${row('Vehicle', lead.vehicle_type)}
                        ${row('Luggage', lead.luggage)}
                        ${row('Notes', lead.notes)}
                        ${row('Source / Landing Page', `${lead.source} — ${lead.landing_page || ''}`)}
                        ${row('UTM', [lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(' / ') || '—')}
                    </table>
                    <p style="margin-top:16px;">
                        <a href="https://wa.me/${(lead.whatsapp || '').replace(/[^0-9]/g, '')}" style="background:#25D366;color:white;padding:10px 20px;text-decoration:none;border-radius:6px;font-weight:bold;">Reply on WhatsApp</a>
                    </p>
                </div>
            `,
        });

        return { sent: true };
    } catch (err) {
        console.error('[notifyLead] Failed to send admin notification email:', err.message);
        return { sent: false, reason: err.message };
    }
}
