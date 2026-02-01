import Link from 'next/link';

export const metadata = {
    title: "Bahrain Airport (BAH) Transfers | KSA to BAH Taxi",
    description: "Reliable airport transfer taxi from Saudi Arabia to Bahrain International Airport (BAH). On-time flight drop-offs and pickups.",
};

export default function BahrainAirportPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">DESTINATION: BAHRAIN AIRPORT (BAH)</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Flying out of Bahrain?</strong> Bahrain International Airport (BAH) offers connections to destinations often not served directly by Dammam. We ensure you make your flight on time, every time.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Departure Transfers (KSA ➔ BAH)</h2>
                            <p>The drive from Al Khobar to BAH typically takes 60-75 minutes. However, causeway delays are unpredictable. We recommend the following buffer times:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Weekday Flights:</strong> Pickup 4 hours before flight time.</li>
                                <li><strong>Weekend Flights (Thu-Sat):</strong> Pickup 5-6 hours before flight time.</li>
                            </ul>
                            <p>We drop you directly at the "Departures" curb, assisting with luggage unloading.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Arrival Pickups (BAH ➔ KSA)</h2>
                            <p>Landing in Bahrain and heading to Saudi? Our driver will meet you at <strong>Arrivals Exit 2</strong>. We track your flight status in real-time to adjust for delays. Please ensure your Saudi Visa is valid before boarding your flight to Bahrain.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Excess Luggage</h2>
                            <p>International flights often mean big bags. If you are a family of 4+ with 8 suitcases, a standard SUV might be tight. We can arrange a <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline' }}>Hyundai Staria Van</Link> or a secondary luggage vehicle upon request.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK AIRPORT RIDE
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>AIRPORT DATA</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Code:</strong> BAH</li>
                                <li><strong>Terminal:</strong> New Terminal</li>
                                <li><strong>From Khobar:</strong> ~60 KM</li>
                                <li><strong>Avg Time:</strong> 70 Mins</li>
                                <li><strong>Toll:</strong> Included</li>
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
