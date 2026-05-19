import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';

export const metadata = {
    title: "Saudi to Bahrain Visa Requirements 2026 | Iqama, E-Visa & GCC Rules | Dammam to Bahrain Taxi",
    description: "Can you enter Bahrain with a Saudi Iqama? Complete 2026 guide to visa on arrival eligibility, profession restrictions, e-visa process, and exit/re-entry requirements.",
    alternates: { canonical: '/blog/visa-requirements/' },
};

const faqs = [
    {
        question: "Can I enter Bahrain with a Saudi Iqama?",
        answer: "It depends on your profession code. 'High-level' professions (Manager, Engineer, Doctor, etc.) are eligible for visa on arrival. 'Labor' professions must apply for a Bahrain e-visa in advance through the official portal."
    },
    {
        question: "How much is the Bahrain visa on arrival?",
        answer: "The visa on arrival fee ranges from 5 to 15 BHD depending on your nationality and the duration requested. Single-entry visas (2 weeks) are cheapest. Our drivers can guide you through the payment process at the border."
    },
    {
        question: "Do I need an exit/re-entry visa to cross the causeway?",
        answer: "Yes, if you are a Saudi resident (Iqama holder). You must have a valid exit/re-entry visa before departing Saudi Arabia. Without it, Saudi immigration will not allow you to leave. This can be obtained through Absher or your sponsor."
    },
    {
        question: "Can Western passport holders get a Bahrain visa on arrival?",
        answer: "Yes. Citizens of the US, UK, EU, Canada, Australia, and most Western countries can obtain a free visa on arrival valid for 14 days, extendable to 28 days. Simply present your passport at Bahrain immigration."
    },
    {
        question: "What documents do I need for the causeway crossing?",
        answer: "Saudi citizens: national ID card. Saudi residents (Iqama holders): passport + valid Iqama + valid exit/re-entry visa. Western passport holders: passport only (visa issued on arrival). All must have a passport valid for at least 6 months."
    },
    {
        question: "Can I take a taxi across the causeway without owning a car?",
        answer: "Absolutely — this is the most convenient option. Our taxi handles all vehicle documentation. You simply need your personal travel documents. No car insurance, no bank letter, no vehicle permit needed on your end."
    }
];

const visaTable = [
    { nationality: 'Saudi Citizens (National ID)', requirement: 'National ID Card', cost: 'Free', validity: 'Unlimited', note: 'No passport needed' },
    { nationality: 'GCC Citizens (Kuwait, UAE, Qatar, Oman)', requirement: 'National ID or Passport', cost: 'Free', validity: 'Unlimited', note: 'Visa-free access' },
    { nationality: 'US, UK, EU, Canada, Australia', requirement: 'Passport Only', cost: 'Free', validity: '14 days (extendable)', note: 'Visa on arrival at border' },
    { nationality: 'Saudi Iqama — High Profession', requirement: 'Passport + Iqama + Exit Visa', cost: '5–15 BHD', validity: '2–4 weeks', note: 'Visa on arrival eligible' },
    { nationality: 'Saudi Iqama — Labor Profession', requirement: 'Passport + E-Visa (pre-applied)', cost: 'Varies', validity: 'Per approval', note: 'Must apply before travel' },
    { nationality: 'Indian, Pakistani, Filipino (Professional)', requirement: 'Passport + Iqama + Exit Visa', cost: '5–15 BHD', validity: '2–4 weeks', note: 'Profession code must qualify' },
];

