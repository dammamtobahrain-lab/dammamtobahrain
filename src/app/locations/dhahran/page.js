import Link from 'next/link';

export const metadata = {
    title: "Dhahran to Bahrain Taxi | Aramco Camp & KFUPM",
    description: "Taxi service from Dhahran (Aramco Camp, KFUPM, Techno Valley) to Bahrain. Security gate pickup procedures and specialized driver access.",
};

export default function DhahranPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: DHAHRAN TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Hub of Energy and Education.</strong> Dhahran requires specialized knowledge regarding security gates and access. Whether you are an executive at Aramco or a professor at KFUPM, we ensure a smooth exit from the compound and a swift journey to Bahrain.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Saudi Aramco Camp Pickups</h2>
                            <p>For residents of the main camp, pickup procedures depend on your driver's security clearance:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Main Gate (Midra/North):</strong> The standard meeting point for drivers without camp stickers.</li>
                                <li><strong>Inside Camp:</strong> Available only if you can arrange a visitor pass for the driver in advance via the pass office.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>KFUPM Pickups</h2>
                            <p>For King Fahd University of Petroleum and Minerals:</p>
                            <ul>
                                <li><strong>Housing & Faculty:</strong> We can pick up from the main housing gates.</li>
                                <li><strong>Techno Valley:</strong> Direct pickup from company offices (Schlumberger, Baker Hughes, etc.).</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The "American Weekend"</h2>
                            <p>Dhahran residents are our most frequent weekend travelers to Bahrain. To avoid the Thursday rush hour (where bridge wait times can hit 3 hours), we strongly advise leaving Dhahran <strong>before 3:00 PM</strong> or waiting until <strong>after 8:00 PM</strong>.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK DHAHRAN TAXI
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Dhahran (1-313)</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~50 KM</li>
                                <li><strong>Time:</strong> ~45 Mins</li>
                                <li><strong>Price:</strong> From 300 SAR</li>
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
