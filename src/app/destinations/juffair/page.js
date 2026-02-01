import Link from 'next/link';

export const metadata = {
    title: "Taxi to Juffair (Bahrain) | US Navy Base Transfers",
    description: "Taxi service to Al Juffair, Bahrain. Specialized transfers for US Navy Base Bahrain personnel and American Alley visitors.",
};

export default function JuffairPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">DESTINATION: AL JUFFAIR</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The heartbeat of Bahrain's expat life.</strong> Home to the US Navy Base (NSA Bahrain) and "American Alley," Juffair is the primary destination for many of our American and Western clients coming from Saudi Arabia.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>US Navy Base Drop-offs</h2>
                            <p>We perform daily runs to the NSA Bahrain base.</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Gate Procedures:</strong> Civilian vehicles cannot enter the base. We drop you off directly at the <strong>Main Walk-in Gate</strong> or the <strong>Flyover Gate</strong>.</li>
                                <li><strong>ID Requirements:</strong> Ensure you have your military ID or contractor badge ready for the sentries.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Hotels & American Alley</h2>
                            <p>Juffair is densely packed with hotels (Marriott, Ramee Grand, Wyndham) and restaurants. Traffic on Thursday nights in Juffair can be gridlocked. Our drivers know the back roads (Shabab Avenue shortcuts) to get you to your hotel lobby faster.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Base-to-Base Transfers</h2>
                            <p>We specialize in transfers between <strong>Eskan Village (Riyadh)</strong> and <strong>NSA Bahrain</strong>. If you are PCSing or on leave, our <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukons</Link> have the capacity for your sea bags and gear.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK JUFFAIR RIDE
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>AREA INTEL</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Zone:</strong> Al Juffair</li>
                                <li><strong>Key Spot:</strong> US Navy Base</li>
                                <li><strong>Vibe:</strong> Nightlife & Dining</li>
                                <li><strong>Traffic:</strong> High (Weekends)</li>
                                <li><strong>Distance:</strong> ~55 KM From Khobar</li>
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
