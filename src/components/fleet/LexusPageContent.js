'use client';

import Link from 'next/link';
import ExpertInsight from '@/components/sections/ExpertInsight';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';
import PageHero from '@/components/ui/PageHero';

export default function LexusPageContent() {
    return (
        <>
            <PageHero
                title="Lexus ES: Silence & Sophistication"
                subtitle="Whisper-quiet luxury for the discerning traveler. The ultimate executive sanctuary between Saudi Arabia and Bahrain."
                label="LUXURY SEDAN"
            />

            <div className="section">
                <div className="container">

                    <div className="content-grid">

                        {/* Main Content */}
                        <div className="content-main">

                            <div className="highlight-box">
                                <p className="lead-text">
                                    <strong>Silence. Smoothness. Sophistication.</strong> The Lexus ES is chosen by our most discerning clients who view travel time as an opportunity to relax or work in peace. It offers a whisper-quiet cabin unmatched by any other vehicle in our fleet.
                                </p>
                            </div>

                            <div className="text-content">
                                <h2>The Business Travel Standard</h2>
                                <p>
                                    For consultants, executives, and diplomats, the Lexus ES is the default mode of transport. Its understated elegance projects professionalism without being ostentatious. It is perfect for:
                                </p>
                                <ul className="feature-list">
                                    <li><strong>Client Meetings:</strong> Arrive in Bahrain refreshed and ready to present.</li>
                                    <li><strong>Intercity Commutes:</strong> The active suspension smooths out even the roughest patches of the Dammam-Khobar highway.</li>
                                    <li><strong>Private Calls:</strong> Active noise cancellation creates a private environment for confidential discussions.</li>
                                </ul>

                                <h2>Vehicle Specifications</h2>
                                <div className="specs-grid">
                                    <div className="spec-card">
                                        <div className="spec-icon">💎</div>
                                        <div>
                                            <span className="spec-label">Class</span>
                                            <span className="spec-value">Luxury Sedan</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">👥</div>
                                        <div>
                                            <span className="spec-label">Capacity</span>
                                            <span className="spec-value">3 Passengers</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">🧳</div>
                                        <div>
                                            <span className="spec-label">Luggage</span>
                                            <span className="spec-value">2 Large Bags</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">🎵</div>
                                        <div>
                                            <span className="spec-label">Features</span>
                                            <span className="spec-value">Mark Levinson Audio</span>
                                        </div>
                                    </div>
                                </div>

                                <h3>Availability Note</h3>
                                <p>
                                    Our Lexus fleet is in high demand, particularly on weekdays (Sunday - Thursday). We strictly recommend booking at least <strong>12 hours in advance</strong> to guarantee availability of this specific model.
                                </p>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="content-sidebar">
                            <div className="sticky-card">
                                <h3>QUICK OVERVIEW</h3>
                                <ul className="quick-specs">
                                    <li><span>Model</span> <strong>Lexus ES350</strong></li>
                                    <li><span>Year</span> <strong>2024-2026</strong></li>
                                    <li><span>Type</span> <strong>Luxury Sedan</strong></li>
                                    <li><span>Pax</span> <strong>Max 3</strong></li>
                                    <li><span>Bags</span> <strong>Max 2 Large</strong></li>
                                </ul>
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <Link href="/booking" className="btn btn-primary full-width">
                                        BOOK LUXURY RIDE
                                    </Link>
                                    <p className="secure-badge">🔒 Priority Booking</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <ExpertInsight
                text="The Lexus ES is requested by name. Our corporate clients, particularly those commuting between SABIC headquarters in Jubail and Bahrain Financial Harbour, insist on it. The Mark Levinson sound system and noise-canceling cabin mean they can take calls or simply decompress. It is, quite simply, the quietest ride across the causeway."
                author="VIP Services Coordinator, Dammam to Bahrain Taxi"
                cityName="Saudi-Bahrain"
            />

            <PageFAQ
                faqs={[
                    { question: "What makes the Lexus ES different from the Camry?", answer: "The Lexus ES offers a luxury-grade experience: Mark Levinson premium audio, active noise cancellation, premium leather seating, and superior suspension tuning. It is significantly quieter and smoother, ideal for executives and professionals." },
                    { question: "Should I book the Lexus in advance?", answer: "Yes, strongly recommended. Our Lexus fleet is limited and in high demand, especially on weekdays. Book at least 12-24 hours in advance to guarantee availability." },
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
                        { name: 'Lexus ES', url: '/fleet/lexus' },
                    ],
                    faqs: [
                        { question: "What makes the Lexus ES different from the Camry?", answer: "The Lexus ES offers a luxury-grade experience: Mark Levinson premium audio, active noise cancellation, premium leather seating, and superior suspension tuning. It is significantly quieter and smoother, ideal for executives and professionals." },
                        { question: "Should I book the Lexus in advance?", answer: "Yes, strongly recommended. Our Lexus fleet is limited and in high demand, especially on weekdays. Book at least 12-24 hours in advance to guarantee availability." },
                    ],
                }}
            />

            <LastUpdated date="February 19, 2026" />

        </>
    );
}

