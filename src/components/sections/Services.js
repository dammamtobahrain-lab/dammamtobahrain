import Link from "next/link";
import { Building2, Plane, Users, GraduationCap, ArrowRight, ShieldCheck, Clock, Map, CheckCircle2 } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, badge, linkText }) => (
    <div className="card" style={{ 
        padding: '2rem', 
        borderRadius: '20px', 
        border: '1px solid #f0f0f0', 
        background: '#fff',
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
    }}>
        <div>
            {badge && <span style={{ background: 'var(--color-primary)', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '1px', display: 'inline-block', marginBottom: '1.25rem' }}>{badge}</span>}
            <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', width: '50px', height: '50px', background: 'var(--color-background-alt)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={28} />
            </div>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', fontWeight: '700' }}>{title}</h3>
            <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '0.85rem', marginBottom: '1.25rem' }}>{description}</p>
        </div>
        <Link href="https://wa.me/966569487569" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--color-primary)', 
            fontWeight: '800', 
            fontSize: '0.9rem',
            textDecoration: 'none'
        }} className="hover-scale">
            {linkText} <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
    </div>
);

export default function Services() {
    return (
        <section className="section" style={{ background: '#fcfcfc', padding: 'clamp(2rem, 8vw, 4rem) 0' }}>
            <div className="container">
                <div className="section-title" style={{ marginBottom: '2.5rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '0.8rem' }}>Tailored Solutions</span>
                    <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)', fontWeight: '800', marginTop: '0.75rem', letterSpacing: '-0.5px' }}>Cross-Border Chauffeur <span className="text-gradient-gold">Experience</span></h2>
                    <p style={{ maxWidth: '750px', margin: '0.75rem auto 0 auto', fontSize: '0.85rem', color: '#4b5563' }}>Expertise you can rely on for airport arrivals, corporate delegacy, and regular cross-border travel.</p>
                </div>

                {/* Primary Services Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    <ServiceCard 
                        icon={Plane} 
                        title="Airport VIP Protocol" 
                        badge="DMM / BAH"
                        description="Real-time flight tracking & terminal pickup. Your chauffeur waits with a personalized nameplate, handling all luggage and border formalities from arrivals to your hotel."
                        linkText="Book Airport Transfer"
                    />

                    <ServiceCard 
                        icon={Building2} 
                        title="Executive & B2B" 
                        description="Professional billing, punctual site visits, and bilingual chauffeurs for executive teams moving between Manama, Dhahran, and Riyadh offices."
                        linkText="Open Corporate Account"
                    />

                    <ServiceCard 
                        icon={Users} 
                        title="Family Crossings" 
                        description="Spacious GMC Yukon XL & Lexus VIP SUVs equipped with ISOFIX child seats and high-capacity space for up to 7 passengers and luggage."
                        linkText="Book Premium SUV"
                    />
                </div>

                {/* Why Book With Us Section (Visual Reassurance) */}
                <div style={{ background: 'var(--color-primary)', color: 'white', padding: 'clamp(2rem, 6vw, 4rem)', borderRadius: '32px', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.2)' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--color-accent)', borderRadius: '50%', opacity: 0.1, filter: 'blur(100px)' }}></div>
                    
                    <div className="section-title" style={{ textAlign: 'left', margin: '0 0 4rem 0' }}>
                        <span style={{ color: 'var(--color-accent)', fontWeight: '900', letterSpacing: '2px', fontSize: '0.8rem' }}>BEYOND TAXI APPS</span>
                        <h2 style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.85rem)', fontWeight: '800', marginTop: '0.75rem' }}>The Border-Crossing <span className="text-gradient-gold">Elite Standard</span></h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
                        {[
                            { icon: Map, title: "VIP Causeway Protocol", text: "Our chauffeurs know every shortcut and border officer, ensuring a 40% faster crossing than the average driver." },
                            { icon: ShieldCheck, title: "No Surprises, Guaranteed", text: "Total cost transparency. Absolutely no bridge tolls, parking fees, or fuel surcharges at the end of your trip." },
                            { icon: Clock, title: "24/7 Reliability", text: "Emergency airport dash or scheduled student commute—we are the only service that never cancels, even on holiday peaks." },
                            { icon: CheckCircle2, title: "Pay after reaching destination", text: "Zero risk. We don't ask for a single riyal until you are safely at your final drop-off point in Saudi or Bahrain." }
                        ].map((item, i) => (
                             <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ color: 'var(--color-accent)', width: '45px', height: '45px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <item.icon size={24} strokeWidth={2.5} />
                                </div>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'white' }}>{item.title}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.5', fontSize: '0.85rem', margin: 0 }}>{item.text}</p>
                             </div>
                        ))}
                    </div>
                    
                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Link href="https://wa.me/966569487569" className="btn btn-primary" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', padding: '14px 36px', fontSize: '0.9rem', fontWeight: '700', borderRadius: '10px' }}>
                             UPGRADE YOUR JOURNEY — MESSAGE US 24/7
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
