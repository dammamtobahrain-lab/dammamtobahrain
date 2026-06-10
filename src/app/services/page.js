import LocationsGrid from '@/components/LocationsGrid';
import PageHero from '@/components/ui/PageHero';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import TrustBar from '@/components/sections/TrustBar';
import LastUpdated from '@/components/sections/LastUpdated';
import Link from 'next/link';

export const metadata = {
    title: "Services | Dammam to Bahrain Taxi",
    description: "Private taxi and executive car services from all Eastern Province locations to Bahrain. Get an instant fixed-price quote on WhatsApp — 47+ cities covered.",
};

const destinations = [
    'TRIP TO BAHRAIN', 'TRIP TO DAMMAM AIRPORT', 'LOCAL CITY TRIP (within 50 KM)',
    'TRIP TO DAMMAM SEA PORT', 'TRIP TO QATIF', 'TRIP TO RAS TANURA', 'TRIP TO ABQAIQ',
    'TRIP TO JUBAIL', 'TRIP TO FADHLI', 'TRIP TO SHEDGUM', 'TRIP TO AIRPORT (HASSA/HOFUF)',
    'TRIP TO ABO ALI ISLAND', 'TRIP TO AINDAR', 'TRIP TO BARRI', 'TRIP TO ABU HADRIYA',
    'TRIP TO KARSANIYA', 'TRIP TO UTHMANIYAH', 'TRIP TO UDHALIYAH', 'TRIP TO MANIFAH',
    'TRIP TO SAFANIYA', 'TRIP TO TANAJIB', 'TRIP TO NARIYA', 'TRIP TO HAWIYAH',
    'TRIP TO SALWA', 'TRIP TO KHAFJI', 'TRIP TO HARMALIYAH', 'TRIP TO KHURAIS',
    'TRIP TO HARADH', 'TRIP TO TINAT', 'TRIP TO GAZAL', 'TRIP TO MADRIK',
    'TRIP TO RIYADH', 'TRIP TO HAFER ALBATEN', 'TRIP TO AL KHARJ', 'TRIP TO HAWTAH',
    'TRIP TO NAJAN', 'TRIP TO NAYM', 'TRIP TO SHAYBAH', 'TRIP TO JEDDAH',
    'TRIP TO TURAIF / SKAKA / JALAMED', 'TRIP TO NAJRAN', 'TRIP TO YANBU',
    'TRIP TO JIZAN', 'TRIP TO DUBA',
];

export default function Services() {
    return (
        <>
            <PageHero
                title="Our Services — Get a Quote"
                subtitle="Private taxi and executive car services from 47+ cities across Saudi Arabia to Bahrain. Contact us for an instant fixed price."
                label="SERVICES"
            />
            <div className="section">
                <div className="container" style={{ maxWidth: '800px' }}>

                    {/* Main CTA */}
                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem' }}>Get an Instant Fixed Price</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                            Tell us your pickup city, vehicle type, and travel date — we'll reply with your fixed price in seconds. Toll included, no hidden fees.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link
                                href="https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20service."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '1rem' }}
                            >
                                GET QUOTE ON WHATSAPP
                            </Link>
                            <Link
                                href="tel:+966569487569"
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

                    {/* Destinations List */}
                    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.5rem' }}>All Destinations Covered — Request a Quote</h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                <thead>
                                    <tr style={{ background: '#0a0a0a', color: '#fff', textAlign: 'left' }}>
                                        <th style={{ padding: '12px 16px', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Destination / Route</th>
                                        <th style={{ padding: '12px 16px', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>Get Quote</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {destinations.map((dest, i) => (
                                        <tr key={dest} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                                            <td style={{ padding: '10px 16px', fontWeight: '600', fontFamily: '"Courier New", Courier, monospace', fontSize: '0.85rem' }}>{dest}</td>
                                            <td style={{ padding: '10px 16px', textAlign: 'center' }}>
                                                <Link
                                                    href={`https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20${encodeURIComponent(dest.toLowerCase())}.`}
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

                    <div style={{ background: '#f9f9f9', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.875rem', color: '#555', margin: 0 }}>
                            All prices are all-inclusive — causeway toll, fuel, and driver. <strong>No hidden charges.</strong>
                        </p>
                    </div>

                </div>
            </div>

            <TrustBar clientsServed="10,000+" />

            <div className="section">
                <div className="container">
                    <LastUpdated date="February 19, 2026" />
                </div>
            </div>
        </>
    );
}
