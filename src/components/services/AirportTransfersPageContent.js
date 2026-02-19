'use client';

import Link from 'next/link';
import serviceData from '@/data/serviceData';
import PageFAQ from '@/components/sections/PageFAQ';
import ComparisonTable from '@/components/sections/ComparisonTable';
import ExpertInsight from '@/components/sections/ExpertInsight';
import TrustBar from '@/components/sections/TrustBar';
import UrgencyBanner from '@/components/sections/UrgencyBanner';
import LastUpdated from '@/components/sections/LastUpdated';
import LocalMarketData from '@/components/sections/LocalMarketData';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageHero from '@/components/ui/PageHero';

export default function AirportTransfersPageContent() {
    const data = serviceData['airport-transfers'];

    return (
        <>
            <PageHero
                title="Airport Transfers to Bahrain"
                subtitle="Seamless connections between Dammam (DMM), Bahrain (BAH), and your final destination. Flight tracking included."
                label="AIRPORT TRANSFER"
            />

            <div className="section">
                <div className="container">

                    <div className="content-grid">

                        {/* Main Content */}
                        <div className="content-main">

                            <div className="highlight-box">
                                <p className="lead-text">
                                    {data.description}
                                </p>
                            </div>

                            <hr className="divider" />

                            <div
                                className="text-content"
                                dangerouslySetInnerHTML={{ __html: data.longText }}
                            />

                            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                                <Link href="/booking/" className="btn btn-primary btn-large">
                                    BOOK AIRPORT TRANSFER
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="content-sidebar">
                            <div className="sticky-card">
                                <h3>SERVICE HIGHLIGHTS</h3>
                                <ul className="feature-list-sidebar">
                                    {data.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <UrgencyBanner message={data.urgency.message} slots={data.urgency.slots} small={true} />
                                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                    <Link href="/booking/" className="btn btn-primary full-width">
                                        BOOK NOW
                                    </Link>
                                    <p className="secure-badge">🔒 Flight Tracking Included</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* SEO Authority Sections */}
            <div className="section bg-light">
                <div className="container">
                    <LocalMarketData data={data.marketData} cityName="Airport Transfer" />
                </div>
            </div>

            <div className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <ComparisonTable
                        title="Transfer Options"
                        headers={data.comparison.headers}
                        rows={data.comparison.rows}
                        highlightRow={data.comparison.highlightRow}
                        cityName="Airport"
                    />
                </div>
            </div>

            <ExpertInsight text={data.expertOpinion} cityName="Airport Transfer" />

            <div className="section bg-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <PageFAQ faqs={data.faqs} cityName="Airport" />
                </div>
            </div>

            <TrustBar clientsServed={data.socialProof.clientsServed} />
            <LastUpdated date={data.lastUpdated} />

            <SchemaMarkup
                type="service"
                data={{
                    serviceName: data.title,
                    serviceDescription: data.metaDescription,
                    faqs: data.faqs,
                    breadcrumbs: [
                        { name: 'Home', href: '/' },
                        { name: 'Services', href: '/services/' },
                        { name: 'Airport Transfers', href: '/services/airport-transfers/' },
                    ],
                }}
            />

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
                    padding: 2rem;
                    border-radius: 8px;
                    margin-bottom: 2rem;
                }
                .lead-text {
                    font-size: 1.2rem;
                    line-height: 1.8;
                    color: #2c3e50;
                    font-family: Georgia, serif;
                    margin: 0;
                }
                .divider {
                    border: none;
                    border-top: 1px solid #eee;
                    margin: 2rem 0;
                }
                .text-content {
                    font-family: Georgia, serif;
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #444;
                }
                .text-content :global(h2) {
                    font-family: var(--font-primary, sans-serif);
                    margin-top: 2.5rem;
                    font-size: 1.8rem;
                    color: #111;
                }
                .text-content :global(h3) {
                    font-family: var(--font-primary, sans-serif);
                    margin-top: 2rem;
                    font-size: 1.4rem;
                    color: #333;
                }
                .text-content :global(ul) {
                    padding-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .btn-large {
                    padding: 1rem 3rem;
                    font-size: 1.1rem;
                }
                .sticky-card {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
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
                .feature-list-sidebar {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.5rem 0;
                }
                .feature-list-sidebar li {
                    padding: 0.8rem 0;
                    border-bottom: 1px solid #f1f5f9;
                    position: relative;
                    padding-left: 1.5rem;
                    font-size: 0.95rem;
                    color: #475569;
                }
                .feature-list-sidebar li::before {
                    content: "✓";
                    position: absolute;
                    left: 0;
                    color: var(--color-accent);
                    font-weight: bold;
                }
                .full-width {
                    width: 100%;
                    display: block;
                    text-align: center;
                }
                .secure-badge {
                    font-size: 0.8rem;
                    color: #64748b;
                    margin-top: 1rem;
                    opacity: 0.8;
                }
                .bg-light {
                    background: #f8f9fa;
                    padding: 4rem 0;
                }
            `}</style>
        </>
    );
}
