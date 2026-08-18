import { CheckCircle, ShieldCheck, ArrowRight, Star, Zap, Clock, Car, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            {/* Background Mesh */}
            <div className="hero-bg-mesh"></div>

            <div className="container">
                <div className="hero-grid">
                    
                    {/* H1-Heavy Optimized Content */}
                    <div className="hero-content">
                        <div className="hero-badge-row">
                            <span className="hero-badge">#1 RATED SERVICE IN KSA</span>
                            <div className="hero-stars">
                                <Star size={16} fill="var(--color-accent)" /><Star size={16} fill="var(--color-accent)" /><Star size={16} fill="var(--color-accent)" /><Star size={16} fill="var(--color-accent)" /><Star size={16} fill="var(--color-accent)" />
                                <span className="hero-rating">4.95 Google Rating</span>
                            </div>
                        </div>
                        
                        <h1 className="hero-h1">
                             <span className="text-gradient-gold">Dammam to Bahrain</span><br />
                             Taxi, Private Transfer <br />
                             & Chauffeur Service
                        </h1>

                        <p className="hero-subtitle">
                            <strong>Stop the Border Stress.</strong> Skip the 2-hour queue with the fastest cross-border clearance. Experience fixed pricing, dedicated drivers, and a <strong>zero-waiting guarantee</strong>.
                        </p>

                        <div className="hero-features">
                            <div className="hero-feature">
                                <Car size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>Private Vehicle</span>
                            </div>
                            <div className="hero-feature">
                                <MapPin size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>Door-to-Door Service</span>
                            </div>
                            <div className="hero-feature">
                                <ShieldCheck size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>Saudi–Bahrain Causeway</span>
                            </div>
                            <div className="hero-feature">
                                <CheckCircle size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>Professional Driver</span>
                            </div>
                            <div className="hero-feature">
                                <Clock size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>24/7 Booking</span>
                            </div>
                        </div>

                        <div className="hero-cta-row">
                            <Link
                                href="https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20Dammam%20to%20Bahrain.%20Pickup%3A%20%5B%5D%2C%20Destination%3A%20%5B%5D%2C%20Date%3A%20%5B%5D%2C%20Time%3A%20%5B%5D%2C%20Passengers%3A%20%5B%5D"
                                className="btn btn-primary hero-cta-btn"
                                data-track="quote_start"
                                data-track-label="Hero Primary WhatsApp CTA"
                            >
                                GET A QUOTE ON WHATSAPP
                            </Link>
                            <Link
                                href="/fare-calculator/"
                                className="btn hero-cta-secondary"
                                data-track="quote_start"
                                data-track-label="Hero Check Price CTA"
                            >
                                CHECK PRICE
                            </Link>
                        </div>
                        <div className="hero-driver-status" style={{ marginTop: '1.25rem' }}>
                            <div className="hero-pulse-dot"></div>
                            <span>14 Drivers Available Near Causeway</span>
                        </div>
                    </div>

                    {/* Highly Visible Price & Benefit Card */}
                    <div className="hero-card-col">
                        <div className="hero-price-card hover-scale">
                            <span className="hero-card-label">EXECUTIVE CAUSEWAY CHAUFFEUR</span>
                            
                            <div className="hero-price-block">
                                <div className="hero-price-row">
                                    <span className="hero-price-number" style={{ fontSize: '2rem' }}>Get Local Quote</span>
                                </div>
                                <span className="hero-price-context">CUSTOMIZED RATES VIA WHATSAPP</span>
                                <Link href="/fare-calculator/" style={{ display: 'block', marginTop: '0.6rem', fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 700, textDecoration: 'underline' }}>
                                    Price depends on pickup, vehicle &amp; passengers →
                                </Link>
                            </div>

                            <div className="hero-card-includes">
                                <p className="hero-includes-title">EVERY TRIP INCLUDES:</p>
                                <ul className="hero-includes-list">
                                    <li>✓ Chauffeur Handles all Border Fees</li>
                                    <li>✓ No Waiting at Causeway Protocol</li>
                                    <li>✓ Pay Only After Destination is Reached</li>
                                    <li>✓ Free Flight Monitoring (DMM Transfers)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
