import Link from 'next/link';

export const metadata = {
    title: "Bahrain to KSA Taxi | Return Trip Guide",
    description: "Guide for booking a return taxi from Bahrain to Saudi Arabia. Pickup from Manama, Juffair, Seef, and Amwaj.",
};

export default function BahrainPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: BAHRAIN TO KSA RETURN TRIPS</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Returning to Saudi Arabia shouldn't be a hassle.</strong> While many taxis operate one-way, our fleet is fully licensed to pick up passengers in Bahrain and bring them back to Al Khobar, Dammam, Jubail, or Riyadh.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Service Areas in Bahrain</h2>
                            <p>We can pick you up from any location in the Kingdom of Bahrain, including:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                                <li><strong>Central Manama:</strong> Diplomatic Area, Adliya, Exhibition Road.</li>
                                <li><strong>Juffair & Seef:</strong> Popular hotel and nightlife districts.</li>
                                <li><strong>Amwaj Islands & Diyar Al Muharraq:</strong> Residential pickups.</li>
                                <li><strong>Bahrain Airport (BAH):</strong> Direct terminal pickups.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The "Saturday Rush" Warning</h2>
                            <p>Saturday evenings are notoriously congested on the causeway as visitors return to Saudi Arabia for the work week. Traffic jams can stretch for kilometers.</p>
                            <div style={{ background: '#f0f0f0', padding: '1rem', borderLeft: '4px solid #000', margin: '1rem 0' }}>
                                <strong>Our Advice:</strong> If traveling on a Saturday, aim to leave Bahrain before 2:00 PM for a smooth crossing. If you leave after 4:00 PM, be prepared for a 2-3 hour wait.
                            </div>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Airport Pickups at BAH</h2>
                            <p>Bahrain International Airport is modern and efficient. We track your flight and meet you at the specific arrival exit. Unlike airport taxis which may not have KSA entry permits, our cars drive you straight through the border to your Saudi home.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Pricing</h2>
                            <p>Return pricing is generally consistent with outbound pricing. However, pickups from remote areas like Durrat Al Bahrain or during extreme peak traffic may incur slight adjustments. Always confirm your quote via WhatsApp before travel.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK RETURN RIDE
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>REVERSE ROUTE</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Bahrain (Anywhere)</li>
                                <li><strong>Dest:</strong> KSA (Any City)</li>
                                <li><strong>Permits:</strong> Included</li>
                                <li><strong>Luggage:</strong> Included</li>
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
