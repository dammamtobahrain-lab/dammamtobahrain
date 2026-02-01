import Link from 'next/link';

export const metadata = {
    title: "Riyadh to Bahrain Taxi Service | The Long Haul Guide",
    description: "Executive travel from Riyadh to Bahrain. Detailed guide on the 4-hour desert crossing, comfort stops, and luxury vehicle options.",
};

export default function RiyadhPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">GUIDE: RIYADH TO BAHRAIN OVERLAND</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div style={{ border: '2px solid #000', padding: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
                            <strong>The 400-kilometer crossing from Riyadh to Bahrain is a journey typically taken by air, but road travel offers flexibility and privacy that flying cannot match.</strong> This guide explores the "door-to-door" advantage of taking a private luxury taxi.
                        </p>

                        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #000' }} />

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Flights vs. Private Taxi</h2>
                            <p>Why drive for 4 hours when you can fly in 1 hour? The answer lies in the <em>total travel time</em>.</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                                <li><strong>Airport Hassle:</strong> Drive to KKIA (45 min) + Security (1.5 hr) + Flight (1 hr) + Immigration/Bag Claim (45 min) + Taxi to Hotel (30 min) = <strong>~4.5 Hours Total</strong>.</li>
                                <li><strong>Private Taxi:</strong> Pickup at your door + Relax/Sleep/Work in car + Dropoff at hotel = <strong>~4.5 Hours Total</strong>.</li>
                            </ul>
                            <p>The total time is comparable, but the car journey is seamless. No lines, no removing shoes, no boarding gates.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>The Desert Highway Route</h2>
                            <p>The route takes you along Highway 40, connecting the Central Region to the Eastern Province. It is a straight, well-maintained highway cutting through the Dahna Desert. We typically make one scheduled stop at a premium service station (like SASCO) halfway for refreshments and restrooms.</p>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Fleet Options for Riyadh</h2>
                            <p>Comfort is non-negotiable for 4 hours. We do not use standard sedans for this route. Your booking will automatically be upgraded to one of the following:</p>
                            <ul>
                                <li><strong>Lexus ES:</strong> Incredible sound insulation and smooth suspension. Ideal for solo executives.</li>
                                <li><strong>GMC Yukon XL:</strong> The king of the road. Massive space, reclining seats, and perfect for families or groups of colleagues.</li>
                            </ul>

                            <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Booking Instructions</h2>
                            <p>Due to the long driver commitment required (a full day round-trip for the driver), we require bookings for Riyadh pickups to be confirmed at least 6 hours in advance. A small deposit may be requested to secure the vehicle.</p>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>
                                REQUEST RIYADH PICKUP
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ border: '2px solid #000', padding: '2rem', background: '#f9f9f9', position: 'sticky', top: '20px' }}>
                            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '1rem' }}>ROUTE STATS</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                                <li><strong>Origin:</strong> Riyadh (Any District)</li>
                                <li><strong>Dest:</strong> Bahrain</li>
                                <li><strong>Distance:</strong> ~420 KM</li>
                                <li><strong>Time:</strong> ~4.5 Hours</li>
                                <li><strong>Rest Stops:</strong> 1 Included</li>
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
