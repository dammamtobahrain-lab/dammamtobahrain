import Link from 'next/link';
import FareCalculatorTool from '@/components/FareCalculatorTool';

export const metadata = {
    title: 'Fare Calculator | Dammam to Bahrain Taxi Prices 2026',
    description: 'Instant taxi fare calculator for Saudi Arabia to Bahrain routes. Fixed prices from 170 SAR. Al Khobar, Dammam, Jubail, Riyadh and 40+ cities. No hidden fees, causeway toll included.',
    alternates: { canonical: '/fare-calculator/' },
};

const priceTable = [
    { from: 'Al Khobar', sedan: 180, suv: 280, staria: 320 },
    { from: 'Dhahran', sedan: 170, suv: 270, staria: 310 },
    { from: 'Dammam City', sedan: 200, suv: 300, staria: 340 },
    { from: 'Dammam Airport (DMM)', sedan: 220, suv: 320, staria: 360 },
    { from: 'Qatif', sedan: 220, suv: 320, staria: 360 },
    { from: 'Abqaiq', sedan: 260, suv: 360, staria: 400 },
    { from: 'Ras Tanura', sedan: 300, suv: 420, staria: 480 },
    { from: 'Jubail', sedan: 320, suv: 440, staria: 500 },
    { from: 'Hofuf (Al-Ahsa)', sedan: 380, suv: 520, staria: 580 },
    { from: 'Safaniya', sedan: 550, suv: 720, staria: 800 },
    { from: 'Khafji', sedan: 650, suv: 850, staria: 950 },
    { from: 'Riyadh', sedan: 950, suv: 1250, staria: 1400 },
    { from: 'Al Kharj', sedan: 750, suv: 1000, staria: 1150 },
    { from: 'Jeddah', sedan: 1100, suv: 1450, staria: 1650 },
];

export default function FareCalculatorPage() {
    return (
        <>
            <div style={{ background: '#0a0a0a', color: 'white', padding: '4rem 0 3rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>INSTANT PRICING</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: '0.5rem 0 1rem', color: 'white' }}>Fare Calculator</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '550px' }}>
                        Get an instant price for your Saudi Arabia to Bahrain transfer. Fixed rates — no surge pricing, no hidden fees, causeway toll included.
                    </p>
                </div>
            </div>

            <div className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '800px' }}>

                    <FareCalculatorTool />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                        {[
                            { icon: '🔒', title: 'Fixed Rates', desc: 'Price you see is what you pay. No surge, no meter.' },
                            { icon: '🛣️', title: 'Toll Included', desc: '25 SAR causeway toll is included in every fare.' },
                            { icon: '↩️', title: 'Round Trip Discount', desc: 'Book both ways and save 10% on the total.' },
                            { icon: '🕐', title: 'Free Cancellation', desc: 'Cancel up to 24 hours before pickup, no charge.' },
                        ].map(c => (
                            <div key={c.title} style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '1.25rem' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{c.icon}</div>
                                <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{c.title}</div>
                                <div style={{ fontSize: '0.8rem', color: '#666' }}>{c.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '16px', padding: '2rem', marginTop: '2rem' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Full Route Price List — All Vehicles</h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #0a0a0a' }}>
                                        <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>From → Bahrain</th>
                                        <th style={{ textAlign: 'center', padding: '10px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>Sedan / Lexus</th>
                                        <th style={{ textAlign: 'center', padding: '10px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>GMC Yukon</th>
                                        <th style={{ textAlign: 'center', padding: '10px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>Staria Van</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {priceTable.map((r, i) => (
                                        <tr key={r.from} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                                            <td style={{ padding: '10px 12px', fontWeight: '600' }}>{r.from}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>{r.sedan} SAR</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>{r.suv} SAR</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>{r.staria} SAR</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '1rem', marginBottom: 0 }}>
                            All prices in SAR. Causeway toll (25 SAR) included. Valid 2025–2026. Round-trip: 10% discount applied automatically.
                        </p>
                    </div>

                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
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
