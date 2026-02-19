'use client';

import Link from 'next/link';
import ExpertInsight from '@/components/sections/ExpertInsight';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';
import PageHero from '@/components/ui/PageHero';

export default function StariaPageContent() {
    return (
        <>
            <PageHero
                title="Hyundai Staria: The Future of Group Travel"
                subtitle="Spaceship-inspired design with first-class comfort for teams and families. Experience the panoramic journey."
                label="LUXURY MPV"
            />

            <div className="section">
                <div className="container">

                    <div className="content-grid">

                        {/* Main Content */}
                        <div className="content-main">

                            <div className="highlight-box">
                                <p className="lead-text">
                                    <strong>Forget everything you know about vans.</strong> The Hyundai Staria is a spaceship on wheels. Designed for ultimate passenger comfort, it features massive panoramic windows and individual captain's chairs that rival business class airline seats.
                                </p>
                            </div>

                            <div className="text-content">
                                <h2>Best For Groups & Teams</h2>
                                <p>
                                    Why split your group into two taxis when you can travel together? The Staria fosters conversation and connection. It is the top choice for:
                                </p>
                                <ul className="feature-list">
                                    <li><strong>Corporate Teams:</strong> Conduct a briefing on the way to your meeting in Manama.</li>
                                    <li><strong>Sightseeing Tours:</strong> The massive windows offer unparalleled views of the Arabian Gulf while crossing the bridge.</li>
                                    <li><strong>Extended Families:</strong> Comfortable seating for grandparents, parents, and children all in one vehicle.</li>
                                </ul>

                                <h2>Vehicle Specifications</h2>
                                <div className="specs-grid">
                                    <div className="spec-card">
                                        <div className="spec-icon">🚍</div>
                                        <div>
                                            <span className="spec-label">Class</span>
                                            <span className="spec-value">Luxury MPV</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">👨‍👩‍👦‍👦</div>
                                        <div>
                                            <span className="spec-label">Capacity</span>
                                            <span className="spec-value">7 Passengers</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">🧳</div>
                                        <div>
                                            <span className="spec-label">Luggage</span>
                                            <span className="spec-value">4-5 Large Bags</span>
                                        </div>
                                    </div>
                                    <div className="spec-card">
                                        <div className="spec-icon">💺</div>
                                        <div>
                                            <span className="spec-label">Seating</span>
                                            <span className="spec-value">Captain Chairs</span>
                                        </div>
                                    </div>
                                </div>

                                <h3>Comfort Redefined</h3>
                                <p>
                                    Unlike traditional vans with bench seats, the Staria (Luxury Trim) offers independent seats that slide and recline. This ensures that even the person in the middle row has personal space and comfort, with USB ports available at every seat.
                                </p>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="content-sidebar">
                            <div className="sticky-card">
                                <h3>QUICK OVERVIEW</h3>
                                <ul className="quick-specs">
                                    <li><span>Model</span> <strong>Hyundai Staria</strong></li>
                                    <li><span>Year</span> <strong>2024-2025</strong></li>
                                    <li><span>Type</span> <strong>Luxury Van</strong></li>
                                    <li><span>Pax</span> <strong>Max 7</strong></li>
                                    <li><span>Bags</span> <strong>Max 5 Large</strong></li>
                                </ul>
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <Link href="/booking" className="btn btn-primary full-width">
                                        BOOK STARIA VAN
                                    </Link>
                                    <p className="secure-badge">🔒 Instant Confirmation</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <ExpertInsight
                text="The Staria surprised us. When Hyundai launched it, we were skeptical about a van competing with our SUV fleet. But after testing it, the individual captain chairs and massive panoramic windows won us over. Corporate teams love it because everyone faces forward with their own space — no cramped bench seats. It has become our default vehicle for group airport transfers."
                author="Fleet Manager, Dammam to Bahrain Taxi"
                cityName="Saudi-Bahrain"
            />

            <PageFAQ
                faqs={[
                    { question: "Is the Hyundai Staria a van or an MPV?", answer: "The Staria is classified as a luxury MPV (Multi-Purpose Vehicle). Unlike traditional vans with bench seats, the Staria Luxury trim features individual captain chairs that slide and recline independently. It offers a premium, car-like experience." },
                    { question: "Can the Staria fit 7 people with luggage?", answer: "Yes, but luggage space is reduced with full occupancy. With 7 passengers, expect room for 2-3 large suitcases. For groups with heavy luggage, we can arrange a second vehicle or recommend the Yukon XL as an alternative." },
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
                        { name: 'Hyundai Staria', url: '/fleet/hyundai-staria' },
                    ],
                    faqs: [
                        { question: "Is the Hyundai Staria a van or an MPV?", answer: "The Staria is classified as a luxury MPV (Multi-Purpose Vehicle). Unlike traditional vans with bench seats, the Staria Luxury trim features individual captain chairs that slide and recline independently. It offers a premium, car-like experience." },
                        { question: "Can the Staria fit 7 people with luggage?", answer: "Yes, but luggage space is reduced with full occupancy. With 7 passengers, expect room for 2-3 large suitcases. For groups with heavy luggage, we can arrange a second vehicle or recommend the Yukon XL as an alternative." },
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
