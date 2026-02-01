import Link from 'next/link';

export const metadata = {
    title: "Fadhli to Bahrain Taxi | Gas Plant Transfer",
    description: "Transport from Fadhli Gas Plant and residential camp to Bahrain. Serving Aramco/Contractor employees.",
};

export default function FadhliPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: FADHLI TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Energy Hub.</strong> Serving the Fadhli Gas Plant workforce. Whether you are in the permanent camp or a contractor facility, we provide reliable weekend turnarounds to Bahrain.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pickup Points</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Main Security Gate:</strong> Drivers wait in the designated parking lot.</li>
                                <li><strong>Remote Camps:</strong> Please share your exact Google Maps pin, as some camps are 10-15km off the main road.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Weekend Runs</h2>
                            <p>Fadhli to Bahrain is a popular Thursday route. Book by Tuesday to secure a <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline' }}>Staria Van</Link> if you are carpooling with colleagues to split the fare.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM FADHLI
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Fadhli Gas Plant</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~140 KM</li>
                                <li><strong>Time:</strong> ~1 hr 45 min</li>
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
