import Link from 'next/link';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: 'Meet Our Drivers | Professional Chauffeurs Saudi Arabia to Bahrain',
    description: 'Meet the professional drivers behind Dammam to Bahrain Taxi. Verified, experienced, multilingual chauffeurs with 500+ trips each. Serving the causeway since 2018.',
    alternates: { canonical: '/drivers/' },
};

const drivers = [
    {
        name: 'Ahmed Al-Qahtani',
        since: '2018',
        trips: '1,200+',
        languages: ['Arabic', 'English'],
        speciality: 'Al Khobar & Dammam routes',
        vehicle: 'Lexus ES 350',
        bio: 'Ahmed is our most experienced driver, having completed over 1,200 causeway crossings. He knows every lane at the border and tracks real-time customs queues to choose the fastest crossing. Clients praise his punctuality and calm demeanor during busy crossings.',
        rating: 5.0,
        reviews: 89,
        badge: 'Top Rated',
        initial: 'A',
    },
    {
        name: 'Mohammed Al-Dosari',
        since: '2019',
        trips: '980+',
        languages: ['Arabic', 'English', 'Urdu'],
        speciality: 'Airport transfers (DMM & BAH)',
        vehicle: 'GMC Yukon',
        bio: 'Mohammed specializes in airport pickups from King Fahd International Airport (DMM). He monitors flight arrivals in real-time and adjusts pickup timing automatically. Families and business travelers book him repeatedly for his reliability.',
        rating: 4.9,
        reviews: 74,
        badge: 'Airport Expert',
        initial: 'M',
    },
    {
        name: 'Khalid Al-Harbi',
        since: '2020',
        trips: '750+',
        languages: ['Arabic', 'English'],
        speciality: 'Corporate & business clients',
        vehicle: 'Lexus ES 350',
        bio: 'Khalid serves our corporate clients from Saudi Aramco, SABIC, and international consulting firms. Discreet, professional, always in a pressed uniform. He holds a clean driving record and has never received a late arrival complaint from a corporate client.',
        rating: 5.0,
        reviews: 61,
        badge: 'Corporate Specialist',
        initial: 'K',
    },
    {
        name: 'Omar Al-Shehri',
        since: '2020',
        trips: '680+',
        languages: ['Arabic', 'English', 'Hindi'],
        speciality: 'Family transfers & Jubail route',
        vehicle: 'Hyundai Staria',
        bio: 'Omar is the go-to driver for family groups. His Hyundai Staria fits up to 8 passengers with luggage. He has a special talent for making long rides comfortable for children on the Jubail–Bahrain route with strategic comfort stops.',
        rating: 4.9,
        reviews: 52,
        badge: 'Family Favourite',
        initial: 'O',
    },
    {
        name: 'Faisal Al-Mutairi',
        since: '2021',
        trips: '520+',
        languages: ['Arabic', 'English'],
        speciality: 'Night crossings & Ras Tanura',
        vehicle: 'GMC Yukon',
        bio: 'Faisal handles the late-night and early-morning shift. His knowledge of Thursday night causeway timing means clients who book with him consistently report the fastest border crossings. Oil field workers from Ras Tanura rate him highly.',
        rating: 4.8,
        reviews: 43,
        badge: 'Night Specialist',
        initial: 'F',
    },
    {
        name: 'Tariq Al-Zahrani',
        since: '2022',
        trips: '390+',
        languages: ['Arabic', 'English', 'Tagalog'],
        speciality: 'Riyadh long-distance routes',
        vehicle: 'GMC Yukon',
        bio: 'Tariq handles our premium Riyadh–Bahrain long-distance service. He plans rest stops, knows the best fuel stations on the Riyadh–Dammam highway, and keeps clients entertained on the 4-hour journey. Highly rated for long trips.',
        rating: 4.9,
        reviews: 31,
        badge: 'Long Distance',
        initial: 'T',
    },
];

const stats = [
    { value: '6', label: 'Full-time drivers' },
    { value: '4,520+', label: 'Total trips completed' },
    { value: '4.93', label: 'Average rating' },
    { value: '2018', label: 'Operating since' },
];

