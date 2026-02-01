import Link from 'next/link';

export const metadata = {
    title: "Abqaiq (Buqayq) to Bahrain Taxi | Contractor Transfers",
    description: "Taxi service from Abqaiq / Buqayq to Bahrain. Serving Saudi Aramco plants and residential communities.",
};

export default function AbqaiqPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: ABQAIQ TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Serving the Friendly City.</strong> For residents of the Abqaiq community and contractors working at the plants, we offer a safe, reliable link to Bahrain for your weekend breaks or business travel.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Location Advantage</h2>
                            <p>Abqaiq is strategically located just inland from the coast. The drive to the causeway is straightforward via the highway, bypassing the heavy city traffic of Dammam. This makes the trip surprisingly quick—often under <strong>60 minutes</strong> to the border.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pickup Points</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Abqaiq City:</strong> Any residential address.</li>
                                <li><strong>Aramco Camp:</strong> Please arrange to meet outside the main security gate unless you have arranged a visitor pass for the driver in advance.</li>
                                <li><strong>Industrial Area:</strong> Pickup from contractor camps is available with clear GPS coordinates.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Late Night Returns</h2>
                            <p>Finding a taxi in Bahrain willing to drive to Abqaiq late at night can be challenging. We strongly suggest booking a round-trip or confirming your return driver before you head out for the evening to ensure you get back home safely.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK ABQAIQ TAXI
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Abqaiq (Buqayq)</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~70 KM</li>
                                <li><strong>Time:</strong> ~1 hr</li>
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
