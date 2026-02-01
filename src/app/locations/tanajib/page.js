import Link from 'next/link';

export const metadata = {
    title: "Tanajib to Bahrain Taxi | Aramco Marine Hub",
    description: "Taxi service from Tanajib (Aramco Marine & Pier) to Bahrain. Reliable transport for offshore crews and business visitors.",
};

export default function TanajibPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: TANAJIB TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Marine Hub.</strong> Tanajib is the logistical heart of Aramco's offshore operations. We understand the critical timing required for catching flights after a rotation at sea.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pickup Logistics</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Tanajib Airport (Civilian Side):</strong> We can meet you at the gate.</li>
                                <li><strong>Main Gate:</strong> The most common pickup point for those coming from the pier or camp without driver shore passes.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Route</h2>
                            <p>Tanajib is located roughly halfway between Jubail and Khafji. The drive to Bahrain is predominantly highway.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Corporate Accounts</h2>
                            <p>Many service companies operating in Tanajib have opened <Link href="/corporate" style={{ textDecoration: 'underline' }}>Corporate Accounts</Link> with us to manage the logistics of their engineers without petty cash handling.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM TANAJIB
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Tanajib</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~230 KM</li>
                                <li><strong>Time:</strong> ~2.5 Hours</li>
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
