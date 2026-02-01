import Link from 'next/link';

export const metadata = {
    title: "Salwa to Bahrain Taxi | Border Transfer",
    description: "Taxi service from Salwa (Qatar Border) to Bahrain. Direct link between the two causeways.",
};

export default function SalwaPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: SALWA TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Border to Border.</strong> Salwa is the primary crossing point to Qatar. We provide a bridge for travelers moving between Doha (via land) and Manama.
                        </p>
                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />
                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Route</h2>
                            <p>The drive skirts the coast northward to Hofuf/Uqair junction and then to the King Fahd Causeway.</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM SALWA
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Salwa</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Time:</strong> ~2.5 hrs</li>
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
