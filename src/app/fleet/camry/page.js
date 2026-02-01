import Link from 'next/link';

export const metadata = {
    title: "Toyota Camry Taxi to Bahrain | 4-Seater Economy Sedan",
    description: "Book a Toyota Camry 4-seater taxi from Al Khobar, Dammam, or Jubail to Bahrain. Affordable, reliable, and comfortable sedan service.",
};

export default function CamryPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">TOYOTA CAMRY: THE RELIABLE 4-SEATER</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The Toyota Camry is the gold standard for executive sedan travel in the Gulf.</strong> Perfect for solo travelers, couples, or small families (up to 3 adults) looking for an economical yet comfortable ride across the King Fahd Causeway.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Vehicle Specifications</h2>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem', listStyle: 'square' }}>
                                <li><strong>Class:</strong> Mid-Size Executive Sedan</li>
                                <li><strong>Capacity:</strong> 3 Passengers + Chauffeur</li>
                                <li><strong>Luggage:</strong> 2 Large Suitcases + 2 Handbags</li>
                                <li><strong>Features:</strong> Rear AC Vents, Spacious Legroom, USB Charging</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Popular Camry Routes</h2>
                            <p>Because of its efficiency, the Camry is our most requested vehicle for quick city-to-city transfers:</p>
                            <ul>
                                <li style={{ marginBottom: '10px' }}><strong>Al Khobar to Bahrain:</strong> The daily commute choice. Fast and agile in traffic.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Dammam Airport to Manama:</strong> Ideal for solo business arrivals.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Jubail to Bahrain:</strong> Smooth highway cruiser for the 2-hour trip.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Why Choose the Camry?</h2>
                            <p>It balances cost and comfort perfectly. It is significantly more comfortable than smaller budget taxis but lacks the higher price tag of the large SUVs. Our Camrys are always late-model (2024-2026), ensuring modern safety features and pristine interiors.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                BOOK CAMRY NOW
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>QUICK SPECS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Model:</strong> Toyota Camry</li>
                                <li><strong>Type:</strong> Sedan</li>
                                <li><strong>Pax:</strong> Max 3</li>
                                <li><strong>Bags:</strong> Max 2 Large</li>
                                <li><strong>Rate:</strong> Economy</li>
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
