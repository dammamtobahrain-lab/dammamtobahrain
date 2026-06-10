
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: "Dammam to Bahrain Taxi | Your Guide to Getting a Quote (2026)",
    description: "How to get a fixed price for your taxi from Dammam, Khobar, Jubail, or Riyadh to Bahrain. Understand what's included, how the causeway toll works, and how to book.",
};

const routes = [
    { from: 'Dammam', to: 'Manama', car: 'Sedan (Camry)' },
    { from: 'Al Khobar', to: 'Manama', car: 'Sedan (Camry)' },
    { from: 'Dammam Airport (DMM)', to: 'Bahrain', car: 'SUV (Yukon)' },
    { from: 'Jubail', to: 'Bahrain', car: 'Sedan (Camry)' },
    { from: 'Riyadh', to: 'Bahrain', car: 'Sedan (Camry)' },
];

export default function CostGuide() {
    return (
        <>
            <SchemaMarkup type="article" data={{
                headline: "How to Get a Quote for a Taxi from Dammam to Bahrain (2026)",
                description: "Guide to getting a fixed-price quote for your Saudi Arabia to Bahrain transfer, including what's included and how to book.",
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
                    <h1 className="section-title">How to Get a Quote for Your Dammam to Bahrain Taxi (2026 Guide)</h1>
                    <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                        Traveling between Saudi Arabia and Bahrain is seamless when you book a fixed-price private taxi.
                        Getting an instant quote is simple — just send us your pickup city, vehicle type, and travel date on WhatsApp and we'll reply immediately with your fixed price.
                    </p>

                    <div style={{ background: '#f0fdf4', border: '2px solid #25D366', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                        <h2 style={{ color: '#166534', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Get Your Price Instantly</h2>
                        <p style={{ color: '#555', marginBottom: '1rem', fontSize: '0.95rem' }}>Send us your pickup city and we'll reply with a fixed price in seconds.</p>
                        <Link
                            href="https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20to%20Bahrain."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '1rem' }}
                        >
                            GET QUOTE ON WHATSAPP
                        </Link>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Popular Routes — Request a Quote</h2>
                    <p>
                        We cover 47+ pickup cities across Saudi Arabia. Click any route below to request a quote instantly.
                    </p>

                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem', marginBottom: '3rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <thead>
                            <tr style={{ background: '#f4f4f4', borderBottom: '2px solid #ddd' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Pickup Location</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Destination</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Vehicle Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.map((row, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '1rem' }}>{row.from}</td>
                                    <td style={{ padding: '1rem' }}>{row.to}</td>
                                    <td style={{ padding: '1rem' }}>{row.car}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <Link
                                            href={`https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20from%20${encodeURIComponent(row.from)}%20to%20${encodeURIComponent(row.to)}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '5px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none' }}
                                        >
                                            Get Quote
                                        </Link>
                                    </td>
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
                        While the SAPTCO bus is the budget option, a private taxi offers significant advantages:
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
                        All prices are fixed and confirmed at time of booking. Contact us on WhatsApp for a personalised quote for your route and vehicle.
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

