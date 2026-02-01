import Link from 'next/link';

export const metadata = {
    title: "Lexus ES Luxury Taxi | Executive Sedan Service",
    description: "Experience the ultimate in comfort with our Lexus ES luxury taxi service. Quiet, smooth, and refined travel from Saudi Arabia to Bahrain.",
};

export default function LexusPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">LEXUS ES: THE EXECUTIVE CHOICE</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>Silence. Smoothness. Sophistication.</strong> The Lexus ES is chosen by our most discerning clients who view travel time as an opportunity to relax or work in peace. It offers a whisper-quiet cabin unmatched by any other vehicle in our fleet.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Specifications</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Class:</strong> Luxury Executive Sedan</li>
                                <li><strong>Capacity:</strong> 3 Passengers</li>
                                <li><strong>Luggage:</strong> 2 Large Suitcases</li>
                                <li><strong>Features:</strong> Mark Levinson Audio, Premium Leather, Noise Cancellation</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Business Travel Standard</h2>
                            <p>For consultants, executives, and diplomats, the Lexus ES is the default mode of transport. Its understated elegance projects professionalism without being ostentatious. It is perfect for:</p>
                            <ul>
                                <li style={{ marginBottom: '10px' }}><strong>Client Meetings:</strong> Arrive in Bahrain refreshed and ready to present.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Intercity Commutes:</strong> The active suspension smooths out even the roughest patches of the Dammam-Khobar highway.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Availability</h2>
                            <p>Our Lexus fleet is in high demand, particularly on weekdays. We strictly recommend booking at least 12 hours in advance to guarantee availability of this specific model.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK LEXUS LUXURY
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>QUICK SPECS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Model:</strong> Lexus ES350</li>
                                <li><strong>Type:</strong> Luxury Sedan</li>
                                <li><strong>Pax:</strong> Max 3</li>
                                <li><strong>Bags:</strong> Max 2 Large</li>
                                <li><strong>Rate:</strong> Executive</li>
                            </ul>
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Link href="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', width: '100%', display: 'block' }}>
                                    RESERVE THIS CAR
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
