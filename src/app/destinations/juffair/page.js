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

const data = destinationData['juffair'];

export const metadata = {
    title: data.metaTitle,
    description: data.metaDescription,
};

export default function JuffairPage() {
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
                            <h3>Why Choose Our Juffair Transfer Service</h3>
                            <ul>
                                {data.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK JUFFAIR RIDE
                            </Link>
                        </div>
                    </div>

                    <div className="content-sidebar">
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>AREA INTEL</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Zone:</strong> Al Juffair</li>
                                <li><strong>Key Spot:</strong> US Navy Base</li>
                                <li><strong>Vibe:</strong> Nightlife & Dining</li>
                                <li><strong>Avg Fare:</strong> {data.marketData.avgFare}</li>
                                <li><strong>Duration:</strong> {data.marketData.avgDuration}</li>
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
                <TrustBar clientsServed={data.socialProof.clientsServed} cityName="Juffair" />
                <LocalMarketData data={data.marketData} cityName="Juffair" />
                <NearbyAreas areas={data.nearbyAreas} cityName="Juffair" />
                <LocalGuide landmarks={data.landmarks} neighborhoods={data.neighborhoods} cityName="Juffair" />
                <CityReviews reviews={data.reviews} cityName="Juffair" />
                <ExpertInsight text={data.expertOpinion} cityName="Juffair" />
                <PageFAQ faqs={data.faqs} cityName="Juffair" />
                <UrgencyBanner message={data.urgency.message} slots={data.urgency.slots} cityName="Juffair" />
                <LastUpdated date={data.lastUpdated} />
                <SchemaMarkup type="location" data={{ coordinates: data.coordinates, faqs: data.faqs }} />

            </div>
        </div>
    );
}
