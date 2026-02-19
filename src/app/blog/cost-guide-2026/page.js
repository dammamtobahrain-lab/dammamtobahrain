
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: "Dammam to Bahrain Taxi Fare Cost | 2026 Price List & Hidden Fees",
    description: "Honest 2026 price guide for taxis from Dammam, Khobar, and Jubail to Bahrain. Compare standard vs. luxury fares, airport transfers, and understand causeway toll costs.",
};

const fareData = [
    { from: 'Dammam', to: 'Manama', car: 'Sedan (Camry)', price: '280 SAR' },
    { from: 'Al Khobar', to: 'Manama', car: 'Sedan (Camry)', price: '250 SAR' },
    { from: 'Dammam Airport (DMM)', to: 'Bahrain', car: 'SUV (Yukon)', price: '350 SAR' },
    { from: 'Jubail', to: 'Bahrain', car: 'Sedan (Camry)', price: '450 SAR' },
    { from: 'Riyadh', to: 'Bahrain', car: 'Sedan (Camry)', price: '1,500 SAR' },
];

export default function CostGuide() {
    return (
        <>
            <SchemaMarkup type="article" data={{
                headline: "Dammam to Bahrain Taxi Cost Guide 2026",
                description: "Complete breakdown of taxi fares from Saudi Arabia to Bahrain, including tolls and vehicle types.",
                author: "Dammam to Bahrain Taxi Service",
                datePublished: "2026-02-19",
                breadcrumbs: [
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' },
                    { name: 'Taxi Fare Guide', url: '/blog/cost-guide-2026' }
                ]
            }} />
            <div className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="section-title">The Real Cost of a Taxi from Dammam to Bahrain (2026 Guide)</h1>
                    <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                        Traveling between Saudi Arabia and Bahrain is faster than ever, but pricing can be confusing.
                        Whether you're booking a ride from King Fahd International Airport (DMM) or a hotel in Al Khobar, knowing the standard rates helps you avoid overpaying.
                    </p>

                    <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Standard Taxi Fares (One-Way)</h2>
                    <p>
                        In 2026, the average cost for a private taxi from Dammam to Bahrain ranges from <strong>250 SAR to 400 SAR</strong>, depending on the pickup location and vehicle type.
                    </p>

                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem', marginBottom: '3rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <thead>
                            <tr style={{ background: '#f4f4f4', borderBottom: '2px solid #ddd' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Pickup Location</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Destination</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Vehicle Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Avg. Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fareData.map((row, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '1rem' }}>{row.from}</td>
                                    <td style={{ padding: '1rem' }}>{row.to}</td>
                                    <td style={{ padding: '1rem' }}>{row.car}</td>
                                    <td style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>What's Included in the Price?</h2>
                    <p>When you book a professional service like ours, the price typically includes:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                        <li><strong>Vehicle Fuel & Insurance:</strong> Comprehensive coverage for cross-border travel.</li>
                        <li><strong>Waiting Time:</strong> Up to 60 minutes free waiting at the airport.</li>
                        <li><strong>Meet & Greet:</strong> Professional chauffeur waiting with your name card.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem' }}>Hidden Costs to Watch Out For</h3>
                    <p>
                        <strong>Tolls:</strong> The King Fahd Causeway toll is <strong>25 SAR (or 2.5 BHD)</strong> each way. Most reputable companies exclude this from the base fare unless specified, or add it as a transparent surcharge.
                    </p>
                    <p>
                        <strong>Visas:</strong> Your taxi driver cannot process your visa. You must pay for your Visa on Arrival (approx 5-15 BHD) at the border, or have a valid eVisa.
                    </p>

                    <div style={{ background: '#eef', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                        <h4 style={{ marginTop: 0 }}>Need a Ride Now?</h4>
                        <p style={{ marginBottom: '1rem' }}>We offer flat-rate pricing with no surge fees.</p>
                        <Link href="/booking" className="btn btn-primary">Book Your Ride ➔</Link>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Why Choose a Private Car over the Bus (SAPTCO)?</h2>
                    <p>
                        While the SAPTCO bus is cheaper (approx 60-100 SAR), a private taxi offers significant advantages:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>✅ <strong>Speed:</strong> A private car clears customs <i>much</i> faster. You don't wait for 40 other passengers.</li>
                        <li style={{ marginBottom: '1rem' }}>✅ <strong>Door-to-Door:</strong> You aren't dropped at a bus station; you go straight to your hotel or meeting.</li>
                        <li style={{ marginBottom: '1rem' }}>✅ <strong>Privacy:</strong> Work, make calls, or relax in a silent cabin.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Do you accept credit cards?</strong>
                        <p>Yes, we accept Visa, MasterCard, and Mada cards, as well as Cash (SAR/BHD).</p>
                    </div>
                    <div className="faq-item">
                        <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Is there a night surcharge?</strong>
                        <p>No, our rates are fixed 24/7. However, pre-booking is recommended for late-night airport pickups.</p>
                    </div>

                    <hr style={{ margin: '3rem 0', borderColor: '#eee' }} />

                    <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#777' }}>
                        *Prices are estimates based on market rates in February 2026 and are subject to change. Always confirm the final price before booking.
                    </p>

                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/blog/" style={{ textDecoration: 'underline', color: '#555' }}>← Back to Blog Advice</Link>
                    </div>
                </div>
            </div>

            <TrustBar clientsServed="1,200+" />

            <LastUpdated date="February 19, 2026" />
        </>
    );
}

