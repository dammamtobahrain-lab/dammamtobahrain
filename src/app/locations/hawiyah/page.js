import Link from 'next/link';

export const metadata = {
    title: "Hawiyah to Bahrain Taxi | Gas Plant Transfer",
    description: "Taxi service from Hawiyah Gas Plant to Bahrain. Reliable transport for Schlumberger, Halliburton, and Aramco personnel.",
};

export default function HawiyahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: HAWIYAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Gas Giant.</strong> Hawiyah contains one of the largest gas processing plants in the kingdom. We offer a vital link for the thousands of contractors and employees stationed here who need access to Bahrain.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Driving Conditions</h2>
                            <p>The road from Hawiyah connects to the Hofuf-Dammam highway.</p>
                            <ul>
                                <li><strong>Road Time:</strong> Roughly 3 hours total.</li>
                                <li><strong>Sandstorms:</strong> The stretch near Hawiyah is prone to sand drifts. Our drivers are experienced in these conditions.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Contractors</h2>
                            <p>We serve the camps of major service companies (Schlumberger, Baker Hughes) in the area. Weekly scheduled runs are available.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM HAWIYAH
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Hawiyah</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~270 KM</li>
                                <li><strong>Time:</strong> ~3 Hours</li>
                                <li><strong>Price:</strong> From 550 SAR</li>
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
