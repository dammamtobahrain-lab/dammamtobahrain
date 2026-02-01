import Link from 'next/link';

export const metadata = {
    title: "Taxi to Bahrain City Centre | Shopping Trips",
    description: "Direct taxi transfers to Bahrain City Centre Mall, Seef Mall, and The Avenues. Enjoy a day of shopping without the parking hassle.",
};

export default function CityCentrePage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">DESTINATION: CITY CENTRE BAHRAIN</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The ultimate shopping destination.</strong> Bahrain City Centre is the largest shopping, leisure, and entertainment complex in Bahrain. It is the top weekend destination for Saudi families. We provide door-to-door transport so you don't have to worry about finding parking in the crowded multi-story garage.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Nearby Malls</h2>
                            <p>Our "Shopping Trip" service can drop you off at City Centre, but we also cover the entire Seef retail district:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Seef Mall:</strong> The classic family favorite.</li>
                                <li><strong>The Avenues:</strong> Waterfront dining and luxury shopping.</li>
                                <li><strong>Moda Mall:</strong> High-end fashion brands (World Trade Center).</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Day Trip Itinerary</h2>
                            <p>Common itinerary for our clients:</p>
                            <ol>
                                <li>10:00 AM Pickup from Al Khobar.</li>
                                <li>11:30 AM Arrival at City Centre (Gate 1).</li>
                                <li>lunch & Shopping.</li>
                                <li>8:00 PM Pickup from City Centre (Gate 1 or Saks Fifth Avenue entrance).</li>
                                <li>9:30 PM Drop-off back in Al Khobar.</li>
                            </ol>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Shopping Space</h2>
                            <p>Planning to buy electronics or heavy items? Let us know. We recommend the <Link href="/fleet/gmc-yukon" style={{ textDecoration: 'underline' }}>GMC Yukon</Link> for serious shoppers, as it has ample cargo space for boxes and bags.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK SHOPPING TRIP
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>MALL DETAILS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Location:</strong> Seef District</li>
                                <li><strong>Features:</strong> Cinema, Waterpark, Hotel</li>
                                <li><strong>Best Drop-off:</strong> Gate 3 (Kempinski)</li>
                                <li><strong>Peak Hours:</strong> Thu & Fri Evening</li>
                                <li><strong>Return:</strong> Pre-book to avoid wait</li>
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
