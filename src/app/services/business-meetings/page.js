import Link from 'next/link';

export const metadata = {
    title: "Business Meeting Chauffeur in Bahrain | Hourly & Daily Rental",
    description: "Executive chauffeur service for business meetings in Manama. Hourly standby, multi-stop itineraries, and confidential transport.",
};

export default function BusinessMeetingPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE: BUSINESS CHAUFFEUR</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Arrive prepared, not stressed.</strong> For executives traveling from KSA to Manama for a series of meetings, a simple point-to-point drop-off isn't enough. You need a mobile office and a driver who waits for you.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The "Standby" Advantage</h2>
                            <p>Business meetings often run late or finish early. Relying on ride-share apps in Bahrain can be unreliable during peak hours. With our service:</p>
                            <ul>
                                <li>Your driver waits outside the building.</li>
                                <li>Your laptop and briefcase stay secure in the car.</li>
                                <li>You can move instantly to your next appointment.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Confidentiality</h2>
                            <p>We understand the sensitive nature of business travel. Our drivers are trained to maintain discretion. What is discussed in the car, stays in the car.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Day Rates</h2>
                            <p>Instead of paying per trip, book a <Link href="/fleet/lexus" style={{ textDecoration: 'underline' }}>Lexus ES</Link> for the full day (8-12 hours). This covers your commute from Saudi, all local movements in Manama (Diplomatic Area, Seef, Financial Harbour), and your return trip home.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK DAILY CHAUFFEUR
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>SERVICE SPECS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Type:</strong> Hourly / Daily</li>
                                <li><strong>Driver:</strong> Standby</li>
                                <li><strong>Area:</strong> All Bahrain</li>
                                <li><strong>Ideal For:</strong> Multi-stop Meetings</li>
                                <li><strong>Price:</strong> Custom Day Rate</li>
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                    NOTE "FULL DAY" IN FORM
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
