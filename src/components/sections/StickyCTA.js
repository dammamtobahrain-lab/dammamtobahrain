"use client";

import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WHATSAPP_PREFILL = "https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi.%20Pickup%3A%20%5B%5D%2C%20Destination%3A%20%5B%5D%2C%20Date%3A%20%5B%5D%2C%20Time%3A%20%5B%5D%2C%20Passengers%3A%20%5B%5D";

export default function StickyCTA() {
    return (
        <div className="sticky-cta">
            <span className="sticky-trust desktop-only">Trusted by 500+ executives</span>

            <Link href={WHATSAPP_PREFILL} className="sticky-whatsapp" target="_blank" rel="noopener noreferrer" data-track="quote_start" data-track-label="Sticky WhatsApp Quote">
                <MessageCircle size={16} /> <span className="desktop-only">WhatsApp Quote</span>
            </Link>
            <Link href="tel:+966569487569" className="sticky-book" data-track="phone_click" data-track-label="Sticky Call Now">
                <Phone size={16} /> <span className="desktop-only">Call Now</span>
            </Link>
        </div>
    );
}
