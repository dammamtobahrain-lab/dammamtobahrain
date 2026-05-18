import Link from "next/link";
import { Zap, MessageSquare, ShieldCheck, Clock } from "lucide-react";

export default function CTA() {
    return (
        <section className="section" style={{ background: 'var(--color-primary)', color: 'white', borderTop: '4px solid var(--color-accent)', padding: '2.5rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.65rem' }}>READY TO TRAVEL?</span>
                <h2 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.85rem)', marginBottom: '1rem', color: 'white', marginTop: '0.5rem', fontWeight: '800', letterSpacing: '-0.75px' }}>
                    Stop the Border Stress. <br />
                    <span className="text-gradient-gold">Book Your Chauffeur Now.</span>
                </h2>
                <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', maxWidth: '700px', margin: '0 auto 1.5rem auto', color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontWeight: '400' }}>
                    Don't settle for high Uber surge prices or unreliable local cabs. Experience the <strong>VIP difference</strong> with our door-to-door Saudi-Bahrain transfer. <strong>No hidden fees—pay your driver only after reaching your destination.</strong>
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    <Link href="https://wa.me/966569487569" className="btn btn-primary" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', padding: '10px 28px', fontSize: '0.85rem', fontWeight: '700', borderRadius: '8px', boxShadow: '0 8px 25px rgba(0,0,0,0.2)', border: 'none' }}>
                         WHATSAPP INSTANT BOOKING →
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', opacity: 0.9 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '700' }}>
                        <Zap size={18} color="var(--color-accent)" strokeWidth={3} /> 5-Min Response
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '700' }}>
                        <Clock size={18} color="var(--color-accent)" strokeWidth={3} /> Always 24/7
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '700' }}>
                        <ShieldCheck size={18} color="var(--color-accent)" strokeWidth={3} /> No Prepayment
                    </div>
                </div>

                <div style={{ marginTop: '2.5rem', maxWidth: '700px', margin: '2.5rem auto 0 auto', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <MessageSquare size={18} color="var(--color-accent)" /> Still Unsure?
                    </h4>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '0.8rem', lineHeight: '1.4' }}>
                        Our bilingual team is standing by to answer questions about causeway wait times, visa requirements, or specific luggage needs. Message us on WhatsApp for a custom itinerary.
                    </p>
                </div>
            </div>
        </section>
    );
}
