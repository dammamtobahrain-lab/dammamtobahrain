import Link from 'next/link';
import { notFound } from 'next/navigation';
import locationData from '@/data/locationData';
import PageHero from '@/components/ui/PageHero';
import LocalMarketData from '@/components/sections/LocalMarketData';
import LocalGuide from '@/components/sections/LocalGuide';
import PageFAQ from '@/components/sections/PageFAQ';
import ComparisonTable from '@/components/sections/ComparisonTable';
import RelatedGuide from '@/components/sections/RelatedGuide';
import CityReviews from '@/components/sections/CityReviews';
import ExpertInsight from '@/components/sections/ExpertInsight';
import TrustBar from '@/components/sections/TrustBar';
import UrgencyBanner from '@/components/sections/UrgencyBanner';
import LastUpdated from '@/components/sections/LastUpdated';
import NearbyAreas from '@/components/sections/NearbyAreas';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export function generateStaticParams() {
    return Object.keys(locationData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
    const location = locationData[params.slug];
    if (!location) return { title: 'Location Not Found' };

    const cityName = location.title.split(' TO ')[0] || location.title;

    return {
        title: location.metaTitle || `${location.title} | Premium Transport Service`,
        description: location.metaDescription || location.description,
        keywords: [
            `taxi ${cityName.toLowerCase()} to bahrain`,
            `${cityName.toLowerCase()} bahrain transfer`,
            `${cityName.toLowerCase()} causeway taxi`,
            'saudi bahrain taxi',
            'king fahd causeway taxi',
            'private car bahrain',
        ],
        alternates: {
            canonical: `/locations/${params.slug}/`,
        },
        openGraph: {
            title: location.metaTitle || location.title,
            description: location.metaDescription || location.description,
            url: `https://dammamtobahrain.com/locations/${params.slug}/`,
            type: 'article',
        },
    };
}

export default function LocationPage({ params }) {
    const location = locationData[params.slug];

    if (!location) {
        notFound();
    }

    const cityName = location.title.replace(/ TO BAHRAIN.*| TO SAUDI.*/, '').replace('GUIDE: ', '').replace('DESTINATION: ', '');
    const displayCity = cityName.charAt(0) + cityName.slice(1).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

    return (
        <>
            {/* Schema Markup */}
            <SchemaMarkup
                type="location"
                data={{
                    coordinates: location.coordinates,
                    faqs: location.faqs,
                    breadcrumbs: [
                        { name: 'Home', href: '/' },
                        { name: 'Locations', href: '/locations/' },
                        { name: displayCity, href: `/locations/${params.slug}/` },
                    ],
                    areaServed: [
                        { '@type': 'City', name: displayCity },
                        { '@type': 'City', name: 'Bahrain' },
                    ],
                }}
            />

            {/* Hero Section */}
            <PageHero
                title={location.title}
                subtitle={location.description}
                label="SERVICE AREA"
                ctaText="Book This Route"
                ctaLink="/booking/"
            />

            {/* Trust Bar */}
            <TrustBar clientsServed={location.socialProof?.clientsServed} cityName={displayCity} />

            {/* Main Content Section */}
            <div className="section">
                <div className="container">
                    <div className="content-layout">

                        {/* Main Content */}
                        <div>
                            <div className="content-main">
                                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontFamily: 'Georgia, serif', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                                    {location.description}
                                </p>

                                {/* Long Form Content */}
                                <div
                                    style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}
                                    dangerouslySetInnerHTML={{ __html: location.longText }}
                                />

                                {/* Service Highlights */}
                                <h3 style={{ borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px', display: 'inline-block', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '1.1rem' }}>
                                    Service Highlights
                                </h3>
                                <ul className="feature-list">
                                    {location.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>

                                {/* Expert Insight */}
                                <ExpertInsight
                                    text={location.expertOpinion}
                                    cityName={displayCity}
                                />

                                {/* Urgency Banner */}
                                <UrgencyBanner
                                    cityName={displayCity}
                                    slots={location.urgency?.slots}
                                    message={location.urgency?.message}
                                />

                                {/* CTA */}
                                <div style={{ textAlign: 'center', borderTop: '1px solid var(--color-primary)', paddingTop: '2rem', marginTop: '2rem' }}>
                                    <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Ready to travel? Secure your booking today.</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                        100% satisfaction guarantee · No hidden fees · Free cancellation up to 24hrs
                                    </p>
                                    <Link href="/booking/" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                                        BOOK THIS ROUTE
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="content-sidebar">
                            <div>
                                <h3 style={{ borderBottom: '1px solid var(--color-primary)', paddingBottom: '10px', marginBottom: '1rem', fontSize: '1rem', textTransform: 'uppercase' }}>
                                    ROUTE STATS
                                </h3>
                                <ul style={{ listStyle: 'none', lineHeight: '2.2' }}>
                                    <li><strong>Origin:</strong> {location.sidebarStats?.origin || displayCity}</li>
                                    <li><strong>Dest:</strong> {location.sidebarStats?.destination || 'Bahrain'}</li>
                                    <li><strong>Distance:</strong> {location.sidebarStats?.distance}</li>
                                    <li><strong>Time:</strong> {location.sidebarStats?.time}</li>
                                    <li><strong>Price:</strong> {location.sidebarStats?.price}</li>
                                </ul>
                                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                    <Link href="/booking/" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', width: '100%', display: 'block' }}>
                                        BOOK NOW
                                    </Link>
                                </div>
                                <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '0.75rem', color: 'var(--color-text-muted)' }}>
                                    Trusted by {location.socialProof?.clientsServed || '50+'} passengers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Market Data Stats */}
            <div className="section" style={{ background: '#fafafa', padding: '4rem 0' }}>
                <div className="container">
                    <LocalMarketData data={location.marketData} cityName={displayCity} />
                </div>
            </div>

            {/* Nearby Areas */}
            {location.nearbyAreas && location.nearbyAreas.length > 0 && (
                <div className="section" style={{ padding: '4rem 0' }}>
                    <div className="container">
                        <NearbyAreas areas={location.nearbyAreas} cityName={displayCity} />
                    </div>
                </div>
            )}

            {/* Local Guide */}
            <div className="section" style={{ padding: '0 0 4rem' }}>
                <div className="container">
                    <LocalGuide
                        landmarks={location.landmarks}
                        neighborhoods={location.neighborhoods}
                        highways={location.highways}
                        cityName={displayCity}
                        seasonalDemand={location.seasonalDemand}
                        regulations={location.regulations}
                    />
                </div>
            </div>

            {/* Comparison Table */}
            {location.comparison && (
                <div className="section" style={{ background: '#fafafa', padding: '4rem 0' }}>
                    <div className="container">
                        <ComparisonTable
                            cityName={displayCity}
                            headers={location.comparison.headers}
                            rows={location.comparison.rows}
                            highlightRow={location.comparison.highlightRow}
                        />
                    </div>
                </div>
            )}

            {/* City Reviews */}
            {location.reviews && location.reviews.length > 0 && (
                <div className="section" style={{ padding: '4rem 0' }}>
                    <div className="container">
                        <CityReviews reviews={location.reviews} cityName={displayCity} />
                    </div>
                </div>
            )}

            {/* FAQ Section */}
            {location.faqs && location.faqs.length > 0 && (
                <div className="section" style={{ background: '#fafafa', padding: '4rem 0' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <PageFAQ faqs={location.faqs} cityName={displayCity} />
                    </div>
                </div>
            )}

            <RelatedGuide />

            {/* Last Updated */}
            <div className="container">
                <LastUpdated date={location.lastUpdated} />
            </div>
        </>
    );
}
