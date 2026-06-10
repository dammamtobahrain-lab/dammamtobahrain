import Link from 'next/link';

export const metadata = {
    title: 'Get a Quote | Dammam to Bahrain Taxi Price',
    description: 'Get a personalised quote for your Saudi Arabia to Bahrain transfer. Al Khobar, Dammam, Jubail, Riyadh and 40+ cities. No hidden fees, causeway toll included. Contact us on WhatsApp for an instant price.',
    alternates: { canonical: '/fare-calculator/' },
};

const routes = [
    { from: 'Al Khobar', time: '45-60 min' },
    { from: 'Dhahran', time: '40-55 min' },
    { from: 'Dammam City', time: '55-70 min' },
    { from: 'Dammam Airport (DMM)', time: '75-90 min' },
    { from: 'Qatif', time: '55-70 min' },
    { from: 'Abqaiq', time: '70-85 min' },
    { from: 'Ras Tanura', time: '80-100 min' },
    { from: 'Jubail', time: '90-115 min' },
    { from: 'Hofuf (Al-Ahsa)', time: '2-2.5 hrs' },
    { from: 'Safaniya', time: '2.5-3 hrs' },
    { from: 'Khafji', time: '3-3.5 hrs' },
    { from: 'Riyadh', time: '4-5 hrs' },
    { from: 'Al Kharj', time: '3.5-4.5 hrs' },
    { from: 'Jeddah', time: '5-6 hrs' },
];

export default function GetQuotePage() {
    return (
        <>
            <div style={{ background: '#0a0a0a', color: 'white', padding: '4rem 0 3rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>INSTANT PRICING</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: '0.5rem 0 1rem', color: 'white' }}>Get a Quote</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '550px' }}>
                        Tell us your pickup city, vehicle type, and travel date — we'll send you a fixed price instantly on WhatsApp.
                    </p>
                </div>
            </div>

            <div className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '800px' }}>

                    {/* Main CTA Card */}
                    <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 30px rgba(0,0,0,0.08)', border: '1px solid #eee', textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem' }}>Get Your Price in 60 Seconds</h2>
                        <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                            Send us a WhatsApp message with your pickup city, vehicle preference, and number of passengers — we'll reply with a fixed price immediately.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link
                                href="https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20to%20Bahrain.%20Pickup%3A%20%5BYour%20City%5D%2C%20Vehicle%3A%20%5BSedan%2FSUV%2FVan%5D%2C%20Passengers%3A%20%5BNumber%5D%2C%20Date%3A%20%5BDate%5D"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '1rem' }}
                            >
                                GET QUOTE ON WHATSAPP
                            </Link>
                            <Link
                                href="tel:+966569487569"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0a0a0a', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '1rem' }}
                            >
                                CALL US NOW
                            </Link>
                        </div>
                    </div>

                    {/* What to include */}
                    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.25rem' }}>What to Include in Your Quote Request</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                            {[
                                { num: '1', label: 'Pickup City', example: 'e.g. Al Khobar, Jubail, Riyadh' },
                                { num: '2', label: 'Vehicle Type', example: 'Sedan, SUV, or Van' },
                                { num: '3', label: 'Passengers', example: 'Number of travelers' },
                                { num: '4', label: 'Travel Date', example: 'Date & preferred time' },
                            ].map(item => (
                                <div key={item.num} style={{ background: '#f9f9f9', borderRadius: '12px', padding: '1.25rem' }}>
                                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0a0a0a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{item.num}</div>
                                    <div style={{ fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.label}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#777' }}>{item.example}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guarantees */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        {[
                            { icon: '🔒', title: 'Fixed Price', desc: 'The quote you receive is the final price. No surprises.' },
                            { icon: '🛣️', title: 'Toll Included', desc: '25 SAR causeway toll is included in every quote.' },
                            { icon: '↩️', title: 'Round Trip', desc: 'Book both ways together and save on the total.' },
                            { icon: '🕐', title: 'Free Cancellation', desc: 'Cancel up to 24 hours before pickup, no charge.' },
                        ].map(c => (
                            <div key={c.title} style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '1.25rem' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{c.icon}</div>
                                <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{c.title}</div>
                                <div style={{ fontSize: '0.8rem', color: '#666' }}>{c.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* Route List */}
                    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Routes We Cover — Request a Quote for Any City</h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #0a0a0a' }}>
                                        <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>From → Bahrain</th>
                                        <th style={{ textAlign: 'center', padding: '10px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>Est. Duration</th>
                                        <th style={{ textAlign: 'center', padding: '10px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {routes.map((r, i) => (
                                        <tr key={r.from} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                                            <td style={{ padding: '10px 12px', fontWeight: '600' }}>{r.from}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center', color: '#555' }}>{r.time}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                                                <Link
                                                    href={`https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20${encodeURIComponent(r.from)}%20to%20Bahrain.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '5px 14px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', textDecoration: 'none' }}
                                                >
                                                    Get Quote
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Don't See Your City?</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', fontSize: '0.875rem' }}>We cover 47+ locations. Send us a message for a custom quote on any route.</p>
                        <Link href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none' }}>
                            GET CUSTOM QUOTE
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
