import Link from 'next/link';

export const metadata = {
    title: "Harmaliyah to Bahrain Taxi | Field Transfer",
    description: "Transport from Harmaliyah Oil Field to Bahrain. Specialized service for remote Aramco facility access.",
};

export default function HarmaliyahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: HARMALIYAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Desert Operations.</strong> Harmaliyah is a remote field location east of Hawiyah. We maintain a fleet ready to deploy to this area for crew rotations.
                        </p>
                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Logistics</h2>
                            <p>Pre-booking is mandatory. Drivers need roughly 2 hours notice to reach the pickup point from the nearest hub.</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM HARMALIYAH
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Harmaliyah</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Time:</strong> ~3 hrs</li>
                                <li><strong>Price:</strong> From 600 SAR</li>
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
