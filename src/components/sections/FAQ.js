"use client";

import Link from "next/link";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { useState } from "react";

const Objections = [
    {
        question: "Is the King Fahd Causeway open 24/7?",
        answer: "Yes, the border is operational 24 hours a day, 7 days a week. Our chauffeurs are available around the clock for late-night airport transfers or early-morning business commutes."
    },
    {
        question: "How long does the Saudi-Bahrain border crossing actually take?",
        answer: "On average, it takes 45 to 60 minutes. During weekends (Thursday evening to Saturday night) or public holidays, it can take 2-3 hours. Our drivers monitor traffic and immigration queues in real-time to advise on the best departure times."
    },
    {
        question: "Do you provide child car seats for families?",
        answer: "Yes! Safety is our priority. We provide ISOFIX-compliant child seats and boosters upon request at no extra charge. Please mention this during your WhatsApp booking."
    },
    {
        question: "What documents do I need to cross from Saudi to Bahrain?",
        answer: "GCC citizens only need their National ID. Residents need a valid Saudi Iqama and an Exit/Re-entry visa. Many international travelers can get a Bahraini visa-on-arrival or eVisa at the causeway. We help guide you through the process."
    },
    {
        question: "How much luggage can your vehicles carry?",
        answer: "Our Lexus ES sedans fit up to 2 large suitcases. For families or business teams, our GMC Yukon SUVs (XL) can accommodate 6 passengers and up to 8 large pieces of luggage comfortably."
    },
    {
        question: "Is there an extra charge for King Fahd Airport (DMM) pickup?",
        answer: "No hidden fees! Our DMM Airport to Bahrain rates (starting at 350 SAR) are all-inclusive, covering meet-and-greet service, 1 hour of free flight delay waiting, and all causeway tolls."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section" style={{ background: '#fcfcfc', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-title">
                    <span style={{ display: 'block', color: 'var(--color-primary)', fontWeight: '900', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>LOGISTICS & PLANNING</span>
                    <h2 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: '800' }}>Smooth Your <span className="text-gradient-gold">Saudi-Bahrain Crossing</span></h2>
                    <p style={{ maxWidth: '650px', margin: '0 auto 2.5rem auto', fontSize: '0.85rem' }}>Everything you need to know about causeway regulations, timing, and our executive transport standards.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {Objections.map((item, i) => (
                        <div key={i} style={{ 
                            background: 'white', 
                            borderRadius: '12px', 
                            border: openIndex === i ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)', 
                            overflow: 'hidden', 
                            boxShadow: openIndex === i ? '0 10px 25px rgba(0,0,0,0.03)' : 'none',
                            transition: 'all 0.3s ease'
                        }}>
                            <button
                                onClick={() => toggle(i)}
                                style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', outline: 'none' }}
                            >
                                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: openIndex === i ? 'var(--color-primary)' : 'var(--color-text-main)', paddingRight: '1rem' }}>{item.question}</span>
                                <div style={{ background: openIndex === i ? 'var(--color-primary)' : 'var(--color-background-alt)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {openIndex === i ? <Minus size={16} color="white" /> : <Plus size={16} color="var(--color-primary)" />}
                                </div>
                            </button>

                            {openIndex === i && (
                                <div className="animate-fade-up" style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#4b5563', lineHeight: '1.6', fontSize: '0.85rem', animationDuration: '0.4s' }}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', background: 'var(--color-primary)', padding: '2.5rem', borderRadius: '24px', color: 'white' }}>
                    <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '700' }}>Still Unsure About the Process?</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '0.8rem' }}>Our bilingual support team provides 24/7 assistance for all your cross-border questions.</p>
                    <Link href="https://wa.me/966569487569" className="btn btn-primary" style={{ background: '#25D366', color: 'white', border: 'none', padding: '0.8rem 1.75rem', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '700', borderRadius: '8px' }}>
                        <MessageCircle size={20} /> TALK TO US ON WHATSAPP
                    </Link>
                </div>
            </div>
        </section>
    );
}
