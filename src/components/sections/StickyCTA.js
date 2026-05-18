"use client";

import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function StickyCTA() {
    return (
        <div className="sticky-cta">
            <span className="sticky-trust desktop-only">Trusted by 500+ executives</span>

            <Link href="https://wa.me/966569487569" className="sticky-whatsapp" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> <span className="desktop-only">WhatsApp Quote</span>
            </Link>
            <Link href="https://wa.me/966569487569" className="sticky-book" target="_blank" rel="noopener noreferrer">
                <Phone size={16} /> <span className="desktop-only">Book Now</span>
            </Link>
        </div>
    );
}
