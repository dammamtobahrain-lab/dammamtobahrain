import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: "Bahrain Travel Blog | Causeway Tips, Visa Rules & Traffic Updates | Dammam to Bahrain Taxi",
    description: "Expert advice on crossing the King Fahd Causeway. Traffic patterns, 2026 visa requirements for Iqama holders, best Bahrain hotels, and insider tips from our drivers.",
};

export default function BlogHub() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' }
                ]
            }} />
            <div className="section">
                <div className="container">
                    <h1 className="section-title">TRAVEL INSIGHTS & NEWS</h1>
                    <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Essential guides for the smart traveler. Avoid the traffic, save money, and travel safe.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Article New - Ultimate Guide */}
                        <div style={{ border: '1px solid #ddd', padding: '0' }}>
                            <div style={{ height: '200px', background: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                THE ULTIMATE GUIDE
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginTop: '0' }}>Reliable Dammam to Bahrain Taxi Guide</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>A complete 2026 handbook for crossing the causeway. Private cars, airports, and customs explained.</p>
                                <Link href="/blog/dammam-to-bahrain-taxi-guide" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>READ FULL GUIDE ➔</Link>
                            </div>
                        </div>

                        {/* Article New - Cost Guide */}
                        <div style={{ border: '1px solid #ddd', padding: '0' }}>
                            <div style={{ height: '200px', background: '#222', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                2026 PRICE GUIDE
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginTop: '0' }}>Taxi Fares to Bahrain: 2026 Cost Guide</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Standard vs. Luxury rates, hidden tolls, and airport transfer fees. Know exactly what you should pay.</p>
                                <Link href="/blog/cost-guide-2026" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>SEE PRICES ➔</Link>
                            </div>
                        </div>

                        {/* Article 1 */}
                        <div style={{ border: '1px solid #ddd', padding: '0' }}>
                            <div style={{ height: '200px', background: '#333', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                TRAFFIC HACKS
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginTop: '0' }}>King Fahd Causeway: Best Times to Cross</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Don't get stuck in the 4-hour weekend queue. We analyze the traffic patterns to help you breeze through customs.</p>
                                <Link href="/blog/causeway-traffic-guide" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>READ GUIDE ➔</Link>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div style={{ border: '1px solid #ddd', padding: '0' }}>
                            <div style={{ height: '200px', background: '#444', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                VISA RULES 2026
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginTop: '0' }}>Saudi to Bahrain Visa Requirements</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Do you need an E-Visa? specific Iqama professions? We break down the entry rules for Residents and Citizens.</p>
                                <Link href="/blog/visa-requirements" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>CHECK ELIGIBILITY ➔</Link>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div style={{ border: '1px solid #ddd', padding: '0' }}>
                            <div style={{ height: '200px', background: '#555', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                STAYCATION GEMS
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginTop: '0' }}>Top 5 Family Hotels in Bahrain</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>From private pool villas in Zallaq to city suites in Seef. Our drivers' top picks for Saudi families.</p>
                                <Link href="/blog/top-hotels-bahrain" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>SEE HOTELS ➔</Link>
                            </div>
                        </div>

                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', border: '2px solid #000', background: '#f9f9f9' }}>
                        <h3 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Related Services</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <Link href="/locations/al-khobar/" style={{ textDecoration: 'underline' }}>Al Khobar to Bahrain</Link>
                            <Link href="/locations/dammam/" style={{ textDecoration: 'underline' }}>Dammam to Bahrain</Link>
                            <Link href="/locations/jubail/" style={{ textDecoration: 'underline' }}>Jubail to Bahrain</Link>
                            <Link href="/services/visa-run/" style={{ textDecoration: 'underline' }}>Visa Run Service</Link>
                            <Link href="/locations/riyadh/" style={{ textDecoration: 'underline' }}>Riyadh to Bahrain</Link>
                            <Link href="/services/hotel-transfers/" style={{ textDecoration: 'underline' }}>Hotel Transfers</Link>
                        </div>
                    </div>
                </div>
            </div>
            <TrustBar clientsServed="500+" />
            <LastUpdated date="February 19, 2026" />
        </>
    );
}
