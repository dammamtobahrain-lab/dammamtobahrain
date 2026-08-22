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
import RelatedGuide from '@/components/sections/RelatedGuide';
import LeadForm from '@/components/LeadForm';

const data = serviceData['visa-run'];

export const metadata = {
    title: data.metaTitle,
    description: data.metaDescription,
};

export default function VisaRunPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE: {data.title}</h1>

                <div className="content-grid-responsive">

                    <div className="content-main-col">
                        <p className="lead-text">
                            {data.description}
                        </p>

                        <hr className="divider" />

                        <div
                            className="long-text-content"
                            dangerouslySetInnerHTML={{ __html: data.longText }}
                        />

                        <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20to%20check%20Visa%20Run%20availability." className="btn btn-primary btn-large" data-track="quote_start" data-track-label="Visa Run Main CTA">
                                CHECK VISA RUN AVAILABILITY
                            </Link>
                            <Link href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20private%20taxi." className="btn btn-outline btn-large" data-track="quote_start" data-track-label="Visa Run Private Taxi CTA">
                                GET PRIVATE TAXI QUOTE
                            </Link>
                        </div>

                        {/* Cross-links to core route pages */}
                        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--color-background-alt)', borderRadius: '12px', fontSize: '0.9rem' }}>
                            <strong>Need transport for your visa run?</strong> Book your{' '}
                            <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Dammam to Bahrain taxi</Link>{' '}
                            or your{' '}
                            <Link href="/services/bahrain-to-dammam/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>return trip from Bahrain to Dammam</Link>{' '}
                            alongside your visa run, or see what affects your fare on the{' '}
                            <Link href="/fare-calculator/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Get a Quote</Link> page.
                        </div>
                    </div>

                    <div className="content-sidebar-col">
                        <div className="sticky-sidebar">
                            <h3 className="sidebar-title">PACKAGE DETAILS</h3>
                            <ul className="sidebar-list">
                                {data.features.map((feature, i) => (
                                    <li key={i}><strong>&#10003;</strong> {feature}</li>
                                ))}
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20to%20check%20Visa%20Run%20availability." className="btn btn-primary btn-full-width" data-track="quote_start" data-track-label="Visa Run Sidebar CTA">
                                    BOOK ON WHATSAPP
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                {/* SEO Authority Sections */}
                <LocalMarketData data={data.marketData} cityName="Visa Run" />

                <ComparisonTable
                    title="Vehicle Options for Visa Runs"
                    headers={data.comparison.headers}
                    rows={data.comparison.rows}
                    highlightRow={data.comparison.highlightRow}
                />

                <ExpertInsight text={data.expertOpinion} cityName="Visa Run" />

                <PageFAQ faqs={data.faqs} />

                {/* Lightweight quote option — WhatsApp remains the primary flow above */}
                <div style={{ maxWidth: '640px', margin: '3rem auto' }}>
                    <LeadForm defaultPickup="Dammam, Saudi Arabia" defaultDestination="Bahrain" title="Prefer a Formal Quote?" />
                </div>

                <RelatedGuide />

                <UrgencyBanner message={data.urgency.message} slots={data.urgency.slots} />

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
                            { name: 'Services', href: '/services' },
                            { name: 'Visa Run', href: '/services/visa-run' },
                        ],
                    }}
                />
            </div>
        </div>
    );
}
