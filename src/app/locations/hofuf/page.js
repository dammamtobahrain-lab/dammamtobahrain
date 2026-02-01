import Link from 'next/link';

export const metadata = {
    title: "Hofuf (Al Ahsa) to Bahrain Taxi | 2-Hour Direct Transfer",
    description: "Direct taxi service from Hofuf and Al Ahsa to Bahrain. Door-to-door pickup for residents of Al Mubarraz and Al Hasa. Reliable 24/7 transfers.",
};

export default function HofufPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: HOFUF (AL AHSA) TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Residents of the Al Ahsa oasis no longer need to drive themselves or take the train to Dammam to reach Bahrain.</strong> We offer a direct, seamless chauffeur service from your doorstep in Hofuf or Al Mubarraz straight to Manama.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Route: Route 615</h2>
                            <p>The journey from Al Ahsa to the King Fahd Causeway utilizes Route 615 (Abqaiq Road). It bypasses the inner city traffic of Dammam and Khobar, allowing for a relatively smooth run to the bridge. The total distance is approximately <strong>150 km</strong>.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Average Travel Time</h2>
                            <p>Under normal traffic conditions, the trip takes about <strong>2 hours to 2 hours 15 minutes</strong>. This is significantly faster than taking the train to Dammam station and then transferring to a taxi, which can take upwards of 4 hours.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Service Areas in Al Ahsa</h2>
                            <p>Our drivers are familiar with all major districts in the region:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Hofuf:</strong> Downtown, Al Faisaliyah, Al Snayah.</li>
                                <li><strong>Al Mubarraz:</strong> Northern expansion areas.</li>
                                <li><strong>Local Villages:</strong> Pickup available upon request (may incur surcharge).</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Recommendation</h2>
                            <p>For this medium-haul distance, a <Link href="/fleet/camry" style={{ textDecoration: 'underline' }}>Toyota Camry</Link> is sufficient for 1-2 passengers. However, families traveling for the weekend often prefer the <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukon</Link> for the extra luggage space required for shopping trips in Bahrain.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM AL AHSA
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Hofuf / Al Ahsa</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~160 KM</li>
                                <li><strong>Time:</strong> ~2 hrs 15 min</li>
                                <li><strong>Price:</strong> From 450 SAR</li>
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                    BOOK NOW
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
