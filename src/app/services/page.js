import PageHero from '@/components/ui/PageHero';
import LocationsGrid from '@/components/LocationsGrid';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import Link from 'next/link';
import { Car, Plane, Crown, Users, Building2, RefreshCw, FileCheck } from 'lucide-react';

export const metadata = {
    title: "Saudi to Bahrain Taxi Services | Private Transfers & Chauffeur",
    description: "Book a private taxi from Saudi Arabia to Bahrain. Dammam, Khobar, Jubail, Riyadh and airport transfers with fixed quotes, private vehicles and door-to-door service.",
    alternates: { canonical: '/services/' },
};

const serviceCategories = [
    {
        icon: Car,
        title: 'Saudi Arabia to Bahrain Taxi',
        text: 'Private door-to-door transfers from Dammam, Khobar, Dhahran, Jubail and other Eastern Province cities to Bahrain via the King Fahd Causeway.',
        links: [
            { label: 'Dammam to Bahrain →', href: '/locations/dammam/' },
            { label: 'Khobar to Bahrain →', href: '/locations/al-khobar/' },
        ],
    },
    {
        icon: Plane,
        title: 'Airport Transfers',
        text: 'Private pickup and drop-off between Dammam Airport (DMM), Bahrain International Airport (BAH), and any Saudi or Bahrain address, with flight tracking.',
        links: [
            { label: 'Dammam Airport to Bahrain →', href: '/services/dammam-airport-to-bahrain/' },
            { label: 'Bahrain Airport to Dammam →', href: '/services/bahrain-airport-to-dammam/' },
        ],
    },
    {
        icon: Crown,
        title: 'Private Chauffeur Service',
        text: 'A dedicated professional driver and premium vehicle — Lexus, GMC Yukon or Hyundai Staria — for a more comfortable cross-border trip.',
        links: [
            { label: 'Explore the Fleet →', href: '/fleet/' },
        ],
    },
    {
        icon: Users,
        title: 'Family & Group Transfers',
        text: 'Spacious SUVs and vans with child seats available, built for families and larger groups traveling with luggage.',
        links: [
            { label: 'Family Taxi Service →', href: '/services/family-taxi/' },
        ],
    },
    {
        icon: Building2,
        title: 'Corporate Transportation',
        text: 'Pre-arranged transportation for businesses, employees and regular Saudi–Bahrain commuters, with account billing available.',
        links: [
            { label: 'Corporate Transport →', href: '/corporate/' },
        ],
    },
    {
        icon: RefreshCw,
        title: 'Round-Trip Transfers',
        text: 'Book your Saudi Arabia to Bahrain trip and the return journey together, with pricing worked out for both legs upfront.',
        links: [
            { label: 'Get a Round-Trip Quote →', href: '/fare-calculator/' },
        ],
    },
    {
        icon: FileCheck,
        title: 'Visa Run Transportation',
        text: 'Private transportation for travelers making a Saudi–Bahrain border run for visa purposes, with same-day turnaround.',
        links: [
            { label: 'Visa Run Service →', href: '/services/visa-run/' },
        ],
    },
];

export default function Services() {
    return (
        <>
            <SchemaMarkup data={{ breadcrumbs: [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/' }] }} />

            <PageHero
                title="Private Taxi & Chauffeur Services to Bahrain"
                subtitle="Book a private cross-border taxi from Dammam, Khobar, Jubail, Riyadh and other Saudi cities to Bahrain. Choose a sedan, SUV or van and get a fixed quote before your trip."
                label="SERVICES"
            />

            <div className="section">
                <div className="container">
                    <div className="section-title" style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontWeight: '900', letterSpacing: '-1px' }}>Our Saudi–Bahrain Transportation Services</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {serviceCategories.map((cat) => (
                            <div key={cat.title} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.75rem' }}>
                                <cat.icon size={28} color="var(--color-accent)" strokeWidth={2.25} style={{ marginBottom: '0.75rem' }} />
                                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.5rem' }}>{cat.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>{cat.text}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    {cat.links.map((l) => (
                                        <Link key={l.href} href={l.href} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary)', textDecoration: 'none' }}>
                                            {l.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: '800px' }}>

                    {/* Main CTA */}
                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem' }}>Get Your Saudi–Bahrain Taxi Quote</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                            Send us your pickup location, destination, travel date, passengers and preferred vehicle. We'll confirm the available option and price on WhatsApp, usually within a few minutes.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link
                                href="https://wa.me/966590209905?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20service."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '1rem' }}
                            >
                                GET QUOTE ON WHATSAPP
                            </Link>
                            <Link
                                href="tel:+966590209905"
                                style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}
                            >
                                CALL US NOW
                            </Link>
                        </div>
                    </div>

                    {/* What to include */}
                    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.25rem' }}>What to Include in Your Quote Request</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                            {[
                                { num: '1', label: 'Pickup City / Address', example: 'e.g. Al Khobar, Jubail, Riyadh' },
                                { num: '2', label: 'Vehicle Type', example: 'Sedan, SUV, or Van' },
                                { num: '3', label: 'Passengers', example: 'Number of travelers' },
                                { num: '4', label: 'Travel Date & Time', example: 'Date & preferred pickup time' },
                            ].map(item => (
                                <div key={item.num} style={{ background: '#f9f9f9', borderRadius: '12px', padding: '1.25rem' }}>
                                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0a0a0a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{item.num}</div>
                                    <div style={{ fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.label}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#777' }}>{item.example}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: '#f9f9f9', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.875rem', color: '#555', margin: 0 }}>
                            All prices include the causeway toll, fuel, and driver. Extra stops, waiting time beyond the agreed pickup window, additional hours, or special vehicle requirements may incur an additional charge — this is always confirmed with you before booking.
                        </p>
                    </div>

                </div>
            </div>

            <LocationsGrid />

            <TrustBar clientsServed="10,000+" />

            <div className="section">
                <div className="container">
                    <LastUpdated date="February 19, 2026" />
                </div>
            </div>
        </>
    );
}
