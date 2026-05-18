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
                                <Link href="https://wa.me/966569487569" className="btn btn-primary btn-large">
                                    BOOK ON WHATSAPP
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
                                    <Link href="https://wa.me/966569487569" className="btn btn-primary full-width">
                                        BOOK ON WHATSAPP
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

        </>

    );
}
