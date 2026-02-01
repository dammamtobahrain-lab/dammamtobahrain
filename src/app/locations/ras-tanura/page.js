import Link from 'next/link';

export const metadata = {
    title: "Ras Tanura to Bahrain Taxi | Industrial City Transfer",
    description: "Reliable taxi service from Ras Tanura/Rahima to Bahrain. Serving Saudi Aramco compound residents and industrial contractors.",
};

export default function RasTanuraPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: RAS TANURA TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Serving the energy heart of the kingdom.</strong> We provide dedicated transfer services for residents of the Ras Tanura (Najmah) compound and Rahima city. Whether you are an Aramco employee or a contractor, we ensure a safe trip to Bahrain.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Gate Pickup Procedures</h2>
                            <p>For security transparency, please note our pickup protocols for Ras Tanura:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Rahima City:</strong> We can pick up from any residential address or hotel in Rahima clearly.</li>
                                <li><strong>Aramco Compound (Najmah):</strong> Most of our drivers do <em>not</em> have compound access stickers. Pickups are typically arranged at the <strong>Main Gate Visitor Center</strong>. Please coordinate with your driver via WhatsApp 30 minutes prior.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Travel Time</h2>
                            <p>Ras Tanura is situated north of Dammam. The drive involves taking the coastal highway south before hitting the causeway. Typical travel time is <strong>1 hour 15 minutes</strong> to the Saudi border post.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Weekend Getaways</h2>
                            <p>Many Ras Tanura residents head to Bahrain on Thursday afternoons. To beat the heavy traffic leaving the industrial area, we recommend scheduling your pickup for <strong>2:30 PM</strong> or earlier.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK RAS TANURA TAXI
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Ras Tanura / Rahima</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~85 KM</li>
                                <li><strong>Time:</strong> ~1 hr 30 min</li>
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
