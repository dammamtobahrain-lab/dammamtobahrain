import { CheckCircle, ShieldCheck, ArrowRight, Star, Zap, Clock } from "lucide-react";
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
                                <Zap size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>Fastest Border Clearance</span>
                            </div>
                            <div className="hero-feature">
                                <Clock size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>Zero Waiting Guarantee</span>
                            </div>
                            <div className="hero-feature">
                                <ShieldCheck size={22} color="var(--color-accent)" strokeWidth={3} />
                                <span>Fixed Rates - No Surge</span>
                            </div>
                        </div>

                        <div className="hero-cta-row">
                            <Link href="https://wa.me/966569487569" className="btn btn-primary hero-cta-btn">
                                SECURE YOUR DRIVER NOW — PAY AT ARRIVAL
                            </Link>
                            <div className="hero-driver-status">
                                <div className="hero-pulse-dot"></div>
                                <span>14 Drivers Available Near Causeway</span>
                            </div>
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
