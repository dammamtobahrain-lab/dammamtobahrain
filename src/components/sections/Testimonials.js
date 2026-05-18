import Link from "next/link";

const testimonials = [
    {
        name: "Ahmed Al-Zahrani",
        role: "Senior Project Manager",
        company: "Aramco Hub",
        text: "The most reliable cross-border service I've used. The VIP lane access saved me 90 minutes on a busy Thursday evening. The Lexus was spotless and the driver was extremely professional.",
        stars: 5,
        date: "March 24, 2026",
        image: "/executive_testimonial_1_1775232929785.png"
    },
    {
        name: "Sarah Jenkins",
        role: "Independent Consultant",
        company: "Bahrain Financial Harbour",
        text: "Moving to Dammam meant weekly travel to Bahrain. This service has been a lifesaver. Fixed pricing means no surprises, and booking through WhatsApp is incredibly convenient.",
        stars: 5,
        date: "April 1, 2026",
        image: "/executive_testimonial_2_1775233060238.png"
    }
];

export default function Testimonials() {
    return (
        <section className="section" style={{ background: 'var(--color-background-alt)', padding: '4rem 0' }}>
            <div className="container">
                <div className="section-title">
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>EXECUTIVE REVIEWS</span>
                    <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginTop: '0.5rem' }}>Trusted by <span className="text-gradient-gold">5,000+ Regular Passengers</span></h2>
                    <p style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '0.875rem' }}>Join the growing list of travelers who have chosen safety and reliability for their Saudi-Bahrain crossing.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {testimonials.map((t, index) => (
                        <div key={index} style={{ 
                            background: '#fff', 
                            padding: '2rem', 
                            borderRadius: '16px', 
                            boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
                            border: '1px solid var(--color-border)',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#e8f5e9', color: '#2e7d32', padding: '4px 10px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ fontSize: '0.9rem' }}>✓</span> VERIFIED TRIP
                            </div>
                            
                            <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-background-alt)', boxShadow: '0 8px 15px rgba(0,0,0,0.08)' }}>
                                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>{t.name}</h4>
                                    <p style={{ margin: '1px 0 6px 0', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: '600' }}>{t.role} @ {t.company}</p>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        {[...Array(t.stars)].map((_, i) => (
                                            <span key={i} style={{ color: '#FFD700', fontSize: '1rem' }}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#4b5563', fontStyle: 'italic', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                "{t.text}"
                            </p>
                            
                            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: '700' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <img src="https://www.gstatic.com/images/branding/product/2x/google_24dp.png" alt="Google" style={{ width: '14px', height: '14px' }} />
                                    PUBLISHED ON GOOGLE
                                </span>
                                <span>{t.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', background: '#fff', padding: '2rem', borderRadius: '16px', display: 'inline-block', width: '100%', maxWidth: '800px', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ margin: 0, fontWeight: '800', fontSize: '1.35rem', color: 'var(--color-primary)' }}>4.9/5</p>
                            <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>SERVICE EXCELLENCE</p>
                        </div>
                        <div style={{ height: '40px', width: '1px', background: 'var(--color-border)' }} className="desktop-only"></div>
                        <div>
                            <div style={{ display: 'flex', gap: '3px', marginBottom: '0.25rem' }}>
                                {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: '#FFD700', fontSize: '1.25rem' }}>★</span>)}
                            </div>
                            <p style={{ margin: 0, fontWeight: '700', color: 'var(--color-text-main)', fontSize: '0.85rem' }}>Based on 1,500+ Verified User Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
