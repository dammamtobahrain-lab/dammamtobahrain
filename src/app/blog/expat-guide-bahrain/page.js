import Link from 'next/link';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import LastUpdated from '@/components/sections/LastUpdated';

export const metadata = {
    title: 'Expat Guide: Living in Eastern Province & Traveling to Bahrain 2026',
    description: 'Complete expat guide for Saudi Aramco, SABIC, and international company employees living in the Eastern Province. How to travel to Bahrain, visa info, weekend tips.',
    alternates: { canonical: '/blog/expat-guide-bahrain/' },
};

export default function ExpatGuidePage() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Blog', href: '/blog/' },
                    { name: 'Expat Guide to Bahrain', href: '/blog/expat-guide-bahrain/' },
                ],
            }} />

            <div style={{ background: '#0a0a0a', color: 'white', padding: '4rem 0 3rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>EXPAT RESOURCE</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '800', margin: '0.75rem 0 1rem', color: 'white', lineHeight: 1.2 }}>
                        Eastern Province Expat Guide: Traveling to Bahrain 2026
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        For Aramco, SABIC, and international company employees living in Dhahran, Khobar, and Jubail — your complete guide to weekend trips and regular Bahrain travel.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <article style={{ fontSize: '0.95rem', lineHeight: '1.75', color: '#333' }}>

                        <div style={{ background: '#eff6ff', border: '1px solid #93c5fd', borderRadius: '12px', padding: '1.25rem', marginBottom: '2rem' }}>
                            <strong>👋 New to the Eastern Province?</strong> Bahrain is your nearest leisure hub — 45 minutes from Al Khobar and about as close as central London is to most English suburbs. This guide covers everything a new expat needs to know.
                        </div>

                        <h2>Why Bahrain is the Eastern Province Expat's Weekend Destination</h2>
                        <p>
                            Ask any long-term expat in Dhahran or Khobar and they'll tell you: Bahrain is the release valve. It's where you go when you want a restaurant that serves what you're used to, a cinema showing films on the same day as London or New York, a beach with a bar, or simply a change of scenery from the compound. The island is small enough to navigate easily but diverse enough to feel different every visit.
                        </p>
                        <p>
                            Unlike flying to Dubai or Muscat, crossing to Bahrain costs almost nothing and takes under an hour on a good day. Most expat families do it monthly. Many do it every other weekend. Senior executives on short contracts do it every week — and book our service on a standing Thursday afternoon slot.
                        </p>

                        <h2>Visa Requirements for the Causeway Crossing</h2>
                        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                <thead>
                                    <tr style={{ background: '#0a0a0a', color: 'white' }}>
                                        <th style={{ padding: '10px 12px', textAlign: 'left' }}>Nationality</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'left' }}>Bahrain Entry</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'left' }}>Saudi Exit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['GCC nationals (Saudi, UAE, Kuwait, etc.)', 'Visa-free — national ID sufficient', 'No restrictions'],
                                        ['US, UK, EU, Australian passports', 'eVisa (online) or visa on arrival', 'Saudi iqama or valid visa required'],
                                        ['Most other nationalities', 'eVisa recommended (apply at evisa.nbr.gov.bh)', 'Saudi iqama or valid visa required'],
                                        ['Aramco/SABIC iqama holders', 'Same as nationality rules above', 'Iqama confirms Saudi residence'],
                                        ['Saudi Aramco camp residents (non-Saudi)', 'As per passport nationality', 'Iqama + exit/re-entry visa if applicable'],
                                    ].map(([nat, bh, ksa], i) => (
                                        <tr key={nat} style={{ borderBottom: '1px solid #eee', background: i % 2 ? '#fafafa' : 'white' }}>
                                            <td style={{ padding: '10px 12px', fontWeight: '600' }}>{nat}</td>
                                            <td style={{ padding: '10px 12px' }}>{bh}</td>
                                            <td style={{ padding: '10px 12px' }}>{ksa}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: '#888' }}>
                            ⚠️ Always verify current requirements at bahrain.bh/en/visitors. Rules change. This is not legal advice.
                        </p>

                        <h2>Top Areas to Visit in Bahrain (Expat Favorites)</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {[
                                { area: 'Juffair', desc: 'Nightlife, international restaurants, walking distance from US Naval Base. Popular with American expats.' },
                                { area: 'Adliya', desc: 'Art galleries, boutique restaurants, laid-back vibe. Best neighborhood for a long dinner.' },
                                { area: 'Seef District', desc: 'Shopping malls (City Centre, Seef Mall), hotels, Imax cinema. Family-friendly.' },
                                { area: 'Amwaj Islands', desc: 'Beachfront restaurants, marina, waterpark. 20 min from Manama. Great for families.' },
                                { area: 'Muharraq', desc: 'Old Bahrain, pearl diving heritage, traditional souq. UNESCO listed.' },
                                { area: 'Riffa / Sakhir', desc: 'Bahrain F1 Circuit, Royal Golf Club, desert landscape. Day trip from the city.' },
                            ].map(d => (
                                <div key={d.area} style={{ background: '#f9f9f9', border: '1px solid #eee', borderRadius: '10px', padding: '1rem' }}>
                                    <div style={{ fontWeight: '800', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{d.area}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#555' }}>{d.desc}</div>
                                </div>
                            ))}
                        </div>

                        <h2>The Thursday–Saturday Expat Routine</h2>
                        <p>
                            The dominant expat travel pattern on the causeway is: <strong>Thursday afternoon depart KSA, Saturday afternoon return.</strong> This matches the Saudi weekend (Friday–Saturday). For expats on a Western schedule who work Sunday–Thursday, the Thursday evening crossing is the primary window.
                        </p>
                        <p>
                            Thursday 4–8 PM is the single busiest two-hour window on the causeway. If your company lets you leave at 2–3 PM on Thursdays, you will avoid the worst of it. If you're leaving at 5 PM, factor in a potential 90-minute wait at the border.
                        </p>
                        <p>
                            Our regular expat clients typically book a <strong>standing weekly or bi-weekly slot</strong>. We hold the same driver, same time, same vehicle. Many Aramco employees have used us for 2–3 years on exactly this basis. Ask us about recurring booking arrangements.
                        </p>

                        <h2>Pickup from Aramco / SABIC / Royal Commission Areas</h2>
                        <p>
                            We pick up from all major compound and industrial areas in the Eastern Province:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Saudi Aramco Dhahran Camp</strong> — main gate coordination, driver will be at designated waiting area</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>KFUPM (King Fahd University)</strong> — main gate or designated campus pickup spots</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Jubail Royal Commission</strong> — RC residential areas, coordinate with your security office for gate access timing</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>SABIC Headquarters (Riyadh)</strong> — covered by our Riyadh long-distance service</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Al Khobar compounds</strong> (Bin Laden, Vinnell, etc.) — door-to-door pickup</li>
                        </ul>

                        <h2>What to Budget for a Bahrain Weekend (2026)</h2>
                        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                <thead>
                                    <tr style={{ background: '#0a0a0a', color: 'white' }}>
                                        <th style={{ padding: '10px 12px', textAlign: 'left' }}>Item</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'center' }}>Budget</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'center' }}>Mid-range</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'center' }}>Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Taxi from KSA (round trip)', '360 SAR', '560 SAR', '640 SAR'],
                                        ['Hotel (per night, 1-2 nights)', '250-350 BHD', '400-600 BHD', '700+ BHD'],
                                        ['Dining (per person, 2 days)', '60-80 BHD', '120-160 BHD', '200+ BHD'],
                                        ['Activities & shopping', '20-50 BHD', '80-150 BHD', '300+ BHD'],
                                        ['Total per couple', '~400 BHD', '~700 BHD', '~1,400+ BHD'],
                                    ].map(([item, budget, mid, premium], i) => (
                                        <tr key={item} style={{ borderBottom: '1px solid #eee', background: i % 2 ? '#fafafa' : 'white' }}>
                                            <td style={{ padding: '10px 12px', fontWeight: '600' }}>{item}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>{budget}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>{mid}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>{premium}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '12px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
                            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Book Your Next Bahrain Trip</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                                From Dhahran, Khobar, Jubail, and beyond. Fixed prices, verified drivers.
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/fare-calculator/" style={{ background: 'white', color: '#0a0a0a', padding: '11px 24px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '0.875rem' }}>
                                    Check Fares
                                </Link>
                                <Link href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '11px 24px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '0.875rem' }}>
                                    Book on WhatsApp
                                </Link>
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                            <h3 style={{ fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem' }}>Related Guides for Expats</h3>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.5 }}>
                                <li><Link href="/blog/visa-requirements/" style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>Visa & Iqama Rules for the Causeway Crossing →</Link></li>
                                <li><Link href="/blog/causeway-traffic-guide/" style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>Best Times to Cross the King Fahd Causeway →</Link></li>
                                <li><Link href="/blog/top-hotels-bahrain/" style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>Top Hotels in Bahrain — Driver Picks →</Link></li>
                                <li><Link href="/destinations/" style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>All Bahrain Destinations & Drop-Off Points →</Link></li>
                                <li><Link href="/services/weekend-getaway/" style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>Weekend Getaway Service →</Link></li>
                            </ul>
                        </div>

                        <LastUpdated date="May 19, 2026" />
                    </article>
                </div>
            </div>
        </>
    );
}
