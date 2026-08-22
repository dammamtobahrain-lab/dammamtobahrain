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

export const metadata = {
    title: serviceData['dammam-airport-to-bahrain'].metaTitle,
    description: serviceData['dammam-airport-to-bahrain'].metaDescription,
    alternates: { canonical: '/services/dammam-airport-to-bahrain/' },
};

export default function DammamAirportToBahrainPage() {
    const data = serviceData['dammam-airport-to-bahrain'];

    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">Dammam Airport to Bahrain Taxi – Private Airport Transfer</h1>

                <div className="content-grid-responsive">

                    <div className="content-main-col">
                        <p className="lead-text">
                            {data.description}
                        </p>

                        <div style={{ margin: '2rem 0' }}>
                            <LeadForm defaultPickup="King Fahd International Airport (DMM)" defaultDestination="Bahrain" title="Get Your DMM to Bahrain Quote" />
                        </div>

                        <hr className="divider" />

                        <div
                            className="long-text-content"
                            dangerouslySetInnerHTML={{ __html: data.longText }}
                        />

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link
                                href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20Dammam%20Airport%20(DMM)%20to%20Bahrain.%20Flight%3A%20%5BFlight%20Number%5D%2C%20Destination%3A%20%5BBahrain%20area%5D%2C%20Date%3A%20%5BDate%5D%2C%20Passengers%3A%20%5BNumber%5D"
                                className="btn btn-primary btn-large"
                                data-track="quote_start"
                                data-track-label="DMM to Bahrain - Main CTA"
                            >
                                GET YOUR DMM → BAHRAIN FARE
                            </Link>
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
                                    href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20Dammam%20Airport%20(DMM)%20to%20Bahrain."
                                    className="btn btn-primary btn-full-width"
                                    data-track="quote_start"
                                    data-track-label="DMM to Bahrain - Sidebar CTA"
                                >
                                    Book DMM to Bahrain on WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SEO Authority Sections */}
                <LocalMarketData data={data.marketData} cityName="Dammam Airport" />

                <ComparisonTable
                    title="Vehicle Options for Dammam Airport to Bahrain"
                    headers={data.comparison.headers}
                    rows={data.comparison.rows}
                    highlightRow={data.comparison.highlightRow}
                />

                <ExpertInsight text={data.expertOpinion} cityName="Dammam Airport" />

                <PageFAQ faqs={data.faqs} />

                <div style={{ maxWidth: '640px', margin: '3rem auto' }}>
                    <LeadForm defaultPickup="King Fahd International Airport (DMM)" defaultDestination="Bahrain" title="Ready to Book? Get Your Quote" />
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
                            { name: 'Dammam Airport to Bahrain', href: '/services/dammam-airport-to-bahrain/' },
                        ],
                    }}
                />
            </div>
        </div>
    );
}
