import Link from 'next/link';

export const metadata = {
    title: "Turaif / Skaka / Jalamed to Bahrain Taxi | Northern Borders",
    description: "Long-distnce taxi from Northern Borders (Turaif, Skaka, Jalamed) to Bahrain. Phosphate mine and project transport.",
};

export default function TuraifPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: NORTHERN BORDERS TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Phosphate Corridor.</strong> Serving the mining and industrial projects of the far North: Turaif (Wa'ad Al Shamal), Skaka, and Jalamed.
                        </p>
                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Trip Duration</h2>
                            <p>This is an ultra-long-haul route (1,000+ km). It typically involves an overnight stop or a driver team shift. Most clients use this for urgent cargo or when flights are grounded.</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                REQUEST QUOTE
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Regions:</strong> Turaif, Skaka, Jalamed</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~1200+ KM</li>
                                <li><strong>Price:</strong> From 2,600 SAR</li>
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
