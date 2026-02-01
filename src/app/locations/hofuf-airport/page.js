import Link from 'next/link';

export const metadata = {
    title: "Al Hofuf Airport (HOF) to Bahrain Taxi | Direct Transfer",
    description: "Direct taxi from Al Ahsa International Airport (HOF) to Bahrain. Convenient alternative to DMM or BAH flights.",
};

export default function HofufAirportPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: HOFUF AIRPORT TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Southern Gateway.</strong> Al Ahsa International Airport (HOF) is growing. If you land here, we provide a direct 2.5-hour link to Bahrain, saving you the hassle of a connecting flight.
                        </p>
                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Arrivals</h2>
                            <p>The operational carrier services are limited, so we track your specific flight number (often FlyDubai or Saudia) to ensure the driver is at the curb when you exit.</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM HOF
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Al Ahsa Airport (HOF)</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Time:</strong> ~2 hrs 30 min</li>
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
