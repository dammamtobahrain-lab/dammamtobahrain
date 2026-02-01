import Link from 'next/link';

export const metadata = {
    title: "Uthmaniyah to Bahrain Taxi | Gas Plant Transfer",
    description: "Taxi service from Uthmaniyah (Ghawar Field) to Bahrain. Pickup from Gas Plant gates and residential compounds.",
};

export default function UthmaniyahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: UTHMANIYAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Heart of Ghawar.</strong> Uthmaniyah is central to the Southern Area Oil Operations. We provide consistent transfer services for personnel moving between the plant/camp and Bahrain.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Logistics</h2>
                            <p>Located west of Hofuf, Uthmaniyah is a desert outpost requiring a reliable vehicle.</p>
                            <ul>
                                <li><strong>Road Time:</strong> Roughly 2.5 hours to the causeway.</li>
                                <li><strong>Gate Pickup:</strong> We standardize pickups at the Main Visitor Gate to avoid security clearance delays inside the camp.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Late Shifts</h2>
                            <p>Finishing a rotation at 6PM? Our drivers can be waiting for you, ensuring you are in Manama in time for a late dinner.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM UTHMANIYAH
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Uthmaniyah</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~180 KM</li>
                                <li><strong>Time:</strong> ~2.5 Hours</li>
                                <li><strong>Price:</strong> From 400 SAR</li>
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
