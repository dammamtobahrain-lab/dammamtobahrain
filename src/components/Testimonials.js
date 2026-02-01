'use client';
import { useState } from 'react';

const testimonials = [
    {
        name: "Ahmed Al-Saeed",
        role: "Business Traveler",
        text: "Excellent service! The driver was punctual and the car was spotless. The border crossing was handled smoothly. Highly recommended."
    },
    {
        name: "Sarah Jenkins",
        role: "Tourist",
        text: "We booked a family trip from Bahrain to Al Khobar. The driver was very polite and helpful with our luggage. Safe driving all the way."
    },
    {
        name: "Mohammed F.",
        role: "Frequent Flyer",
        text: "I travel weekly between Dammam and Bahrain. This is by far the most reliable taxi service I've used. Luxury cars and great prices."
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>

                <div className="testimonial-container">
                    {testimonials.map((t, index) => (
                        <div key={index}
                            className="card glass-card"
                            style={{
                                minWidth: '300px',
                                flex: 1,
                                textAlign: 'center',
                                borderTop: '4px solid var(--primary)',
                                position: 'relative'
                            }}>
                            <div style={{
                                fontSize: '3rem',
                                color: 'var(--primary)',
                                opacity: 0.2,
                                position: 'absolute',
                                top: '10px',
                                left: '20px'
                            }}>“</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', marginTop: '1rem', position: 'relative', zIndex: 1 }}>"{t.text}"</p>
                            <h4 style={{ color: 'var(--primary-dark)', marginBottom: '0.2rem' }}>{t.name}</h4>
                            <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>{t.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
