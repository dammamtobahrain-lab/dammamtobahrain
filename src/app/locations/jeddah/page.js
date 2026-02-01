import Link from 'next/link';

export const metadata = {
    title: "Jeddah to Bahrain Taxi | Cross-Country Transfer",
    description: "Private car transfer from Jeddah to Bahrain. 12+ hour cross-country journey. Comfortable SUVs for the ultimate road trip.",
};

export default function JeddahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: JEDDAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>From Red Sea to Arabian Gulf.</strong> The drives covers the entire breadth of the Arabian Peninsula. While most fly, some clients prefer the privacy, flexibility, and luggage capacity of a private car service.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Why Drive?</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Moving House:</strong> If you are relocating and have fragile items, pets, or excessive luggage that air freight can't handle.</li>
                                <li><strong>Fear of Flying:</strong> We drive several clients annually who simply prefer the ground.</li>
                                <li><strong>Sightseeing:</strong> See the changing landscapes from the Hejaz mountains to the central plateau and eastern dunes.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Journey</h2>
                            <p>This is a marathon. The trip takes approximately <strong>12 to 14 hours</strong> depending on stops. Our price includes meal breaks and driver rotation if necessary.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pricing Strategy</h2>
                            <p>At <strong>2,500 SAR</strong>, the price is comparable to 3-4 business class airline tickets. For a family of 5, it can actually be economical.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK CROSS-COUNTRY
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Jeddah</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~1,350 KM</li>
                                <li><strong>Time:</strong> ~13 Hours</li>
                                <li><strong>Price:</strong> From 2,500 SAR</li>
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
