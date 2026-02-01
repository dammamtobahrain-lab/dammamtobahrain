import Link from 'next/link';

export const metadata = {
    title: "Nariya to Bahrain Taxi | Direct Transfer",
    description: "Taxi service from Nariya (Nariyah) to Bahrain. Serving the junction city residents and contractors.",
};

export default function NariyaPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: NARIYA TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Crossroads City.</strong> Nariya acts as a key transit point between the Northern Borders and the Eastern Province. We provide direct transfers from Nariya to Bahrain without the need to switch cars in Jubail or Dammam.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Travel Logistics</h2>
                            <p>The route takes you South-East towards Jubail before hitting the expressway to Dammam.</p>
                            <ul>
                                <li><strong>Road Time:</strong> Roughly 2.5 hours to the border.</li>
                                <li><strong>Stops:</strong> We usually take a 10-minute coffee break at the Abu Hadriyah petrol station.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Recommendation</h2>
                            <p>Since the road from Nariya can have heavy truck traffic, the <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukon</Link> offers better visibility and safety than a low sedan.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK NARIYA TAXI
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Nariya</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~220 KM</li>
                                <li><strong>Time:</strong> ~2.5 Hours</li>
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
