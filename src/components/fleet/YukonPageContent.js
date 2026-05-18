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

        </>

    );
}
