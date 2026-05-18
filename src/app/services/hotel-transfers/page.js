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

const data = serviceData['hotel-transfers'];

export const metadata = {
    title: data.metaTitle,
    description: data.metaDescription,
};

export default function HotelTransfersPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE: {data.title}</h1>

                <div className="responsive-grid-2-1">

                    <div style={{ border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '12px', background: '#fff' }}>
                        <p style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', lineHeight: '1.65', color: 'var(--color-text-main)' }}>
                            {data.description}
                        </p>

                        <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />

                        <div
                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: '1.65', color: '#444' }}
                            dangerouslySetInnerHTML={{ __html: data.longText }}
                        />

                        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '12px 36px', fontSize: '1rem' }}>
                                BOOK HOTEL TRANSFER
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '1px solid var(--color-border)', padding: '1.5rem', background: '#f9f9f9', position: 'sticky', top: '20px', borderRadius: '12px' }}>
                            <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '8px', marginBottom: '1rem', fontSize: '1rem' }}>SERVICE SPECS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '1.8', fontSize: '0.85rem' }}>
                                {data.features.map((feature, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}><strong>&#10003;</strong> {feature}</li>
                                ))}
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                    BOOK NOW
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SEO Authority Sections */}
                <LocalMarketData data={data.marketData} cityName="Hotel Transfer" />

                <ComparisonTable
                    title="Hotel Transfer Vehicle Options"
                    headers={data.comparison.headers}
                    rows={data.comparison.rows}
                    highlightRow={data.comparison.highlightRow}
                />

                <ExpertInsight text={data.expertOpinion} cityName="Hotel Transfer" />

                <PageFAQ faqs={data.faqs} />

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
                            { name: 'Hotel Transfers', href: '/services/hotel-transfers' },
                        ],
                    }}
                />
            </div>
        </div>
    );
}
