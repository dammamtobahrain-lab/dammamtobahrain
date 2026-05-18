import Link from 'next/link';
import LocationsGrid from '@/components/LocationsGrid';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: "Corporate Taxi Accounts | Business Transport Saudi-Bahrain 2026",
    description: "Corporate transport solutions for companies in KSA and Bahrain. Monthly invoicing, priority causeway dispatch, executive chauffeur fleet. Serving Aramco, SABIC, and 50+ corporate clients.",
};

export default function CorporatePage() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="section-title">
                        <span style={{ color: 'var(--color-accent)', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.7rem' }}>B2B Logistics</span>
                        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', fontWeight: '800', marginTop: '0.5rem', letterSpacing: '-1px' }}>CORPORATE SOLUTIONS</h1>
                        <p style={{ maxWidth: '650px', margin: '0.75rem auto 0 auto', fontSize: '0.9rem' }}>Tailored cross-border mobility for the Gulf's leading enterprises.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginTop: '3rem' }}>

                        <div style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Business between the Eastern Province and Bahrain is the economic engine of the region. We understand that for corporate clients, reliability is not a luxury—it is an operational necessity. We offer customized transport solutions for companies requiring frequent cross-border mobility.
                            </p>

                            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>The Corporate Advantage</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                By opening a corporate account with Dammam to Bahrain Taxi, your organization gains access to:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
                                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Monthly Invoicing:</strong> Consolidated billing with detailed trip logs for clean audits.</div></li>
                                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Priority Dispatch:</strong> Corporate bookings take precedence during peak causeway hours.</div></li>
                                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Fixed Rate Cards:</strong> Inflation-proof pricing locked for your contract duration.</div></li>
                                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>VIP Lane Access:</strong> Expedited crossing for eligible executives.</div></li>
                            </ul>

                            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Open an Account</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                To onboard your company, please provide your Commercial Registration (CR) and an authorized signatory letter. Our sales team will finalize your custom rate card within 24 hours.
                            </p>
                            
                            <div style={{ background: 'var(--color-background-alt)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: '800', marginBottom: '0.5rem' }}>IMMEDIATE BUSINESS REQUEST?</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Book a guest trip instantly while your account is being processed.</p>
                                <Link href="https://wa.me/966569487569" className="btn btn-primary" style={{ padding: '12px 24px' }}>BOOK BUSINESS RIDE</Link>
                            </div>
                        </div>

                        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', height: 'fit-content' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', textAlign: 'center', marginBottom: '1.5rem' }}>Corporate Inquiry</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Company Name</label>
                                    <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Contact Person</label>
                                    <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Business Email</label>
                                    <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.9rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Volume Per Month</label>
                                    <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.9rem', appearance: 'none' }}>
                                        <option>1 - 5 Trips</option>
                                        <option>5 - 20 Trips</option>
                                        <option>20+ Trips</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '14px', borderRadius: '8px', border: 'none' }}>REQUEST PROPOSAL</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* Expert Insight */}
            <div className="section" style={{ padding: '0 0 2rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <ExpertInsight
                        text="We serve over 50 corporate clients across the Eastern Province, from multinational energy companies to boutique consultancy firms. The key to corporate transport is consistency — same high standard, every single trip. Our corporate clients value our monthly invoicing system, which eliminates petty cash hassles and provides clean audit trails for expense reporting."
                        cityName="Corporate"
                        author="Corporate Sales Manager, Dammam to Bahrain Taxi"
                    />
                </div>
            </div>

            <TrustBar clientsServed="50+ companies" />

            <LocationsGrid />

            <SchemaMarkup type="service" data={{
                serviceName: 'Corporate Taxi Service',
                serviceDescription: 'Corporate transport solutions with monthly invoicing, priority dispatch, and executive fleet access.',
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Corporate', href: '/corporate/' },
                ],
            }} />

            <div className="container">
                <LastUpdated date="February 19, 2026" />
            </div>
        </>
    );
}
