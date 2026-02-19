'use client';

import Link from 'next/link';
import ExpertInsight from '@/components/sections/ExpertInsight';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';
import PageHero from '@/components/ui/PageHero';

export default function CamryPageContent() {
    return (
        <>
            <PageHero
                title="Toyota Camry: The Executive Choice"
                subtitle="The gold standard for reliable, comfortable, and economical travel across the King Fahd Causeway."
                label="EXECUTIVE SEDAN"
            />

            <div className="section">
                <div className="container">

                    <div className="content-grid">

                        {/* Main Content */}
                        <div className="content-main">

                            <div className="highlight-box">
                                <p className="lead-text">
                                    <strong>The Toyota Camry is the gold standard for executive sedan travel in the Gulf.</strong> Perfect for solo travelers, couples, or small families (up to 3 adults) looking for an economical yet comfortable ride across the King Fahd Causeway.
                                </p>
                            </div>

                            <div className="text-content">
                                <h2>Why Choose the Camry?</h2>
                                <p>
                                    It balances cost and comfort perfectly. It is significantly more comfortable than smaller budget taxis but lacks the higher price tag of the large SUVs. Our Camrys are always late-model (2024-2026), ensuring modern safety features and pristine interiors.
                                </p>

                                <h3>Popular Camry Routes</h3>
                                <p>Because of its efficiency, the Camry is our most requested vehicle for quick city-to-city transfers:</p>
                                <ul className="feature-list">
                                    <li><strong>Al Khobar to Bahrain:</strong> The daily commute choice. Fast and agile in traffic.</li>
                                    <li><strong>Dammam Airport to Manama:</strong> Ideal for solo business arrivals.</li>
                                    <li><strong>Jubail to Bahrain:</strong> Smooth highway cruiser for the 2-hour trip.</li>
                                </ul>

                                <h3>Vehicle Specifications</h3>
                                <div className="specs-grid">
                                    <div className="spec-card">
                                        <div className="spec-icon">🚗</div>
                                        <div>
                                            <span className="spec-label">Class</span>
                                            <span className="spec-value">Executive Sedan</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">👥</div>
                                        <div>
                                            <span className="spec-label">Capacity</span>
                                            <span className="spec-value">3 Pax + Chauffeur</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">🧳</div>
                                        <div>
                                            <span className="spec-label">Luggage</span>
                                            <span className="spec-value">2 Large Suitcases</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">❄️</div>
                                        <div>
                                            <span className="spec-label">Comfort</span>
                                            <span className="spec-value">Rear AC, USB</span>
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
                                    <li><span>Model</span> <strong>Toyota Camry GLX</strong></li>
                                    <li><span>Year</span> <strong>2024-2026</strong></li>
                                    <li><span>Type</span> <strong>Sedan</strong></li>
                                    <li><span>Pax</span> <strong>Max 3</strong></li>
                                    <li><span>Bags</span> <strong>Max 2 Large</strong></li>
                                </ul>
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <Link href="/booking" className="btn btn-primary full-width">
                                        BOOK THIS CAR
                                    </Link>
                                    <p className="secure-badge">🔒 Instant Confirmation</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <ExpertInsight
                text="The Camry is our workhorse. It handles 60% of our daily bookings because it hits the sweet spot between affordability and comfort. On the causeway, its suspension absorbs the bridge expansion joints beautifully, and the fuel efficiency means we can offer competitive rates without compromising on vehicle quality."
                author="Senior Driver, Dammam to Bahrain Taxi"
                cityName="Saudi-Bahrain"
            />

            <PageFAQ
                faqs={[
                    { question: "How many bags fit in a Camry?", answer: "The Toyota Camry comfortably fits 2 large suitcases in the trunk plus 2 carry-on bags in the cabin. For additional luggage, consider upgrading to the GMC Yukon XL." },
                    { question: "Is the Camry comfortable for long trips?", answer: "Absolutely. The Camry's suspension is tuned for highway cruising, making it ideal for routes up to 2 hours (like Jubail to Bahrain). For longer trips (Riyadh, 4+ hours), we recommend the Yukon for extra legroom." },
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
                        { name: 'Toyota Camry', url: '/fleet/camry' },
                    ],
                    faqs: [
                        { question: "How many bags fit in a Camry?", answer: "The Toyota Camry comfortably fits 2 large suitcases in the trunk plus 2 carry-on bags in the cabin. For additional luggage, consider upgrading to the GMC Yukon XL." },
                        { question: "Is the Camry comfortable for long trips?", answer: "Absolutely. The Camry's suspension is tuned for highway cruising, making it ideal for routes up to 2 hours (like Jubail to Bahrain). For longer trips (Riyadh, 4+ hours), we recommend the Yukon for extra legroom." },
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
