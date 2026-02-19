import Link from "next/link";
import { Quote } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="section" style={{ backgroundColor: '#fafafa', paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <span style={{
                        display: 'block',
                        textTransform: 'uppercase',
                        fontSize: '0.875rem',
                        letterSpacing: '0.1em',
                        color: 'var(--color-accent)',
                        marginBottom: '0.5rem',
                        fontWeight: '600'
                    }}>Client Feedback</span>
                    <h2>Trusted by Business Professionals</h2>
                </div>

                <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', textAlign: 'left' }}>
                    {/* Testimonial 1 */}
                    <div className="card" style={{ padding: '3rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: 'white' }}>
                        <Quote size={40} color="var(--color-accent)" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>
                            "The most reliable service for my weekly commute. The drivers are professional, punctuality is unmatched, and the cars are pristine."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#eee' }}></div>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem', fontSize: '1rem', fontWeight: 'bold' }}>Sarah Jenkins</h4>
                                <p style={{ marginBottom: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Executive @ Aramco</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="card" style={{ padding: '3rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: 'white' }}>
                        <Quote size={40} color="var(--color-accent)" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>
                            "Booking is seamless via WhatsApp. I never have to worry about the causeway traffic; they know exactly when to leave."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#eee' }}></div>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem', fontSize: '1rem', fontWeight: 'bold' }}>Mohammed Al-Fayed</h4>
                                <p style={{ marginBottom: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Business Consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
