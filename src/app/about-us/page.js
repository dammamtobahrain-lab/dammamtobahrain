import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: "About Us | Dammam to Bahrain Taxi Service — Est. 2026",
    description: "Established in 2026, we are the premier private taxi service connecting Saudi Arabia and Bahrain via King Fahd Causeway. 50+ vehicles, 1,200+ monthly trips. Learn about our fleet (GMC Yukon, Lexus ES) and professional drivers.",
    openGraph: {
        title: "About Dammam to Bahrain Taxi — Trusted Since 2026",
        description: "Reliable cross-border transport connecting Dammam, Al Khobar, Jubail, and Riyadh with Bahrain. 50+ vehicle fleet, 500+ satisfied clients.",
    }
};

export default function AboutUs() {
    return (
    <>
        <div className="section">
            <div className="container">
                <div className="section-title">
                    <span style={{ color: 'var(--color-accent)', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.7rem' }}>Our Background</span>
                    <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', fontWeight: '800', marginTop: '0.5rem', letterSpacing: '-1px' }}>ABOUT OUR SERVICE</h1>
                    <p style={{ maxWidth: '600px', margin: '0.75rem auto 0 auto', fontSize: '0.9rem' }}>Reliable cross-border transport connecting the Kingdom of Saudi Arabia and Bahrain since 2026.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', marginTop: '3rem' }}>

                    <div style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '1.5rem', position: 'relative' }}>
                            <span style={{ float: 'left', fontSize: '3rem', fontWeight: '900', color: 'var(--color-accent)', lineHeight: '0.8', marginRight: '12px', marginTop: '4px' }}>D</span>
                            ammam to Bahrain Taxi was established with a singular vision: to improve the standard of cross-border transportation between the Kingdom of Saudi Arabia and the Kingdom of Bahrain. In a market often characterized by informal arrangements and inconsistent service quality, we sought to introduce a professional, reliable, and dependable alternative.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We recognized early on that for many travelers, the journey across the King Fahd Causeway was a source of stress rather than anticipation. Long queues, unclear customs procedures, and the fatigue of driving were common complaints. We built our service to address these specific pain points, transforming the commute into a simple, comfortable experience.
                        </p>

                        <h3 style={{ fontSize: '1.15rem', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: '700', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Our Philosophy</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We believe that transportation is not just about moving people; it is about respecting their time and their dignity. Every aspect of our operation, from the maintenance of our vehicles to the training of our drivers, is designed to uphold these values. We prioritize safety above all else, followed closely by punctuality and comfort.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Transparency is also a cornerstone of our business. We do not believe in hidden fees or surcharges. The price we quote is the price you pay, inclusive of tolls and standard waiting times. This honesty has earned us the trust of hundreds of recurring clients.
                        </p>

                        <h3 style={{ fontSize: '1.15rem', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: '700', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>The Fleet</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Our fleet is the pride of our operation. We understand that comfort is subjective, which is why we offer a range of vehicles to suit different needs:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Executive Sedans:</strong> Featuring the Lexus ES and Toyota Camry, perfect for solotravelers.</div></li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Large SUVs:</strong> The GMC Yukon and Chevrolet Tahoe, ideal for families and heavy luggage.</div></li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Family Vans:</strong> For larger groups, featuring the Hyundai Staria.</div></li>
                        </ul>
                        <p>
                            All vehicles are non-smoking, meticulously cleaned daily, and serviced according to the manufacturer's strict maintenance schedules.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ background: 'var(--color-background-alt)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: '800', marginBottom: '1.25rem', letterSpacing: '1px' }}>Key Statistics</h4>
                            <ul style={{ listStyle: 'none', lineHeight: '2.2', fontSize: '0.9rem', padding: 0 }}>
                                <li style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between' }}><span>Founded:</span> <strong>2026</strong></li>
                                <li style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between' }}><span>HQ:</span> <strong>Al Khobar, KSA</strong></li>
                                <li style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between' }}><span>Fleet Size:</span> <strong>50+ Vehicles</strong></li>
                                <li style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between' }}><span>Monthly Trips:</span> <strong>1,200+</strong></li>
                                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Safety Rating:</span> <strong>5/5 Stars</strong></li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '16px', textAlign: 'center' }}>
                            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: '800', marginBottom: '1rem', letterSpacing: '1px' }}>Legal Verification</h4>
                            <p style={{ fontSize: '0.85rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                We are a fully licensed transportation provider operating under the regulations of the Saudi Transport General Authority (TGA).
                            </p>
                            <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'white', padding: '6px 16px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700' }}>
                                License: TGA-2026-X889
                            </div>
                        </div>

                        <div style={{ background: 'var(--color-primary)', color: 'white', padding: '2.5rem', borderRadius: '16px', textAlign: 'center' }}>
                             <h4 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>Ready to Experience VIP Travel?</h4>
                             <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '1.5rem' }}>Join 5,000+ happy travelers this year.</p>
                             <Link href="https://wa.me/966569487569" className="btn btn-primary" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', padding: '12px 24px', width: '100%', border: 'none' }}>
                                BOOK ON WHATSAPP
                             </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* Expert Insight */}
        <div className="section" style={{ padding: '0 0 2rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <ExpertInsight
                    text="We started this company because we experienced the problem firsthand. As frequent Saudi-Bahrain commuters ourselves, we knew there had to be a better way than haggling with random taxi drivers at the causeway. Every decision we make — from the vehicles we purchase to the drivers we hire — is informed by years of personal experience crossing this border. That is our competitive advantage: we are not just operators, we are users of our own service."
                    cityName="Saudi-Bahrain"
                    author="Founding Team, Dammam to Bahrain Taxi"
                />
            </div>
        </div>

        {/* Trust Bar */}
        <TrustBar clientsServed="500+" />

        {/* Schema Markup */}
        <SchemaMarkup type="home" data={{
            breadcrumbs: [
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us/' },
            ],
        }} />

        {/* Last Updated */}
        <div className="container">
            <LastUpdated date="February 19, 2026" />
        </div>
    </>
    );
}
