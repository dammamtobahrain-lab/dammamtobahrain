import { ShieldCheck, Map, Clock, Zap, Wallet, Users, Info, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

const RiskRemovalBlock = () => (
     <div style={{ background: '#FFFBE6', border: '1px solid #FFE58F', padding: '2rem', borderRadius: '16px', margin: '2rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '100px', height: '100px', background: '#FFD700', borderRadius: '50%', opacity: 0.15, filter: 'blur(40px)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', position: 'relative' }}>
            <Wallet size={32} color="#856404" />
            <h3 style={{ fontSize: '1rem', color: '#856404', fontWeight: '800', margin: 0, letterSpacing: '-0.3px' }}>PAY UPON ARRIVAL — ZERO PREPAYMENT</h3>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#856404', fontWeight: '600', lineHeight: '1.6', margin: 0 }}>
             Forget hidden causeway bridge fees or cash negotiation. Our pricing is fixed, all-inclusive, and **we do not ask for a single riyal until you are safely at your final drop-off point**.
        </p>
     </div>
);

const ComparisonTable = () => (
    <div style={{ margin: '4rem 0', background: 'white', border: '1px solid #f0f0f0', borderRadius: '24px', padding: '2.5rem 1.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.03)', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: '950', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Stop Settling for Less</span>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: '800', marginTop: '0.75rem', letterSpacing: '-0.75px' }}>DMM-BAH Chauffeur vs. <span className="text-gradient-gold">Standard Apps</span></h3>
            <p style={{ maxWidth: '650px', margin: '1rem auto 0 auto', fontSize: '0.875rem', color: '#6b7280' }}>Why the executive travel elite avoid Uber & Careem for the Saudi-Bahrain corridor.</p>
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="mobile-only" style={{ textAlign: 'center', marginBottom: '1rem', background: '#f8f8f8', padding: '0.5rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', color: '#666' }}>
            ← Swipe to view full comparison →
        </div>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                <thead>
                    <tr style={{ borderBottom: '3px solid #f0f0f0' }}>
                        <th style={{ padding: '2rem', textAlign: 'left', fontSize: '0.95rem', color: '#999', fontWeight: '950' }}>FEATURE</th>
                        <th style={{ padding: '2rem', textAlign: 'center', background: 'var(--color-primary)', color: 'white', borderRadius: '20px 20px 0 0' }}>DMM TO BAHRAIN VIP</th>
                        <th style={{ padding: '2rem', textAlign: 'center', fontWeight: '900', color: '#888' }}>UBER / CAREEM</th>
                        <th style={{ padding: '2rem', textAlign: 'center', fontWeight: '900', color: '#888' }}>LOCAL TAXI</th>
                    </tr>
                </thead>
                <tbody style={{ fontWeight: '600', fontSize: '0.875rem', color: '#333' }}>
                    <tr style={{ borderBottom: '1px solid #f8f8f8' }}>
                        <td style={{ padding: '2rem' }}>Causeway Priority</td>
                        <td style={{ padding: '2rem', textAlign: 'center', color: '#2e7d32' }}>VIP Clearance protocol</td>
                        <td style={{ padding: '2rem', textAlign: 'center', color: '#d32f2f' }}>Basic Driver Support Only</td>
                        <td style={{ padding: '2rem', textAlign: 'center' }}>Varies Significantly</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f8f8f8' }}>
                        <td style={{ padding: '2rem' }}>Pricing Integrity</td>
                        <td style={{ padding: '2rem', textAlign: 'center', color: '#2e7d32' }}>Fixed, All-Inclusive Rate</td>
                        <td style={{ padding: '2rem', textAlign: 'center', color: '#d32f2f' }}>Surge Pricing & Toll Surcharge</td>
                        <td style={{ padding: '2rem', textAlign: 'center' }}>Requires Heavy Negotiation</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f8f8f8' }}>
                        <td style={{ padding: '2rem' }}>Border Wait Delay</td>
                        <td style={{ padding: '2rem', textAlign: 'center', color: '#2e7d32' }}>Zero Extra Cost for Border Wait</td>
                        <td style={{ padding: '2rem', textAlign: 'center', color: '#d32f2f' }}>May Cancel During Wait Time</td>
                        <td style={{ padding: '2rem', textAlign: 'center' }}>Inconsistent Reliability</td>
                    </tr>
                    <tr>
                         <td style={{ padding: '2rem' }}>Payment Safety</td>
                        <td style={{ padding: '2rem', textAlign: 'center', background: 'var(--color-primary)', color: 'white', borderRadius: '0 0 20px 20px' }}>Pay Only After Destination Reached</td>
                        <td style={{ padding: '2rem', textAlign: 'center' }}>Pre-charged Credit Card</td>
                        <td style={{ padding: '2rem', textAlign: 'center' }}>Immediate Cash Only</td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
);

const CrossingSteps = () => (
    <div style={{ margin: '4rem 0' }}>
         <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.5px' }}>Step-by-Step Crossing Process</h3>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
                { title: "Point of Origin", text: "Chauffeur picks you up directly from DMM Airport, Riyadh hotel, or residence. Flight monitoring handles all delays.", icon: Zap },
                { title: "The Causeway", text: "You stay in the car. Chauffeur handles the causeway toll (already paid) and aligns for the VIP clearance protocol.", icon: Map },
                { title: "Point of Entry", text: "The chauffeur presents your passport/residency. You remain comfortably in the climate-controlled Lexus/Yukon.", icon: ShieldCheck },
                { title: "Final Destination", text: "Door-to-door drop off in Manama, Juffair, or Seef without a single extra halala in fees.", icon: CheckCircle2 }
            ].map((step, i) => (
                <div key={i} style={{ border: '1px solid #eee', padding: '2rem', borderRadius: '16px', transition: 'all 0.3s ease', background: 'white' }} className="hover-scale">
                    <div style={{ width: '50px', height: '50px', background: 'var(--color-background-alt)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        <step.icon size={28} />
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.5rem' }}>{i + 1}. {step.title}</h4>
                    <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.85rem', margin: 0 }}>{step.text}</p>
                </div>
            ))}
         </div>
    </div>
);

export default function SEOContent() {
    return (
        <section className="section" style={{ background: '#fff', padding: '5rem 0' }}>
            <div className="container">
                
                <div className="responsive-grid-2-1" style={{ alignItems: 'flex-start' }}>
                    
                    {/* Left Side: Long-tail Targeting & Expert Advice */}
                    <div>
                        <span style={{ color: 'var(--color-primary)', fontWeight: '950', fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Expert Border Logistics</span>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '800', marginTop: '1rem', lineHeight: '1.15', letterSpacing: '-1px' }}>
                            Dammam to Bahrain <br /><span className="text-gradient-gold">Taxi Price Guide 2026</span>
                        </h2>
                        
                        <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.7', margin: '1.5rem 0', fontWeight: '500' }}>
                             Find the most reliable **Dammam to Bahrain taxi prices** for your next cross-border journey. Whether you are traveling from **DMM Airport** or **Al Khobar**, join 5,000+ travelers who choose us for stress-free Saudi-Bahrain transfers every year.
                        </p>

                        <div style={{ display: 'grid', gap: '3rem' }}>
                            {[
                                { icon: Clock, title: "Travel Time: Saudi to Bahrain", text: "Average crossing times range from 45 minutes (weekday off-peak) to 120 minutes during Thu/Sat peak hours. Our chauffeurs use live traffic status for the fastest crossing." },
                                { icon: Info, title: "Do I Have to Get Out of the car?", text: "No. You remain in the climate-controlled luxury of the vehicle. Our chauffeurs handle all causeway toll protocols and guide you through the point of entry formalities." },
                                { icon: ShieldCheck, title: "Passport & Document Requirements", text: "Citizens and GCC residents cross seamlessly with valid national IDs. International passport holders from US, UK, and EU easily receive Bahrain eVisa support via our team." }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1.25rem', padding: '1.25rem 0', borderBottom: '1px solid #f0f0f0' }}>
                                    <div style={{ color: 'var(--color-primary)', flexShrink: 0 }}><item.icon size={28} strokeWidth={2.5} /></div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.3px' }}>{item.title}</h4>
                                        <p style={{ color: '#666', lineHeight: '1.65', fontSize: '0.875rem', margin: 0 }}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: High-Conversion Reassurance */}
                    <div>
                        <RiskRemovalBlock />
                        
                        <div style={{ background: 'var(--color-primary)', color: 'white', padding: '3rem', borderRadius: '32px', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden' }}>
                             <div style={{ position: 'absolute', top: '-15%', left: '-15%', width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--color-accent) 0%, transparent 100%)', zIndex: -1, opacity: 0.15, filter: 'blur(80px)' }}></div>
                             <h3 style={{ fontSize: '1.15rem', color: 'white', fontWeight: '800', marginBottom: '1.25rem', letterSpacing: '-0.3px' }}>Elite Chauffeur Guarantee</h3>
                             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '1rem' }}><CheckCircle2 size={24} color="var(--color-accent)" strokeWidth={3} /><strong>24/7 Availability</strong> for Arrivals</li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '1rem' }}><CheckCircle2 size={24} color="var(--color-accent)" strokeWidth={3} /><strong>Zero Surcharge</strong> for Border Delays</li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '1rem' }}><CheckCircle2 size={24} color="var(--color-accent)" strokeWidth={3} />Premium GMC & Lexus VIP Fleet Only</li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '1rem' }}><CheckCircle2 size={24} color="var(--color-accent)" strokeWidth={3} />Bilingual Drivers (Arabic/English)</li>
                             </ul>
                             <Link href="https://wa.me/966569487569" className="pulse-btn" style={{ display: 'block', padding: '14px 28px', textAlign: 'center', background: 'var(--color-accent)', color: 'var(--color-primary)', fontWeight: '700', borderRadius: '10px', fontSize: '0.9rem', textDecoration: 'none' }}>
                                 BOOK NOW — PAY AT DESTINATION →
                             </Link>
                        </div>

                        <div style={{ marginTop: '2.5rem', padding: '1.5rem', border: '2px solid #f8f9fa', borderRadius: '16px' }}>
                             <div style={{ display: 'flex', gap: '12px', color: '#856404', marginBottom: '0.75rem', alignItems: 'center' }}>
                                 <AlertCircle size={24} strokeWidth={3} />
                                 <p style={{ margin: 0, fontWeight: '950', fontSize: '1rem' }}>URGENCY ALERT:</p>
                             </div>
                             <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600', color: '#666', lineHeight: '1.55' }}>
                                 Saudi-Bahrain peak hours (Thu PM / Sat PM) are filling fast. Secure your chauffeur 4-6 hours in advance for the fastest crossing.
                             </p>
                        </div>
                    </div>

                </div>

                <CrossingSteps />

                <ComparisonTable />

            </div>
        </section>
    );
}
