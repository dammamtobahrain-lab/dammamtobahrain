import Link from 'next/link';

export const metadata = {
    title: "Manifa to Bahrain Taxi | Offshore Causeway Transfer",
    description: "Transport from Manifa (Manifah) Causeway to Bahrain. Transfer service for offshore crew and project engineers.",
};

export default function ManifaPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: MANIFA TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Man-Made Archipelago.</strong> Manifa's unique causeway design requires specific pickup coordination. We serve the onshore support facilities and the checkpoint gates for those coming from the rigs.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Location Logic</h2>
                            <p>Manifa sits between Jubail and Tanajib on the coast.</p>
                            <ul>
                                <li><strong>Road Time:</strong> Roughly 2 hours to the Bahrain causeway.</li>
                                <li><strong>Proximity:</strong> It is a relatively quick run compared to Tanajib or Safaniya.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Crew Changes</h2>
                            <p>We handle multiple pickup points including the KJO camp, the Pioneer camp, and the main checkpoint.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK FROM MANIFA
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Manifa</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~190 KM</li>
                                <li><strong>Time:</strong> ~2 Hours</li>
                                <li><strong>Price:</strong> From 450 SAR</li>
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
