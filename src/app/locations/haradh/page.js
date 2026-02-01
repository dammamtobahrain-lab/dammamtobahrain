import Link from 'next/link';

export const metadata = {
    title: "Haradh to Bahrain Taxi | Gas Plant Transfer",
    description: "Taxi service from Haradh (Ghawar Field) to Bahrain. Long-distance transfer for oil & gas professionals.",
};

export default function HaradhPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: HARADH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Deep in Ghawar.</strong> Located in the southern tip of the Ghawar oil field, Haradh is a major industrial outpost. The journey to Bahrain is substantial, but our comfortable fleet makes it barely noticeable.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Route Details</h2>
                            <p>The drive typically routes through Hofuf (Al Ahsa) before heading to the coast. It is a mix of desert industrial roads and highway.</p>
                            <ul>
                                <li><strong>Road Time:</strong> Roughly 3.5 to 4 hours.</li>
                                <li><strong>Network:</strong> Cell signal can be spotty until Hofuf. We recommend pre-arranging your pickup time firmly.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Fleet Choice</h2>
                            <p>Given the long hours on the road, the <Link href="/fleet/lexus" style={{ textDecoration: 'underline' }}>Lexus ES</Link> is a popular choice for executives needing a quiet ride to sleep or work.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM HARADH
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Haradh</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~320 KM</li>
                                <li><strong>Time:</strong> ~3.5 Hours</li>
                                <li><strong>Price:</strong> From 700 SAR</li>
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
