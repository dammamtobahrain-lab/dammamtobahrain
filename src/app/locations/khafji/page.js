import Link from 'next/link';

export const metadata = {
    title: "Khafji to Bahrain Taxi | KSA-Kuwait Border Transfer",
    description: "Direct taxi service from Al Khafji (Saudi-Kuwait border) to Bahrain. Reliable transfer for oil sector employees and border crossers.",
};

export default function KhafjiPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: KHAFJI TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Connecting the Northern Border.</strong> Al Khafji, situated on the Saudi-Kuwait border, is a vital hub for KGOC (Khafji Joint Operations). We provide a direct, comfortable link for effective rotation travel to Bahrain.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Journey</h2>
                            <p>The drive from Khafji to the King Fahd Causeway involves a ~300km journey south along Highway 5 (Coastal Road), passing Safaniya, Manifa, and Jubail. </p>
                            <ul>
                                <li><strong>Duration:</strong> Approximately 3.5 - 4 hours.</li>
                                <li><strong>Road Conditions:</strong> Mostly dual carriageway. Can be prone to sandstorms/fog in winter.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Offshore Staff</h2>
                            <p>For KGOC and Chevron employees: We can coordinate pickups to align with your rotas. </p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Choice</h2>
                            <p>Given the 4-hour duration, we highly recommend the <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukon</Link> for its highway stability and comfort, though our Sedans are fully capable of the trip.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM KHAFJI
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Al Khafji</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~310 KM</li>
                                <li><strong>Time:</strong> ~3.5 Hours</li>
                                <li><strong>Price:</strong> From 600 SAR</li>
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
