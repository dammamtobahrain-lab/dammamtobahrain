import Link from 'next/link';

export const metadata = {
    title: "Bahrain Travel Blog | Tips, Traffic & Visa Rules",
    description: "Expert advice on crossing the King Fahd Causeway. Traffic updates, visa requirements, and best places to stay in Bahrain.",
};

export default function BlogHub() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">TRAVEL INSIGHTS & NEWS</h1>
                <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    Essential guides for the smart traveler. Avoid the traffic, save money, and travel safe.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

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
            </div>
        </div>
    );
}
