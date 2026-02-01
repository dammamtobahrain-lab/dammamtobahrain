import Link from 'next/link';

export const metadata = {
    title: "Shaybah to Bahrain Taxi | Empty Quarter Transport",
    description: "Specialized long-distance transport from Shaybah (Rub' al Khali) to Bahrain. 4x4 options available for this ultra-long haul journey.",
};

export default function ShaybahPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: SHAYBAH TO BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Deep Desret Run.</strong> Shaybah is one of the most remote industrial sites on earth, located in the Empty Quarter. While most travel is by plane, there are times when ground transport is necessary for critical equipment or personnel.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Challenge</h2>
                            <p>This is not a standard taxi ride. It is an expedition. The drive involves crossing vast stretches of desert highway.</p>
                            <ul>
                                <li><strong>Shaybah 1:</strong> ~1,500 SAR Base Rate</li>
                                <li><strong>Shaybah 2:</strong> ~2,400 SAR Base Rate</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Requirements</h2>
                            <p>For safety reasons, this route is ONLY served by our <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukon XL</Link> fleet. We carry extra water, fuel, and communication equipment for these journeys.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Booking Protocol</h2>
                            <p>Bookings for Shaybah must be made <strong>48 hours in advance</strong>. Full payment is required prior to dispatch due to the commitment of the vehicle for 2 days.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                REQUEST QUOTE
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Shaybah Oil Field</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~700+ KM</li>
                                <li><strong>Time:</strong> ~7-9 Hours</li>
                                <li><strong>Price:</strong> 1500 - 2400 SAR</li>
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
