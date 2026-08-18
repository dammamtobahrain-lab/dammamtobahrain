"use client";

const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
const STORAGE_KEY = 'dtb_attribution';

// Reads UTM/gclid params from the current URL. If the current URL has none
// (e.g. a visitor lands on /blog/... with UTMs, then later submits the form
// from the homepage in the same session), falls back to whatever was
// captured earlier in this browser session. Never invents values.
export function getAttribution() {
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    const fromUrl = {};
    let hasAny = false;
    KEYS.forEach((key) => {
        const value = params.get(key);
        if (value) {
            fromUrl[key] = value;
            hasAny = true;
        }
    });

    if (hasAny) {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
        } catch {
            // sessionStorage unavailable (private mode etc.) — non-fatal
        }
        return fromUrl;
    }

    try {
        const cached = sessionStorage.getItem(STORAGE_KEY);
        if (cached) return JSON.parse(cached);
    } catch {
        // ignore
    }

    return {};
}
