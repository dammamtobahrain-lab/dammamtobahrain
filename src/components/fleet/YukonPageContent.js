'use client';

import Link from 'next/link';
import ExpertInsight from '@/components/sections/ExpertInsight';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';
import PageHero from '@/components/ui/PageHero';

export default function YukonPageContent() {
    return (
        <>
            <PageHero
                title="GMC Yukon XL: The Family Fortress"
                subtitle="The undisputed King of the Road. Maximum space, safety, and comfort for families and large groups."
                label="FULL-SIZE LUXURY SUV"
            />

            <div className="section">
                <div className="container">

                    <div className="content-grid">

                        {/* Main Content */}
                        <div className="content-main">

                            <div className="highlight-box">
                                <p className="lead-text">
                                    <strong>When space, safety, and presence matter, the GMC Yukon XL is the only choice.</strong> Designed for large families, long-distance travelers from Riyadh, and anyone requiring maximum luggage capacity without compromising on luxury.
                                </p>
                            </div>

                            <div className="text-content">
                                <h2>Perfect For Long Hauls</h2>
                                <p>
                                    The Yukon shines on the long desert highways. Its heavy chassis and long wheelbase absorb bumps effortlessly, making it the premier choice for:
                                </p>
                                <ul className="feature-list">
                                    <li><strong>Riyadh to Bahrain:</strong> The 4-hour journey feels like a short hop in these recliner seats.</li>
                                    <li><strong>Airport Transfers:</strong> Does your family have 6 suitcases? A sedan can't handle that. The Yukon swallows luggage with ease.</li>
                                    <li><strong>VIP Guests:</strong> The commanding ride height and tinted windows offer anonymity and security for high-profile clients.</li>
                                </ul>

                                <h2>Vehicle Specifications</h2>
                                <div className="specs-grid">
                                    <div className="spec-card">
                                        <div className="spec-icon">🚙</div>
                                        <div>
                                            <span className="spec-label">Class</span>
                                            <span className="spec-value">Full-Size SUV</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">👨‍👩‍👧‍👦</div>
                                        <div>
                                            <span className="spec-label">Capacity</span>
                                            <span className="spec-value">7 Passengers</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">🧳</div>
                                        <div>
                                            <span className="spec-label">Luggage</span>
                                            <span className="spec-value">6+ Large Bags</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">❄️</div>
                                        <div>
                                            <span className="spec-label">Climate</span>
                                            <span className="spec-value">Tri-Zone AC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="content-sidebar">
                            <div className="sticky-card">
                                <h3>QUICK OVERVIEW</h3>
                                <ul className="quick-specs">
                                    <li><span>Model</span> <strong>GMC Yukon XL</strong></li>
                                    <li><span>Year</span> <strong>2024-2026</strong></li>
                                    <li><span>Type</span> <strong>Large SUV</strong></li>
                                    <li><span>Pax</span> <strong>Max 7</strong></li>
                                    <li><span>Bags</span> <strong>Max 6 Large</strong></li>
                                </ul>
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <Link href="/booking" className="btn btn-primary full-width">
                                        BOOK LARGE SUV
                                    </Link>
                                    <p className="secure-badge">🔒 Instant Confirmation</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <ExpertInsight
                text="The Yukon is the undisputed king of the Riyadh-to-Bahrain corridor. When a family of six arrives at Dammam Airport with eight suitcases, no other vehicle can handle the job. Its commanding ride height also gives passengers a sense of security in heavy causeway traffic. We maintain a dedicated Yukon fleet specifically for the long-haul routes."
                author="Fleet Operations, Dammam to Bahrain Taxi"
                cityName="Saudi-Bahrain"
            />

            <PageFAQ
                faqs={[
                    { question: "How many suitcases fit in the GMC Yukon XL?", answer: "The Yukon XL can accommodate 6+ large suitcases when configured for maximum cargo. With all 7 seats in use, luggage capacity is reduced to 3-4 large bags. Let us know your group size and luggage count when booking." },
                    { question: "Is the Yukon suitable for the Riyadh to Bahrain route?", answer: "The Yukon is our top recommendation for this 4-hour journey. Its spacious cabin, tri-zone climate control, and highway-tuned suspension make the long desert drive comfortable for the entire family." },
                ]}
                cityName="Fleet"
            />

            <TrustBar clientsServed="500+" />

            <SchemaMarkup
                type="home"
                data={{
                    breadcrumbs: [
                        { name: 'Home', url: '/' },
                        { name: 'Fleet', url: '/fleet' },
                        { name: 'GMC Yukon XL', url: '/fleet/gmc-yukon' },
                    ],
                    faqs: [
                        { question: "How many suitcases fit in the GMC Yukon XL?", answer: "The Yukon XL can accommodate 6+ large suitcases when configured for maximum cargo. With all 7 seats in use, luggage capacity is reduced to 3-4 large bags. Let us know your group size and luggage count when booking." },
                        { question: "Is the Yukon suitable for the Riyadh to Bahrain route?", answer: "The Yukon is our top recommendation for this 4-hour journey. Its spacious cabin, tri-zone climate control, and highway-tuned suspension make the long desert drive comfortable for the entire family." },
                    ],
                }}
            />

            <LastUpdated date="February 19, 2026" />

            <style jsx>{`
                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                }
                @media (min-width: 900px) {
                    .content-grid {
                        grid-template-columns: 2fr 1fr;
                    }
                }
                .highlight-box {
                    background: linear-gradient(to right, #f8f9fa, #fff);
                    border-left: 5px solid var(--color-accent);
                    padding: 2.5rem;
                    margin-bottom: 3rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
                }
                .lead-text {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: #2c3e50;
                    font-family: Georgia, serif;
                }
                .text-content {
                    font-family: Georgia, serif;
                    font-size: 1.15rem;
                    line-height: 1.9;
                    color: #444;
                }
                .text-content h2, .text-content h3 {
                    font-family: var(--font-primary, sans-serif);
                    margin-top: 2.5rem;
                    margin-bottom: 1.2rem;
                    color: #111;
                    letter-spacing: -0.5px;
                }
                .feature-list {
                    padding-left: 0;
                    list-style: none;
                    margin-bottom: 2.5rem;
                }
                .feature-list li {
                    margin-bottom: 1rem;
                    padding-left: 1.5rem;
                    position: relative;
                }
                .feature-list li::before {
                    content: "✓";
                    color: var(--color-accent);
                    position: absolute;
                    left: 0;
                    font-weight: bold;
                }
                .specs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                .spec-card {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    padding: 1.5rem;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                    transition: transform 0.2s;
                }
                .spec-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 15px rgba(0,0,0,0.05);
                }
                .spec-icon {
                    font-size: 1.5rem;
                    background: #f1f5f9;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                .spec-label {
                    display: block;
                    font-size: 0.8rem;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.2rem;
                }
                .spec-value {
                    display: block;
                    font-weight: 700;
                    color: #1e293b;
                    font-size: 1rem;
                }
                .sticky-card {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    padding: 2.5rem;
                    border-radius: 16px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
                    position: sticky;
                    top: 100px;
                }
                .sticky-card h3 {
                    font-size: 1.1rem;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 1rem;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: #334155;
                }
                .quick-specs {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 2rem 0;
                }
                .quick-specs li {
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem 0;
                    border-bottom: 1px solid #f1f5f9;
                    font-size: 0.95rem;
                }
                .quick-specs li span:first-child {
                    color: #64748b;
                }
                .quick-specs li span:last-child {
                    font-weight: 600;
                    color: #0f172a;
                }
                .quick-specs li:last-child {
                    border-bottom: none;
                }
                .full-width {
                    width: 100%;
                    display: block;
                    text-align: center;
                    padding: 1rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                }
                .secure-badge {
                    font-size: 0.8rem;
                    color: #64748b;
                    margin-top: 1rem;
                    opacity: 0.8;
                }
            `}</style>
        </>
    );
}
