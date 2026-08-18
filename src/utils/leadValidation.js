// Server-side validation for lead submissions. Client-side validation in
// LeadForm.js is a UX convenience only — this is the actual gate.

const WHATSAPP_RE = /^\+?[0-9][0-9\s\-()]{6,18}[0-9]$/;

function clean(str, maxLen) {
    if (typeof str !== 'string') return '';
    return str.trim().replace(/[<>]/g, '').slice(0, maxLen);
}

function isValidDateString(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const d = new Date(value + 'T00:00:00');
    return !Number.isNaN(d.getTime());
}

function isNotInPast(dateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(dateStr + 'T00:00:00');
    return d.getTime() >= today.getTime();
}

// Returns { valid: true, data } or { valid: false, errors: { field: message } }
export function validateLeadInput(body) {
    const errors = {};
    const data = {};

    data.pickup = clean(body.pickup, 120);
    if (!data.pickup) errors.pickup = 'Pickup location is required.';

    data.destination = clean(body.destination, 120);
    if (!data.destination) errors.destination = 'Destination is required.';

    data.travel_date = clean(body.travel_date, 10);
    if (!isValidDateString(data.travel_date)) {
        errors.travel_date = 'Enter a valid travel date.';
    } else if (!isNotInPast(data.travel_date)) {
        errors.travel_date = 'Travel date cannot be in the past.';
    }

    data.pickup_time = clean(body.pickup_time, 10);
    if (!data.pickup_time || !/^\d{2}:\d{2}$/.test(data.pickup_time)) {
        errors.pickup_time = 'Enter a valid pickup time.';
    }

    const passengers = parseInt(body.passengers, 10);
    if (!Number.isInteger(passengers) || passengers < 1 || passengers > 15) {
        errors.passengers = 'Passengers must be between 1 and 15.';
    } else {
        data.passengers = passengers;
    }

    data.whatsapp = clean(body.whatsapp, 20);
    if (!WHATSAPP_RE.test(data.whatsapp)) {
        errors.whatsapp = 'Enter a valid WhatsApp number, e.g. +966 5xxxxxxxx.';
    }

    // Optional fields
    data.return_trip = Boolean(body.return_trip);
    if (data.return_trip) {
        data.return_date = clean(body.return_date, 10);
        if (!isValidDateString(data.return_date)) {
            errors.return_date = 'Enter a valid return date.';
        } else if (data.travel_date && data.return_date < data.travel_date) {
            errors.return_date = 'Return date cannot be before the travel date.';
        }
        data.return_time = clean(body.return_time, 10);
        if (data.return_time && !/^\d{2}:\d{2}$/.test(data.return_time)) {
            errors.return_time = 'Enter a valid return time.';
        }
    } else {
        data.return_date = null;
        data.return_time = null;
    }

    data.vehicle_type = clean(body.vehicle_type, 40) || null;
    data.luggage = clean(body.luggage, 40) || null;
    data.notes = clean(body.notes, 500) || null;

    data.source = clean(body.source, 40) || 'website_form';
    data.landing_page = clean(body.landing_page, 200) || null;

    // Attribution — never fabricated, left null when absent
    data.utm_source = clean(body.utm_source, 100) || null;
    data.utm_medium = clean(body.utm_medium, 100) || null;
    data.utm_campaign = clean(body.utm_campaign, 100) || null;
    data.utm_term = clean(body.utm_term, 100) || null;
    data.utm_content = clean(body.utm_content, 100) || null;
    data.gclid = clean(body.gclid, 150) || null;

    if (Object.keys(errors).length > 0) {
        return { valid: false, errors };
    }
    return { valid: true, data };
}

// Very small in-memory rate limiter. Effective against rapid duplicate
// submissions/basic bots from a single instance; on serverless platforms
// each instance has its own memory so this is a best-effort layer, not the
// only line of defense (the honeypot field is the other layer).
const submissionsByIp = new Map();
const WINDOW_MS = 30_000;
const MAX_PER_WINDOW = 3;

export function isRateLimited(ip) {
    const now = Date.now();
    const entry = submissionsByIp.get(ip) || { count: 0, windowStart: now };

    if (now - entry.windowStart > WINDOW_MS) {
        entry.count = 0;
        entry.windowStart = now;
    }

    entry.count += 1;
    submissionsByIp.set(ip, entry);

    // Occasional cleanup so the map doesn't grow unbounded
    if (submissionsByIp.size > 5000) {
        for (const [key, val] of submissionsByIp) {
            if (now - val.windowStart > WINDOW_MS) submissionsByIp.delete(key);
        }
    }

    return entry.count > MAX_PER_WINDOW;
}
