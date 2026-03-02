"use client";

import { MessageCircle, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px (when hero is gone)
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="sticky-cta animate-fade-up" style={{ animationDuration: '0.3s' }}>

            <span className="sticky-trust desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={14} /> Official Transport Partner
            </span>

            <Link href="https://wa.me/923080628195" className="sticky-whatsapp">
                <MessageCircle size={16} /> <span className="desktop-only">WhatsApp Quote</span>
            </Link>

            <Link href="https://wa.me/923080628195" className="sticky-book">
                <Phone size={16} /> <span className="desktop-only">Book Now</span>
            </Link>

        </div>
    );
}
