"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function PageFAQ({ faqs, cityName }) {
    const [openIndex, setOpenIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section style={{ margin: '3rem 0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Frequently Asked
                </span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                    {cityName ? `Common Questions About ${cityName} Transfers` : 'Frequently Asked Questions'}
                </h2>
            </div>

            <div className="page-faq">
                {faqs.map((item, i) => (
                    <div key={i} className="faq-item">
                        <button className="faq-question" onClick={() => toggle(i)}>
                            <span style={{ color: openIndex === i ? 'var(--color-accent)' : 'inherit' }}>
                                {item.question}
                            </span>
                            {openIndex === i
                                ? <Minus size={18} color="var(--color-accent)" />
                                : <Plus size={18} color="var(--color-text-muted)" />
                            }
                        </button>
                        {openIndex === i && (
                            <div className="faq-answer animate-fade-up" style={{ animationDuration: '0.3s' }}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
