import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="section" style={{ paddingBottom: '0' }}>
            <div className="container">
                <div className="grid-hero">

                    {/* Left Content */}
                    <div style={{ maxWidth: '600px' }}>
                        <div className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                            <span className="animate-fade-up" style={{ display: 'block', color: 'var(--color-text-muted)', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>EST. 2026 — EXECUTIVE TRANSPORT</span>

                            <h1 className="animate-fade-up delay-100" style={{ marginBottom: '1rem' }}>
                                The Premier Taxi Service: <br />
                                Saudi Arabia to <span className="text-gradient-gold">Bahrain</span>
                            </h1>

                            <p className="animate-fade-up delay-200" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                                Skip the border stress. We provide seamless, 24/7 VIP transfers between Dammam, Khobar, and Bahrain in absolute luxury.
                            </p>
                        </div>

                        <div className="hero-cta-group animate-fade-up delay-300">
                            <Button href="/contact-us">
                                Book Your Ride
                            </Button>
                            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', background: 'transparent', border: '1px solid var(--color-border)' }}>
                                <span style={{ display: 'inline-block', width: '0', height: '0', borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid currentColor' }}></span>
                                Watch Experience
                            </button>
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }} className="animate-fade-up delay-300">
                            <Link href="/blog/cost-guide-2026" style={{ textDecoration: 'underline', color: 'var(--color-text-muted)' }}>
                                View 2026 Taxi Fares & Cost Guide →
                            </Link>
                        </div>

                        <ul className="feature-list animate-fade-up delay-300" style={{ marginTop: '3rem', columns: 2 }}>
                            <li>VIP Causeway Lane Entitlement</li>
                            <li>24/7 Airport Transfers (DMM/BAH)</li>
                            <li>Luxury Lexus & GMC Fleet</li>
                            <li>Professional Vetted Drivers</li>
                        </ul>

                        {/* Social Proof - Principle #2 */}
                        <div className="animate-fade-up delay-300" style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                                ))}
                            </div>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                                Trusted by 500+ Executives
                            </p>
                        </div>
                    </div>

                    {/* Right Image - Principle #1 Mirroring (Happy/Relaxed Passenger) */}
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '200px', height: '200px', background: 'var(--color-background-alt)', borderRadius: '50%', zIndex: -1 }}></div>
                        {/* Ideally this image should show a relaxed executive in the back seat to trigger 'mirroring' of comfort */}
                        <Image
                            src="/images/hero.png"
                            alt="Relaxed Professional in Luxury Taxi"
                            width={800}
                            height={600}
                            style={{ borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }}
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

