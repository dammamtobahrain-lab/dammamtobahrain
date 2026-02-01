import Link from 'next/link';

export const metadata = {
    title: "Jubail to Bahrain Taxi Guide | Travel Time & Cost",
    description: "Complete guide for traveling from Jubail to Bahrain by taxi. Information for Royal Commission residents, industrial workers, and families.",
};

export default function JubailPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: JUBAIL TO BAHRAIN TRANSFERS</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Traveling from Jubail to Bahrain is a long-distance commute that requires comfort and reliability.</strong> This article outlines the best practices for residents of Jubail Industrial City making the 100km+ journey to Manama.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Journey Overview</h2>
                            <p>Jubail is approximately 100-120 kilometers north of the King Fahd Causeway entrance. This means the trip involves roughly 1 to 1.5 hours of highway driving before even reaching the border. Total travel time to Manama is typically around <strong>2 to 2.5 hours</strong>.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Recommendations</h2>
                            <p>Given the duration of the trip, vehicle choice is critical. While a standard sedan is economical, we strongly recommend a mid-size SUV (like a GMC Yukon or Chevrolet Tahoe) for this route. The extra legroom and stability on the highway make a significant difference in passenger fatigue.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>For Corporate Travelers</h2>
                            <p>We serve many clients from the Royal Commission and the various petrochemical plants in the industrial zone. We understand the need for invoices and scheduled reliability. Our drivers can pick you up directly from your camp or office.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pricing Breakdown</h2>
                            <p>Due to the significant distance and fuel consumption, rates for Jubail to Bahrain create a higher bracket than Al Khobar services. Costs typically start from <strong>500 SAR</strong>. This all-inclusive rate covers:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                                <li>Pickup from any Jubail location (City or Industrial).</li>
                                <li>Fuel for the 250km+ round trip (for the driver).</li>
                                <li>Causeway tolls.</li>
                                <li>Professional chauffeur service.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Return Trips</h2>
                            <p>Finding a taxi in Bahrain willing to drive all the way to Jubail can sometimes be difficult or expensive. We highly recommend booking a <strong>Round Trip</strong> with us. Your driver can either wait for you (for short visits) or we can schedule a specific pickup time for your return, ensuring you aren't stranded.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK JUBAIL TRANSFER
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Jubail (City/Ind.)</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~140 KM</li>
                                <li><strong>Time:</strong> ~2.5 Hours</li>
                                <li><strong>Best Car:</strong> SUV / Yukon</li>
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
