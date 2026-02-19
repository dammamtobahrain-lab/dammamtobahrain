import { Check, Info, MapPin, Shield, Star, Trophy, Users } from "lucide-react";

export default function AuthorityContent() {
    return (
        <section className="section" style={{ background: 'white', padding: '4rem 0' }}>
            <div className="container">

                {/* 1. Market Data Stats Grid (Cost & Time Concerns) */}
                <div className="animate-fade-up">
                    <h2 className="text-2xl font-bold mb-4">Market Insights: Dammam to Bahrain</h2>
                    <div className="market-data-grid">
                        <div className="market-stat-card">
                            <div className="stat-value">45-60</div>
                            <div className="stat-label">Minutes Avg. Travel Time</div>
                        </div>
                        <div className="market-stat-card">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">On-Time Arrival Rate</div>
                        </div>
                        <div className="market-stat-card">
                            <div className="stat-value">25km</div>
                            <div className="stat-label">Causeway Bridge Length</div>
                        </div>
                        <div className="market-stat-card">
                            <div className="stat-value">24/7</div>
                            <div className="stat-label">Customs Assistance</div>
                        </div>
                    </div>
                </div>

                <div className="content-layout" style={{ marginTop: '4rem' }}>
                    <div className="content-main">

                        {/* 2. Comparison Matrix (DIY/Competitors) */}
                        <h3 className="text-xl font-bold mb-4">Why Executive Taxi vs. Ride Apps?</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Executive Causeway</th>
                                        <th>App-Based (Uber/Careem)</th>
                                        <th>Public Bus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="highlight-row">
                                        <td><strong>Causeway Experience</strong></td>
                                        <td><strong>VIP Lane Access</strong></td>
                                        <td>Standard Lane</td>
                                        <td>Bus Lane (Slow)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Waiting Charges</strong></td>
                                        <td>Free (up to 60 mins)</td>
                                        <td>High per minute</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr className="highlight-row">
                                        <td><strong>Privacy</strong></td>
                                        <td><strong>100% Guaranteed</strong></td>
                                        <td>Variable</td>
                                        <td>Public</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Insurance</strong></td>
                                        <td>Full Commercial Coverage</td>
                                        <td>Personal Coverage</td>
                                        <td>Standard</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 3. Expert/Authority Insight */}
                        <div className="expert-box">
                            <div className="expert-label">Logistics Expert Insight</div>
                            <p className="expert-text">
                                "Crossing the King Fahd Causeway requires more than just a car; it demands knowledge of peak hours and customs protocols. Our dedicated lane access reduces transit time by up to 40% during weekends."
                            </p>
                            <div className="expert-author">
                                — Ahmed Al-Rashid, Head of Operations
                            </div>
                        </div>

                        {/* 4. Local Guide / Entity Optimization */}
                        <div className="local-guide-section">
                            <h3>Key Transit Points & Landmarks</h3>
                            <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                We actively monitor traffic flow on <strong>Highway 95 (Abu Hadriyah)</strong> and the <strong>King Fahd Causeway (Route 80)</strong> to adjust extraction times.
                            </p>
                            <div className="landmarks-grid">
                                <div className="landmark-item">
                                    <MapPin size={16} /> King Fahd Int'l Airport (DMM)
                                </div>
                                <div className="landmark-item">
                                    <MapPin size={16} /> Bahrain Int'l Airport (BAH)
                                </div>
                                <div className="landmark-item">
                                    <MapPin size={16} /> Al Khobar Corniche
                                </div>
                                <div className="landmark-item">
                                    <MapPin size={16} /> Saudi Aramco Camp
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar / Trust Signals */}
                    <aside className="content-sidebar">
                        <div style={{ borderRadius: '8px' }}>
                            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Shield size={20} color="var(--color-accent)" /> Verified Safe
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Check size={16} color="green" /> Gov. Registered Fleet
                                </li>
                                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Check size={16} color="green" /> Background Checked
                                </li>
                                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Check size={16} color="green" /> GPS Tracked Trips
                                </li>
                            </ul>

                            <div className="urgency-banner" style={{ marginTop: '2rem', fontSize: '0.85rem' }}>
                                <span className="urgency-dot"></span>
                                <div>
                                    <strong>High Demand:</strong><br />Limited slots for upcoming Eid holidays.
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

            </div>
        </section>
    );
}
