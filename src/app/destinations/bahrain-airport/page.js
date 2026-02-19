import Link from 'next/link';
import destinationData from '@/data/destinationData';
import PageFAQ from '@/components/sections/PageFAQ';
import CityReviews from '@/components/sections/CityReviews';
import ExpertInsight from '@/components/sections/ExpertInsight';
import TrustBar from '@/components/sections/TrustBar';
import UrgencyBanner from '@/components/sections/UrgencyBanner';
import LastUpdated from '@/components/sections/LastUpdated';
import LocalMarketData from '@/components/sections/LocalMarketData';
import LocalGuide from '@/components/sections/LocalGuide';
import NearbyAreas from '@/components/sections/NearbyAreas';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

const data = destinationData['bahrain-airport'];

export const metadata = {
    title: data.metaTitle,
    description: data.metaDescription,
};

export default function BahrainAirportPage() {
    return (
        <div className="section">
            <div className="container">

                {/* Hero Section */}
                <div className="destination-hero">
                    <h1 className="section-title">{data.title}</h1>
                    <p className="destination-description">{data.description}</p>
                </div>

                {/* Main 2-Column Layout */}
                <div className="content-layout">

                    <div className="content-main">
                        {/* Long-form Content */}
                        <div
                            className="destination-content"
                            dangerouslySetInnerHTML={{ __html: data.longText }}
                        />

                        {/* Features List */}
                        <div className="destination-features">
                            <h3>Why Choose Our Airport Transfer Service</h3>
                            <ul>
                                {data.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK AIRPORT RIDE
                            </Link>
                        </div>
                    </div>

                    <div className="content-sidebar">
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>AIRPORT DATA</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Code:</strong> BAH</li>
                                <li><strong>Terminal:</strong> New Terminal</li>
                                <li><strong>Avg Fare:</strong> {data.marketData.avgFare}</li>
                                <li><strong>Duration:</strong> {data.marketData.avgDuration}</li>
                                <li><strong>Peak:</strong> {data.marketData.peakHours}</li>
                                <li><strong>Demand:</strong> {data.marketData.demandTrend}</li>
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
                <TrustBar clientsServed={data.socialProof.clientsServed} cityName="Bahrain Airport" />
                <LocalMarketData data={data.marketData} cityName="Bahrain Airport" />
                <NearbyAreas areas={data.nearbyAreas} cityName="Bahrain Airport" />
                <LocalGuide landmarks={data.landmarks} neighborhoods={data.neighborhoods} cityName="Bahrain Airport" />
                <CityReviews reviews={data.reviews} cityName="Bahrain Airport" />
                <ExpertInsight text={data.expertOpinion} cityName="Bahrain Airport" />
                <PageFAQ faqs={data.faqs} cityName="Bahrain Airport" />
                <UrgencyBanner message={data.urgency.message} slots={data.urgency.slots} cityName="Bahrain Airport" />
                <LastUpdated date={data.lastUpdated} />
                <SchemaMarkup type="location" data={{ coordinates: data.coordinates, faqs: data.faqs }} />

            </div>
        </div>
    );
}
