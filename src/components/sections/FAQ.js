"use client";

import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const Objections = [
    {
        question: "What if my flight is delayed?",
        answer: "No stress. We monitor all arrival times at DMM and BAH. Your chauffeur will adjust the pickup time automatically, ensuring they are there when you land, with no extra waiting fees."
    },
    {
        question: "Do I need to handle my own visa?",
        answer: "We guide you through it. For most GCC residents, it's instant. For international travelers, we assist with the 'Visa on Arrival' process at the King Fahd Causeway to ensure a smooth crossing."
    },
    {
        question: "How do I pay?",
        answer: "We accept all major credit cards, cash (SAR/BHD), and corporate accounts. You can choose to pay online during booking or directly to the driver."
    },
    {
        question: "Is the vehicle private?",
        answer: "Absolutely. All our bookings are private transfers. The vehicle is exclusively for you and your party, ensuring maximum privacy and comfort."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section" style={{ background: '#fafafa' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-title">
                    <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Peace of Mind</span>
                    <h2 style={{ marginBottom: '2rem' }}>Common Questions Resolved</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {Objections.map((item, i) => (
                        <div key={i} style={{ background: 'white', borderRadius: '8px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <button
                                onClick={() => toggle(i)}
                                style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', outline: 'none' }}
                            >
                                <span style={{ fontSize: '1.1rem', fontWeight: '600', color: openIndex === i ? 'var(--color-primary)' : 'var(--color-text-main)' }}>{item.question}</span>
                                {openIndex === i ? <Minus size={20} color="var(--color-accent)" /> : <Plus size={20} color="var(--color-text-muted)" />}
                            </button>

                            {openIndex === i && (
                                <div className="animate-fade-up" style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.6', animationDuration: '0.3s' }}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
