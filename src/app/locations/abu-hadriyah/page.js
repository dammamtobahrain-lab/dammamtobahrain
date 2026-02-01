import Link from 'next/link';

export const metadata = {
    title: "Abu Hadriyah to Bahrain Taxi | Highway Transfer",
    description: "Taxi pickup from Abu Hadriyah (Highway 95) to Bahrain. Convenient for travelers connecting from northern routes.",
};

export default function AbuHadriyahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: ABU HADRIYAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Vital Junction.</strong> Abu Hadriyah sits on the major north-south artery. We provide pickups from the petrol stations and rest houses for travelers transiting through.
                        </p>
                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Meeting Points</h2>
                            <p>Common pickups include the SASCO station and local motels used by long-haul truckers and contractors.</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM ABU HADRIYAH
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Abu Hadriyah</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Time:</strong> ~1 hr 45 min</li>
                                <li><strong>Price:</strong> From 380 SAR</li>
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
