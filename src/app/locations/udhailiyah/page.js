import Link from 'next/link';

export const metadata = {
    title: "Udhailiyah to Bahrain Taxi | Camp Transfer",
    description: "Taxi service from Udhailiyah (Aramco Camp) to Bahrain. Weekend and airport transfers for residents.",
};

export default function UdhailiyahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: UDHAILIYAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Southern Community.</strong> Udhailiyah ("Udh") is a close-knit Aramco community. We provide reliable transport for families and employees heading to Bahrain for shopping or travel.
                        </p>
                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Gate Info</h2>
                            <p>We hold valid visitor passes for the Main Gate area. Residents often leave their cars in the secure parking and hop into our taxis for the Bahrain run.</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM UDH
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Udhailiyah</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Time:</strong> ~2.5 hrs</li>
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
