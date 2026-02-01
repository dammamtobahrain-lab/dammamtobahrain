import Link from 'next/link';

export const metadata = {
    title: "Weekend Getaway Taxi to Bahrain | Thursday Night Transfers",
    description: "Start your weekend right. Pre-book your Thursday night taxi from Khobar/Dammam to Bahrain and skip the queue anxiety.",
};

export default function WeekendGetawayPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">SERVICE: THE WEEKEND ESCAPE</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Thursday Migration.</strong> Every Thursday afternoon, thousands of cars stream across the King Fahd Causeway. Don't let driving fatigue ruin your first night in Bahrain.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Beat the Rush Advice</h2>
                            <p>We have crossed this bridge thousands of times. Here is our insider advice for weekenders:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>The Golden Window:</strong> Leave Saudi before 3:30 PM or after 9:00 PM. The time in between is the "Red Zone" where delays can hit 3 hours.</li>
                                <li><strong>Pre-Booking:</strong> Taxis are sold out by Wednesday night. Always book your weekend ride 48 hours in advance.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Party Safe</h2>
                            <p>Enjoy Bahrain's nightlife responsibly. If you plan to have a drink, do not drive. Our round-trip service ensures you have a safe, sober ride back home to Saudi on Saturday, protecting your safety and your license.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Group Fun</h2>
                            <p>Heading to Block 338 or a resort with friends? Split the cost of a <Link href="/fleet/hyundai-staria" style={{ textDecoration: 'underline' }}>Hyundai Staria</Link>. It's often cheaper than 3 separate Uber rides.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK WEEKEND RIDE
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>WEEKEND PROTOCOL</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Best Dep:</strong> &lt; 3 PM</li>
                                <li><strong>Worst Dep:</strong> 6 PM - 8 PM</li>
                                <li><strong>Return:</strong> Book Sat Afternoon</li>
                                <li><strong>Availability:</strong> Low (Book Early)</li>
                                <li><strong>Vibe:</strong> Relaxation</li>
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                    SECURE YOUR SLOT
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
