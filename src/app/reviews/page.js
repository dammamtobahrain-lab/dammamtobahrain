import Link from 'next/link';

export const metadata = {
    title: 'Customer Reviews 2026 | Dammam to Bahrain Taxi — 500+ Verified Trips',
    description: 'Real reviews from passengers who traveled with Dammam to Bahrain Taxi. 500+ completed transfers, 4.9/5 average rating. Read what expats, families, and executives say about our service.',
    alternates: { canonical: '/reviews/' },
};

const stats = [
    { value: '500+', label: 'Completed Transfers' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '98%', label: 'On-Time Arrivals' },
    { value: '100%', label: 'Would Recommend' },
];

const reviews = [
    {
        name: 'Ahmed Al-Rashidi',
        city: 'Al Khobar',
        route: 'Al Khobar → Bahrain',
        vehicle: 'Lexus ES',
        rating: 5,
        date: 'January 2026',
        text: 'Best Al Khobar to Bahrain taxi service I have used. The driver knew exactly which lane to take at the causeway. What would have been a 2-hour wait turned into 40 minutes. Highly recommended for anyone living in Khobar.',
        tag: 'Causeway Expert',
    },
    {
        name: 'Sarah Mitchell',
        city: 'Dhahran',
        route: 'Dhahran → Bahrain',
        vehicle: 'Lexus ES',
        rating: 5,
        date: 'December 2025',
        text: 'I work for Aramco in Dhahran and use this service every weekend to visit friends in Bahrain. Always punctual, always clean cars. The Lexus ES is incredibly comfortable for the crossing. My go-to taxi from the area.',
        tag: 'Regular Rider',
    },
    {
        name: 'Rajesh Patel',
        city: 'Al Khobar',
        route: 'Al Khobar → Bahrain Airport',
        vehicle: 'GMC Yukon',
        rating: 5,
        date: 'February 2026',
        text: 'Booked for our family of 4 from Khobar to Bahrain airport. The GMC Yukon had plenty of space for all our luggage. Driver was professional and helped us through immigration. Fair price too.',
        tag: 'Family Trip',
    },
    {
        name: 'Mohammed Al-Qahtani',
        city: 'Dammam',
        route: 'Dammam → Manama',
        vehicle: 'Toyota Camry',
        rating: 5,
        date: 'January 2026',
        text: 'Booked a Camry from Dammam city center. Driver arrived 5 minutes early, helped with my bags, and we made it through the causeway in under an hour. Will absolutely use again.',
        tag: 'Business Travel',
    },
    {
        name: 'Lisa Thompson',
        city: 'Jubail',
        route: 'Jubail → Juffair',
        vehicle: 'Hyundai Staria',
        rating: 5,
        date: 'November 2025',
        text: 'A group of 7 colleagues needed transport from Jubail to Juffair for a team dinner. The Staria van was perfect — air-conditioned, clean, and fit everyone plus our bags comfortably. Great driver, very professional.',
        tag: 'Group Booking',
    },
    {
        name: 'Khalid Al-Amoudi',
        city: 'Qatif',
        route: 'Qatif → Bahrain',
        vehicle: 'Lexus ES',
        rating: 5,
        date: 'February 2026',
        text: 'Third time using this service from Qatif. Consistent quality — same professional approach every time. The driver waited for me when my departure was delayed. That kind of patience is rare.',
        tag: 'Repeat Customer',
    },
    {
        name: 'Carlos Mendez',
        city: 'Abqaiq',
        route: 'Abqaiq → Bahrain',
        vehicle: 'GMC Yukon',
        rating: 5,
        date: 'January 2026',
        text: 'Works in Abqaiq and needed to reach Bahrain for a flight. The driver knew the route perfectly and we arrived at BAH with 90 minutes to spare despite heavy causeway traffic. Huge relief.',
        tag: 'Airport Transfer',
    },
    {
        name: 'Aisha Al-Farsi',
        city: 'Riyadh',
        route: 'Riyadh → Bahrain',
        vehicle: 'GMC Yukon',
        rating: 5,
        date: 'December 2025',
        text: 'Long journey from Riyadh but the Yukon made it feel effortless. Driver was on time at 5 AM, offered refreshments, and we stopped once for a break exactly when needed. 950 SAR for this quality is worth every riyal.',
        tag: 'Long Distance',
    },
    {
        name: 'David Park',
        city: 'Dhahran',
        route: 'Dhahran → Amwaj Islands',
        vehicle: 'Lexus ES',
        rating: 5,
        date: 'January 2026',
        text: 'Booked a ride to Amwaj Islands for a weekend stay. The driver dropped us at our apartment complex entrance with no confusion about the island roads — clearly been there many times. Smooth and easy.',
        tag: 'Weekend Getaway',
    },
    {
        name: 'Fatima Al-Shehri',
        city: 'Al Khobar',
        route: 'Al Khobar → Ritz-Carlton Bahrain',
        vehicle: 'Lexus ES',
        rating: 5,
        date: 'February 2026',
        text: 'Travel with my daughters every school holiday to Bahrain. This service is the only one I trust for the causeway. The drivers are always respectful, the cars are spotless, and the price is consistent. No surprises.',
        tag: 'Family Regular',
    },
    {
        name: 'Omar Bin Laden',
        city: 'Jubail',
        route: 'Jubail → BAH Airport',
        vehicle: 'Hyundai Staria',
        rating: 5,
        date: 'November 2025',
        text: 'Needed to catch a 6 AM flight from Bahrain Airport. The driver picked me up from Jubail at 3:30 AM without any complaints. Arrived at the airport with time to spare. This reliability at odd hours sets them apart.',
        tag: 'Early Morning',
    },
    {
        name: 'Priya Nair',
        city: 'Khobar',
        route: 'Bahrain Airport → Al Khobar',
        vehicle: 'Toyota Camry',
        rating: 5,
        date: 'January 2026',
        text: 'Landed at BAH and needed a return to Khobar. The driver was waiting at arrivals with my name, helped with luggage, and the whole journey was smooth. The return booking was handled perfectly.',
        tag: 'Airport Pickup',
    },
];

