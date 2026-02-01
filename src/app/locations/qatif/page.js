import Link from 'next/link';

export const metadata = {
    title: "Qatif to Bahrain Taxi | Saihat & Tarout Transfers",
    description: "Direct taxi booking from Al Qatif, Saihat, and Tarout Island to Bahrain. Family-friendly drivers and comfortable vehicles.",
};

export default function QatifPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: QATIF TO BAHRAIN TRANSFERS</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Serving the wider Qatif region with pride.</strong> We offer door-to-door service for families in Qatif, Saihat, and Tarout who wish to visit Bahrain for leisure to shopping without the stress of driving.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Coverage Area</h2>
                            <p>Unlike some services that only stick to Dammam, we come to you. Our drivers cover:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Central Qatif:</strong> Al Majidiya, Al Qalah.</li>
                                <li><strong>Saihat:</strong> Easy pickup due to proximity to Dammam highway.</li>
                                <li><strong>Tarout Island:</strong> Verify pickup times as traffic can be heavy on the bridge to the mainland.</li>
                                <li><strong>Safwa:</strong> Northern pickups available.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Family Travel Focus</h2>
                            <p>We understand that travel from Qatif is often a family affair. Our <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline' }}>Hyundai Staria</Link> vans are particularly popular for this route, allowing large families to travel in a single vehicle rather than splitting up.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Booking Advice</h2>
                            <p>Please provide your exact location pin via WhatsApp when booking, as street addresses in older Qatif neighborhoods can sometimes be confusing for GPS systems.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK QATIF TAXI
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Qatif / Saihat</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~75 KM</li>
                                <li><strong>Time:</strong> ~1 hr 15 min</li>
                                <li><strong>Price:</strong> From 350 SAR</li>
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
