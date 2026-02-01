import Link from 'next/link';

export const metadata = {
    title: "Riyadh to Bahrain Airport Transfer | Direct Chauffeur",
    description: "Direct executive car service from Riyadh (RUH) to Bahrain Airport (BAH). Avoid connecting flights. Door-to-terminal service.",
};

export default function RiyadhAirportRoutePage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">ROUTE: RIYADH TO BAHRAIN AIRPORT</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Smart Alternative to Connecting Flights.</strong> Many travelers find that taking a direct car from Riyadh to Bahrain Airport is actually faster and less stressful than flying RUH-BAH, especially when factoring in check-in times and potential delays.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Scenario</h2>
                            <p>You have an international flight departing from Bahrain (BAH) to London or Bangkok at 2:00 AM.</p>
                            <ul>
                                <li><strong>Option A (Fly):</strong> You fly Riyadh to Bahrain at 9:00 PM. You land, clear immigration, collect bags, transfer terminals. Stress level: High.</li>
                                <li><strong>Option B (Drive):</strong> We pick you up from your Riyadh home at 6:00 PM. You sleep in the back of a Lexus. We drop you at the BAH departure curb at 10:30 PM. Stress level: Zero.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Luggage Freedom</h2>
                            <p>Airlines charge heavy fees for excess baggage on the short hop from Riyadh to Bahrain. In our <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukon XL</Link>, your luggage allowance is virtually unlimited (up to 8 full-size suitcases). This alone often covers the cost of the transfer.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Timing Your Trip</h2>
                            <p>The drive is approximately 4.5 hours door-to-door. We always add a 60-minute buffer for the causeway crossing. We recommend booking your pickup <strong>6 hours before your flight departure time</strong>.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK RIYADH ➔ BAH
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Riyadh City</li>
                                <li><strong>Dest:</strong> Bahrain Airport</li>
                                <li><strong>Distance:</strong> ~430 KM</li>
                                <li><strong>Time:</strong> ~5 Hours</li>
                                <li><strong>Vehicle:</strong> Lexus/Yukon Only</li>
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