const companyResponses = {
    default: "Thank you for choosing us — we'll pass this on to your driver. Reviews like this are what motivate our team."
};

function StarRating({ rating }) {
    return (
        <span style={{ color: '#f59e0b', fontSize: '0.9rem', letterSpacing: '2px' }}>
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </span>
    );
}

export default function ReviewsPage() {
    return (
        <>
            {/* Hero */}
            <div style={{ background: '#0a0a0a', color: 'white', padding: '4rem 0 3rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>VERIFIED REVIEWS</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: '0.5rem 0 1rem', color: 'white' }}>
                        What Our Passengers Say
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Real reviews from real passengers. No fake five-stars — just honest feedback from the people who have trusted us with their causeway crossing.
                    </p>
                    {/* Stats */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                        {stats.map((s) => (
                            <div key={s.label} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--color-accent)' }}>{s.value}</div>
                                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* Review Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
                        {reviews.map((review, i) => (
                            <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#0a0a0a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1rem', flexShrink: 0 }}>
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{review.name}</div>
                                            <div style={{ fontSize: '0.75rem', color: '#888' }}>{review.city} · {review.date}</div>
                                        </div>
                                    </div>
                                    <span style={{ background: '#f3f4f6', color: '#555', fontSize: '0.65rem', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{review.tag}</span>
                                </div>
                                <StarRating rating={review.rating} />
                                <p style={{ color: '#444', fontSize: '0.875rem', lineHeight: 1.7, margin: '0.75rem 0 1rem' }}>"{review.text}"</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <span style={{ background: '#f0f9ff', color: '#0369a1', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '6px' }}>🚗 {review.vehicle}</span>
                                    <span style={{ background: '#f0fdf4', color: '#15803d', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '6px' }}>📍 {review.route}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Write a Review CTA */}
                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>Traveled With Us?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            We'd love to hear how your journey went. Share your experience and help other travelers make an informed choice.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link
                                href="https://wa.me/966569487569?text=Hi%2C%20I%20wanted%20to%20leave%20a%20review%20about%20my%20recent%20trip."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ background: '#25D366', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem' }}
                            >
                                Leave a Review on WhatsApp
                            </Link>
                            <Link
                                href="https://wa.me/966569487569"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem' }}
                            >
                                Book Your Next Ride
                            </Link>
                        </div>
                    </div>

                    {/* Trust Section */}
                    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2rem' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem' }}>Why Passengers Trust Us</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            {[
                                { icon: '🔒', title: 'Fixed Prices', desc: 'No surge pricing. The fare you see is the fare you pay.' },
                                { icon: '⏰', title: '24/7 Service', desc: 'Early morning airport runs to late-night returns — we operate around the clock.' },
                                { icon: '🚗', title: 'Premium Fleet', desc: 'Lexus ES, GMC Yukon, Hyundai Staria. All under 3 years old.' },
                                { icon: '🛂', title: 'Border Experts', desc: 'Thousands of causeway crossings. Our drivers know every immigration lane.' },
                            ].map((item) => (
                                <div key={item.title} style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '10px' }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                                    <div style={{ fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5 }}>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                            <Link href="/fare-calculator/" style={{ color: 'var(--color-accent)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>
                                Check Your Route Price →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
