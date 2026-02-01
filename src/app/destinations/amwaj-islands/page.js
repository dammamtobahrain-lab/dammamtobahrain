import Link from 'next/link';

export const metadata = {
    title: "Taxi to Amwaj Islands & Dilmunia | Airport Proximity",
    description: "Luxury taxi transfers to Amwaj Islands, Floating City, and Dilmunia. Perfect for residents and visitors to the lagoon district.",
};

export default function AmwajPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">DESTINATION: AMWAJ ISLANDS</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Waterfront living at its finest.</strong> Amwaj Islands and the neighboring Dilmunia are popular retreats for those seeking a quieter, resort-like atmosphere away from the bustle of Manama.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Lagoon & Floating City</h2>
                            <p>Common drop-off points include:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>The Lagoon Park:</strong> A hub for dining and cafes.</li>
                                <li><strong>Floating City:</strong> Residential villas with canal access.</li>
                                <li><strong>Art Hotel & Resort:</strong> A popular family staycation spot.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Proximity to Airport</h2>
                            <p>Amwaj is located just 10 minutes North of Bahrain International Airport (BAH). This makes it an excellent base if you have an early morning flight but want to stay in a scenic area rather than an airport hotel. We can transfer you from Saudi directly to your Amwaj villa.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Deep North Travel</h2>
                            <p>Because Amwaj is at the northern tip of Bahrain, the drive from the Saudi Causeway takes a bit longer (approx. 20 minutes more than to Manama). It involves crossing the Sheikh Isa Bin Salman Causeway bridge.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK AMWAJ TRIP
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>AREA INTEL</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Zone:</strong> Muharraq Governorate</li>
                                <li><strong>Vibe:</strong> Resort / Canal Living</li>
                                <li><strong>Airport:</strong> 10 Mins away</li>
                                <li><strong>Toll:</strong> None</li>
                                <li><strong>Distance:</strong> ~65 KM From Khobar</li>
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