export default function VisaGuidePage() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' },
                    { name: 'Visa Requirements', url: '/blog/visa-requirements' }
                ],
                faqs: faqs
            }} />
            <div className="section">
                <div className="container" style={{ maxWidth: '800px' }}>

                    {/* Header */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>TRAVEL GUIDE 2026</span>
                        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: '800', margin: '0.5rem 0 1rem' }}>
                            Visa Requirements: Entering Bahrain from Saudi Arabia
                        </h1>
                        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7 }}>
                            We turn back passengers at the border every week due to paperwork issues. This guide covers every scenario — Saudi nationals, Iqama holders, and Western expats — so your crossing goes smoothly.
                        </p>
                    </div>

                    {/* Quick Summary Box */}
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: '800', margin: '0 0 0.75rem', textTransform: 'uppercase' }}>Quick Summary</h2>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', lineHeight: 2 }}>
                            <li><strong>Saudi citizens:</strong> National ID only. No visa needed.</li>
                            <li><strong>GCC nationals:</strong> Passport or national ID. No visa needed.</li>
                            <li><strong>Western passports (US/UK/EU):</strong> Free visa on arrival — no advance application.</li>
                            <li><strong>Iqama holders (professional professions):</strong> Visa on arrival — bring passport + Iqama + exit/re-entry visa.</li>
                            <li><strong>Iqama holders (labor professions):</strong> Must apply for e-visa before travel.</li>
                        </ul>
                    </div>

                    {/* Visa Table */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase' }}>Full Visa Requirements Table</h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                                <thead>
                                    <tr style={{ background: '#0a0a0a', color: 'white' }}>
                                        <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase' }}>Traveler Type</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase' }}>Required Documents</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'center', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase' }}>Cost</th>
                                        <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase' }}>Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visaTable.map((row, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid #e5e7eb', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                                            <td style={{ padding: '10px 12px', fontWeight: '600', fontSize: '0.82rem' }}>{row.nationality}</td>
                                            <td style={{ padding: '10px 12px', color: '#444', fontSize: '0.82rem' }}>{row.requirement}</td>
                                            <td style={{ padding: '10px 12px', textAlign: 'center', color: '#444', fontSize: '0.82rem' }}>{row.cost}</td>
                                            <td style={{ padding: '10px 12px', color: '#666', fontSize: '0.82rem' }}>{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 1: Saudi Iqama Holders */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.75rem' }}>1. Saudi Iqama Holders — The Detailed Rules</h2>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            This is the category with the most confusion and most border rejections. Your eligibility for a Bahrain visa on arrival depends on the <strong>profession code printed on your Iqama</strong>, not just your actual job title.
                        </p>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', marginTop: '1.25rem' }}>Professions Eligible for Visa on Arrival</h3>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            Bahrain immigration generally grants visa on arrival to Iqama holders with "professional" or "high-level" profession codes, including:
                        </p>
                        <ul style={{ color: '#444', lineHeight: 2, paddingLeft: '1.25rem', marginBottom: '0.75rem' }}>
                            <li>Engineer, Senior Engineer, Project Manager</li>
                            <li>Doctor, Dentist, Nurse, Medical Technician</li>
                            <li>Teacher, Professor, Academic Researcher</li>
                            <li>Manager, Director, Executive, CEO</li>
                            <li>Accountant, Financial Analyst, Banker</li>
                            <li>IT Professional, Software Developer, System Administrator</li>
                            <li>Lawyer, Legal Advisor, Consultant</li>
                        </ul>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', marginTop: '1.25rem' }}>Labor / Manual Professions — E-Visa Required</h3>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            If your Iqama profession code falls under "labor" (worker, driver, guard, domestic, laborer, etc.), you <strong>cannot get a visa on arrival</strong>. You must apply for a Bahrain e-visa through the official Bahrain government portal at least 3–5 business days before travel. The fee and processing time vary. Do not attempt to show up at the border without this.
                        </p>
                    </div>

                    {/* Section 2: Exit/Re-Entry Visa */}
                    <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.75rem' }}>⚠️ Exit/Re-Entry Visa — Critical for Iqama Holders</h2>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            As a Saudi resident (Iqama holder), you must have a valid <strong>Exit/Re-Entry visa</strong> stamped in your passport before you can leave Saudi Arabia. Saudi immigration at the causeway will deny your exit without it, regardless of your Bahrain visa status.
                        </p>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            How to get it:
                        </p>
                        <ul style={{ color: '#444', lineHeight: 2, paddingLeft: '1.25rem', marginBottom: '0.75rem' }}>
                            <li><strong>Via Absher app</strong> (for self-sponsored or workers with employer approval): Apply online, usually approved within minutes.</li>
                            <li><strong>Via your employer/sponsor</strong>: Your sponsor applies through their Absher business account. Allow 1–2 days.</li>
                            <li><strong>At MOL offices</strong>: Physical application available if digital route fails.</li>
                        </ul>
                        <p style={{ color: '#444', lineHeight: 1.75 }}>
                            Check the validity dates carefully. If your exit/re-entry visa expires while you are in Bahrain, you will face fines and complications returning to Saudi Arabia.
                        </p>
                    </div>

                    {/* Section 3: Vehicle Documents */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.75rem' }}>2. Vehicle Documents for the Causeway</h2>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            If you are driving your own car across the causeway, you need additional documentation that most people overlook:
                        </p>
                        <ul style={{ color: '#444', lineHeight: 2, paddingLeft: '1.25rem', marginBottom: '0.75rem' }}>
                            <li><strong>Causeway Insurance:</strong> You must purchase special cross-border insurance at the Saudi causeway terminal. Available at the insurance booths on the Saudi side. Cost: approximately 50–80 SAR.</li>
                            <li><strong>Bank Letter (Tafweedi):</strong> If your car is under a bank loan or lease, you need a letter from the bank authorizing international travel. Getting this typically takes 2–5 business days.</li>
                            <li><strong>Vehicle Registration:</strong> Must be current. Expired registration will result in vehicle detention.</li>
                            <li><strong>Causeway Toll:</strong> 25 SAR per vehicle each way. Cash and card accepted.</li>
                        </ul>
                        <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '1.25rem' }}>
                            <strong style={{ fontSize: '0.9rem' }}>The simplest solution:</strong>
                            <p style={{ color: '#444', fontSize: '0.875rem', lineHeight: 1.7, margin: '0.5rem 0 0' }}>
                                Book a taxi. We handle 100% of the vehicle paperwork. You only need your personal travel documents. No causeway insurance, no bank letter, no vehicle permit — just your passport and Iqama. <Link href="https://wa.me/966569487569" style={{ color: 'var(--color-accent)', fontWeight: '700' }}>Book via WhatsApp →</Link>
                            </p>
                        </div>
                    </div>

                    {/* Section 4: What to Expect at the Border */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.75rem' }}>3. What Happens at the Causeway Border</h2>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            The crossing involves two separate immigration checkpoints — one on each side of the 25 km causeway:
                        </p>
                        <ol style={{ color: '#444', lineHeight: 2.2, paddingLeft: '1.25rem' }}>
                            <li><strong>Saudi Exit Immigration:</strong> Show your passport and Iqama (if applicable). Exit/re-entry visa is checked here. This is where most rejections happen.</li>
                            <li><strong>Drive across the causeway</strong> (approximately 20–25 minutes).</li>
                            <li><strong>Bahrain Entry Immigration:</strong> Present your passport. Visa on arrival is issued here if eligible. You pay any applicable visa fee. Most crossings take 5–15 minutes per person.</li>
                            <li><strong>Bahrain customs:</strong> Standard checks. Declare any restricted items. Alcohol, pork products, and certain medications are restricted.</li>
                        </ol>
                        <p style={{ color: '#444', lineHeight: 1.75, marginTop: '0.75rem' }}>
                            Peak crossing times (Thursday 4–9 PM, Saturday 2–6 PM) can turn this process into a 2–3 hour ordeal. Read our <Link href="/blog/causeway-traffic-guide/" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>causeway traffic guide</Link> for the best departure times.
                        </p>
                    </div>

                    {/* Section 5: Returning to Saudi Arabia */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.75rem' }}>4. Returning to Saudi Arabia</h2>
                        <p style={{ color: '#444', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                            The return crossing follows the same procedure in reverse — Bahrain exit then Saudi entry. Key points for Iqama holders:
                        </p>
                        <ul style={{ color: '#444', lineHeight: 2, paddingLeft: '1.25rem' }}>
                            <li>Your re-entry visa must still be valid when you return. Check the dates before traveling.</li>
                            <li>If your Iqama expired while in Bahrain, you face fines at Saudi entry. Verify Iqama validity before crossing.</li>
                            <li>Saudi residents returning with duty-free goods above the allowance are subject to customs duties.</li>
                            <li>Returning on a Friday morning (6–10 AM from Bahrain) is consistently the quietest crossing time.</li>
                        </ul>
                    </div>

                    <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                        <Link href="https://wa.me/966569487569?text=Hi%2C%20I%20need%20a%20taxi%20to%20Bahrain%20and%20have%20a%20visa%20question." className="btn btn-primary" style={{ padding: '15px 40px', display: 'inline-block', textDecoration: 'none' }}>
                            BOOK TAXI — SKIP THE PAPERWORK
                        </Link>
                    </div>

                    <div style={{ marginTop: '3rem', padding: '2rem', borderTop: '1px solid #ddd' }}>
                        <h3 style={{ fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Related Guides</h3>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.5 }}>
                            <li><Link href="/blog/causeway-traffic-guide/" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Causeway Traffic Guide: Best Times to Cross →</Link></li>
                            <li><Link href="/services/visa-run/" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Visa Run Service — We Handle Everything →</Link></li>
                            <li><Link href="/travel-guide/" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Complete Saudi–Bahrain Travel Guide →</Link></li>
                            <li><Link href="/blog/expat-guide-bahrain/" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Expat's Guide to Weekend Trips in Bahrain →</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ExpertInsight
                text="We see visa issues at the border every single day. The most common mistake is Iqama holders with 'labor' profession codes assuming they can get a visa on arrival — they cannot. The second most common issue is expired exit/re-entry visas. We always advise passengers to verify their documentation 24 hours before travel. One rejected passenger wastes a full round trip and causeway toll. Prevention is free."
                author="Border Liaison, Dammam to Bahrain Taxi"
                cityName="Saudi-Bahrain"
            />
            <PageFAQ faqs={faqs} cityName="Saudi-Bahrain" />
            <TrustBar clientsServed="500+" />
            <LastUpdated date="February 19, 2026" />
        </>
    );
}
