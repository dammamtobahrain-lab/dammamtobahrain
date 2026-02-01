import Link from 'next/link';

export const metadata = {
    title: "Hawtah (Bani Tamim) to Bahrain Taxi | Long Distance",
    description: "Taxi service from Hawtah Bani Tamim to Bahrain. Long-distance transfer via Riyadh bypass.",
};

export default function HawtahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: HAWTAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>South of Riyadh.</strong> Serving the Hawtah Bani Tamim area. This is a long-haul trip that typically bypasses central Riyadh to save time heading East.
                        </p>
                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Comfort Stop</h2>
                            <p>Due to the 5+ hour drive, a scheduled 30-minute meal break is included in the service.</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM HAWTAH
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Hawtah Bani Tamim</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Time:</strong> ~5-6 hrs</li>
                                <li><strong>Price:</strong> From 1,000 SAR</li>
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
