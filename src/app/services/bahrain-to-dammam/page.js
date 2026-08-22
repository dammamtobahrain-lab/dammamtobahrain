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

const data = serviceData['bahrain-to-dammam'];

export const metadata = {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: '/services/bahrain-to-dammam/' },
};

export default function BahrainToDammamPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE: {data.title}</h1>

                <div className="content-grid-responsive">

                    <div className="content-main-col">
                        <p className="lead-text">
                            {data.description}
                        </p>

                        <div style={{ margin: '2rem 0' }}>
                            <LeadForm defaultPickup="Bahrain" defaultDestination="Dammam, Saudi Arabia" title="Get Your Bahrain to Dammam Quote" />
                        </div>

                        <hr className="divider" />

                        <div
                            className="long-text-content"
                            dangerouslySetInnerHTML={{ __html: data.longText }}
                        />

                        <div style={{ margin: '3rem 0' }}>
                            <LeadForm defaultPickup="Bahrain" defaultDestination="Dammam, Saudi Arabia" title="Request Your Fixed Quote" />
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link
                                href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20Bahrain%20to%20Dammam.%20Pickup%3A%20%5BArea%20in%20Bahrain%5D%2C%20Destination%3A%20%5BDammam%2FKhobar%2FDhahran%5D%2C%20Date%3A%20%5BDate%5D%2C%20Passengers%3A%20%5BNumber%5D"
                                className="btn btn-primary btn-large"
                                data-track="quote_start"
                                data-track-label="Bahrain to Dammam - Main CTA"
                            >
                                BOOK ON WHATSAPP
                            </Link>
                        </div>

                        {/* Cross-links to related commercial pages */}
                        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--color-background-alt)', borderRadius: '12px', fontSize: '0.9rem' }}>
                            <strong>Also traveling the other way?</strong> See our{' '}
                            <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Dammam to Bahrain taxi</Link>{' '}page, or check pickup from{' '}
                            <Link href="/services/dammam-airport-to-bahrain/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Dammam Airport</Link>{' '}and{' '}
                            <Link href="/services/bahrain-airport-to-dammam/" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' }}>Bahrain Airport</Link>.
                        </div>
                    </div>

                    <div className="content-sidebar-col">
                        <div className="sticky-sidebar">
                            <h3 className="sidebar-title">SERVICE HIGHLIGHTS</h3>
                            <ul className="sidebar-list">
                                {data.features.map((feature, i) => (
                                    <li key={i}><strong>&#10003;</strong> {feature}</li>
                                ))}
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link
                                    href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20Bahrain%20to%20Dammam."
                                    className="btn btn-primary btn-full-width"
                                    data-track="quote_start"
                                    data-track-label="Bahrain to Dammam - Sidebar CTA"
                                >
                                    BOOK ON WHATSAPP
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SEO Authority Sections */}
                <LocalMarketData data={data.marketData} cityName="Bahrain" />

                <ComparisonTable
                    title="Vehicle Options"
                    headers={data.comparison.headers}
                    rows={data.comparison.rows}
                    highlightRow={data.comparison.highlightRow}
                />

                <ExpertInsight text={data.expertOpinion} cityName="Bahrain" />

                <PageFAQ faqs={data.faqs} />

                <div style={{ maxWidth: '640px', margin: '3rem auto' }}>
                    <LeadForm defaultPickup="Bahrain" defaultDestination="Dammam, Saudi Arabia" title="Ready to Book? Get Your Quote" />
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
                            { name: 'Services', href: '/services/' },
                            { name: 'Bahrain to Dammam', href: '/services/bahrain-to-dammam/' },
                        ],
                    }}
                />
            </div>
        </div>
    );
}