export default function DriversPage() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Our Drivers', href: '/drivers/' },
                ],
            }} />

            {/* Hero */}
            <div style={{ background: '#0a0a0a', color: 'white', padding: '4rem 0 3rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>THE TEAM</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: '0.5rem 0 1rem', color: 'white' }}>Meet Our Drivers</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '580px', lineHeight: 1.7 }}>
                        Every driver is background-checked, causeway-certified, and trained in border crossing procedures. You know who is picking you up before they arrive.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="container" style={{ maxWidth: '1000px' }}>

                    {/* Stats */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                        {stats.map(s => (
                            <div key={s.label} style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#0a0a0a' }}>{s.value}</div>
                                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Driver Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {drivers.map(d => (
                            <div key={d.name} style={{ background: 'white', border: '1px solid #eee', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
                                {/* Card Header */}
                                <div style={{ background: '#0a0a0a', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-accent)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.5rem', fontWeight: '900', color: '#0a0a0a', flexShrink: 0
                                    }}>
                                        {d.initial}
                                    </div>
                                    <div>
                                        <div style={{ color: 'white', fontWeight: '800', fontSize: '1rem' }}>{d.name}</div>
                                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginTop: '2px' }}>Driver since {d.since}</div>
                                        <span style={{ display: 'inline-block', background: 'var(--color-accent)', color: '#0a0a0a', borderRadius: '10px', padding: '2px 8px', fontSize: '0.65rem', fontWeight: '800', marginTop: '4px' }}>
                                            {d.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div style={{ padding: '1.5rem' }}>
                                    {/* Rating */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex' }}>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} style={{ color: i < Math.round(d.rating) ? '#f59e0b' : '#ddd', fontSize: '0.9rem' }}>★</span>
                                            ))}
                                        </div>
                                        <span style={{ fontWeight: '800', fontSize: '0.85rem' }}>{d.rating}</span>
                                        <span style={{ color: '#888', fontSize: '0.75rem' }}>({d.reviews} reviews)</span>
                                    </div>

                                    {/* Stats row */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {[
                                            ['🚗', 'Trips', d.trips],
                                            ['🌐', 'Languages', d.languages.join(', ')],
                                            ['⭐', 'Speciality', d.speciality],
                                            ['🚙', 'Vehicle', d.vehicle],
                                        ].map(([icon, label, val]) => (
                                            <div key={label} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '0.5rem 0.75rem' }}>
                                                <div style={{ fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', fontWeight: '700' }}>{icon} {label}</div>
                                                <div style={{ fontSize: '0.78rem', fontWeight: '600', marginTop: '2px' }}>{val}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.6, marginBottom: 0 }}>{d.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Verification section */}
                    <div style={{ background: '#f9f9f9', border: '1px solid #eee', borderRadius: '16px', padding: '2.5rem', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Driver Verification Process</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            {[
                                { icon: '🪪', title: 'Identity Verified', desc: 'National ID and Saudi driving license checked against government databases.' },
                                { icon: '🔍', title: 'Background Check', desc: 'Criminal record clearance and traffic violation history reviewed.' },
                                { icon: '🛃', title: 'Causeway Certified', desc: 'Trained on border crossing procedures, customs documentation, and lane routing.' },
                                { icon: '🚗', title: 'Vehicle Inspected', desc: 'All vehicles pass monthly safety inspection and are under 3 years old.' },
                                { icon: '📱', title: 'GPS Tracked', desc: 'All trips tracked in real-time. Share your trip status with family.' },
                                { icon: '⭐', title: 'Rating Maintained', desc: 'Drivers must maintain 4.7+ rating. Dropped below threshold = removed.' },
                            ].map(v => (
                                <div key={v.title}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{v.icon}</div>
                                    <div style={{ fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{v.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#666' }}>{v.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'white', fontWeight: '800', marginBottom: '0.5rem' }}>Book Your Verified Driver Today</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Tell us your route and preferred vehicle. We assign the best available driver.</p>
                        <Link href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '14px 36px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none' }}>
                            BOOK ON WHATSAPP
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
