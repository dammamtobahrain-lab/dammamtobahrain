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

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking/" className="btn btn-primary btn-large">
                                BOOK VISA RUN
                            </Link>
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
                                <Link href="/booking/" className="btn btn-primary btn-full-width">
                                    BOOK NOW
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
