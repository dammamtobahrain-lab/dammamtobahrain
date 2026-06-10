import Link from 'next/link';

export const metadata = {
    title: 'Bahrain Destinations | Where We Drop You Off | Dammam to Bahrain Taxi',
    description: 'Taxi to any destination in Bahrain — Bahrain International Airport (BAH), Manama City Centre Mall, Juffair entertainment district, and Amwaj Islands. Fixed prices, door-to-door from Saudi Arabia.',
    alternates: { canonical: '/destinations/' },
};

const destinations = [
    {
        slug: 'bahrain-airport',
        name: 'Bahrain International Airport',
        shortName: 'BAH Airport',
        emoji: '✈️',
        tagline: 'Catch your flight on time — every time',
        desc: 'Flight connections, departures, and arrivals at Bahrain\'s main international gateway. We track your flight so you\'re never late.',
        time: '45-60 min from Khobar',
        highlights: ['Flight tracking included', 'Meet & greet service', 'All terminals covered', '24/7 availability'],
        badge: 'Most Booked',
    },
    {
        slug: 'city-centre-mall',
        name: 'City Centre Mall Bahrain',
        shortName: 'City Centre Mall',
        emoji: '🛍️',
        tagline: 'Bahrain\'s premier shopping destination',
        desc: 'The largest mall in Bahrain with 350+ stores, dining, and entertainment. Popular weekend shopping destination from Dammam and Khobar.',
        time: '50-65 min from Khobar',
        highlights: ['Drop at mall entrance', 'Return pickup arranged', 'Shopping trip specialists', 'Group discounts available'],
        badge: 'Weekend Favourite',
    },
    {
        slug: 'juffair',
        name: 'Juffair District, Manama',
        shortName: 'Juffair',
        emoji: '🌆',
        tagline: 'Manama\'s vibrant nightlife & dining hub',
        desc: 'Juffair is Bahrain\'s most popular entertainment district — home to luxury hotels, restaurants, bars, and the lively weekend scene.',
        time: '50-65 min from Khobar',
        highlights: ['Hotel drop-offs', 'Late-night return rides', 'Near US Naval Base', 'Expat favourite'],
        badge: 'Nightlife & Dining',
    },
    {
        slug: 'amwaj-islands',
        name: 'Amwaj Islands',
        shortName: 'Amwaj Islands',
        emoji: '🏝️',
        tagline: 'Luxury waterfront living & resort beaches',
        desc: 'An exclusive artificial island development with luxury apartments, resorts, beaches, and the popular ALBA area. Weekend retreats from Saudi Arabia.',
        time: '55-70 min from Khobar',
        highlights: ['Beach resort transfers', 'Luxury apartment drops', 'Floating City restaurants', 'Weekend getaway specialist'],
        badge: 'Luxury & Beach',
    },
];

const popularCombos = [
    { from: 'Al Khobar', to: 'BAH Airport', time: '45 min' },
    { from: 'Dammam', to: 'BAH Airport', time: '55 min' },
    { from: 'Jubail', to: 'City Centre Mall', time: '1.5 hrs' },
    { from: 'Riyadh', to: 'Juffair', time: '3.5-4 hrs' },
    { from: 'Dhahran', to: 'Amwaj Islands', time: '50 min' },
    { from: 'Qatif', to: 'BAH Airport', time: '55 min' },
];

export default function DestinationsPage() {
    return (
        <>
            {/* Hero */}
            <div style={{ background: '#0a0a0a', color: 'white', padding: '4rem 0 3rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>BAHRAIN DESTINATIONS</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: '0.5rem 0 1rem', color: 'white' }}>
                        Where Would You Like to Go in Bahrain?
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.6 }}>
                        We drop you at the right spot — airport, mall, hotel, or beach. Fixed prices from Saudi Arabia, no detours, no hidden fees.
                    </p>
                </div>
            </div>

            {/* Destination Cards */}
            <div className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {destinations.map((dest) => (
                            <div key={dest.slug} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '1.75rem' }}>{dest.emoji}</span>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                <h2 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>{dest.name}</h2>
                                                <span style={{ background: '#0a0a0a', color: 'white', fontSize: '0.65rem', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{dest.badge}</span>
                                            </div>
                                            <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: '600', margin: '2px 0 0' }}>{dest.tagline}</p>
                                        </div>
                                    </div>
                                    <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>{dest.desc}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {dest.highlights.map((h) => (
                                            <span key={h} style={{ background: '#f3f4f6', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '20px', color: '#444' }}>✓ {h}</span>
                                        ))}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                                        <span>⏱ {dest.time}</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '140px' }}>
                                    <Link
                                        href={`/destinations/${dest.slug}/`}
                                        style={{ background: '#0a0a0a', color: 'white', padding: '10px 18px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}
                                    >
                                        View Details →
                                    </Link>
                                    <Link
                                        href={`https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20to%20${encodeURIComponent(dest.name)}%20in%20Bahrain.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ background: '#25D366', color: 'white', padding: '10px 18px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}
                                    >
                                        Get Quote
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Popular Combinations Table */}
                    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2rem', marginTop: '2.5rem' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Popular Route + Destination Combinations</h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #0a0a0a' }}>
                                        <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>From</th>
                                        <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>To (Bahrain)</th>
                                        <th style={{ textAlign: 'center', padding: '8px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>Time</th>
                                        <th style={{ textAlign: 'center', padding: '8px 12px', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase' }}>Quote</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popularCombos.map((c, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                                            <td style={{ padding: '10px 12px', fontWeight: '600' }}>{c.from}</td>
                                            <td style={{ padding: '10px 12px', color: '#555' }}>{c.to}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center', color: '#666' }}>{c.time}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                                                <Link
                                                    href={`https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20${encodeURIComponent(c.from)}%20to%20${encodeURIComponent(c.to)}%20in%20Bahrain.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ background: '#25D366', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', textDecoration: 'none' }}
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

                    {/* Don't see your destination CTA */}
                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Going Somewhere Else in Bahrain?</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
                            We drop off anywhere in Bahrain — hotels, compounds, hospitals, universities, restaurants. Send us your destination and we'll confirm the price instantly.
                        </p>
                        <Link
                            href="https://wa.me/966569487569?text=Hi%2C%20I%20need%20a%20quote%20for%20a%20taxi%20to%20a%20custom%20destination%20in%20Bahrain."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none' }}
                        >
                            GET CUSTOM QUOTE
                        </Link>
                    </div>

                    {/* SEO paragraph */}
                    <div style={{ marginTop: '2.5rem', padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem' }}>All Bahrain Drop-Off Locations Covered</h2>
                        <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                            Our Bahrain drop-off network covers every major district and landmark. Beyond our featured destinations, we service the Diplomatic Area, Seef District, Adliya, Budaiya, Saar, Al Hidd, Muharraq, Riffa, Isa Town, and all surrounding municipalities.
                        </p>
                        <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                            Hotel transfers are a specialty — we have standing arrangements with most major Bahrain properties including the Four Seasons, The Ritz-Carlton, Gulf Hotel, Ramada, Crown Plaza, and Novotel. Simply provide your hotel name when booking and we'll arrange the perfect drop-off.
                        </p>
                        <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7 }}>
                            All quotes are one-way and include the King Fahd Causeway toll (25 SAR). Return trips and round-trip bookings available. <Link href="/fare-calculator/" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Get a quote</Link> for your route or <Link href="/locations/" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>browse by pickup city</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
