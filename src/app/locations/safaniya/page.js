import Link from 'next/link';

export const metadata = {
    title: "Safaniya to Bahrain Taxi | Offshore Field Transfer",
    description: "Transport services from Safaniya (World's largest offshore oil field) to Bahrain. Serving Aramco/Contractor camps.",
};

export default function SafaniyaPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: SAFANIYA TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Offshore Giant.</strong> Serving the workforce of the world's largest offshore oil field. We provide reliable ground transport for crews rotating out of Safaniya to Bahrain for flights or leisure.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pickup Locations</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Safaniya Checkpoint:</strong> The standard meeting point for those exiting the restricted area.</li>
                                <li><strong>Contractor Camps:</strong> Pickup from specific camps along the highway.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Group Travel</h2>
                            <p>Crews often travel in groups of 3-7. Our <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline' }}>Hyundai Staria</Link> vans are optimized for this route, allowing a full team to travel together with their gear bags.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Timing</h2>
                            <p>The drive is approximately 2.5 hours to the causeway. We monitor highway traffic to ensure you reach Bahrain Airport (BAH) with ample buffer time if you have a connecting flight.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM SAFANIYA
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Safaniya</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~270 KM</li>
                                <li><strong>Time:</strong> ~2.5 - 3 Hours</li>
                                <li><strong>Price:</strong> From 500 SAR</li>
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
