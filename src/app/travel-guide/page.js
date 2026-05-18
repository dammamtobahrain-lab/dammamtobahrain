import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';

export const metadata = {
    title: "Comprehensive Travel Guide: Saudi Arabia to Bahrain via King Fahd Causeway | Dammam to Bahrain Taxi",
    description: "The ultimate 2026 guide to crossing the King Fahd Causeway. Visa rules for Iqama holders, customs regulations, best times to travel, toll fees, and cultural etiquette. Updated February 2026.",
};

const faqs = [
    {
        question: "How long does it take to cross the King Fahd Causeway?",
        answer: "On a typical weekday, the crossing takes 30-45 minutes. During peak hours (Thursday evening, Saturday evening), expect 1-3 hours due to heavy traffic. We recommend traveling during off-peak hours for the fastest experience.",
    },
    {
        question: "Do I need a visa to enter Bahrain from Saudi Arabia?",
        answer: "GCC citizens can enter with a National ID. Saudi Iqama holders with eligible professions can get a visa on arrival. Others should apply for a Bahrain e-visa in advance. Our team can advise you on your specific eligibility.",
    },
    {
        question: "Is the causeway toll included in taxi fare?",
        answer: "Yes. Our quoted fare includes the 25 SAR causeway toll, vehicle insurance, and all standard waiting times at immigration checkpoints. No hidden fees.",
    },
    {
        question: "Can I bring alcohol back from Bahrain to Saudi Arabia?",
        answer: "No. Importing alcohol into Saudi Arabia is strictly prohibited regardless of quantity. Bahrain customs and Saudi customs both enforce this rule. Heavy penalties apply.",
    },
    {
        question: "What documents do children need for the causeway crossing?",
        answer: "Children need their own passport. If traveling with only one parent, carry a notarized consent letter from the other parent. Children on a parent's Iqama dependency must have the main Iqama holder present or carry authorization.",
    },
];

const schemaData = {
    breadcrumbs: [
        { name: 'Home', href: '/' },
        { name: 'Travel Guide', href: '/travel-guide/' },
    ],
    faqs: faqs,
};

export default function TravelGuide() {
    return (
        <>
            <SchemaMarkup type="home" data={schemaData} />

            <div className="section">
                <div className="container">
                    <div className="section-title">
                        <span style={{ color: 'var(--color-accent)', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.7rem' }}>Knowledge Base</span>
                        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', fontWeight: '800', marginTop: '0.5rem', letterSpacing: '-1px' }}>TRAVEL GUIDE: CROSSING THE CAUSEWAY</h1>
                        <p style={{ maxWidth: '650px', margin: '0.75rem auto 0 auto', fontSize: '0.9rem' }}>The ultimate 2026 guide to navigating the King Fahd Causeway like a pro.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '3rem auto 0 auto', fontSize: '1rem', lineHeight: '1.75' }}>
                        <p style={{ marginBottom: '1.5rem', position: 'relative' }}>
                            <span style={{ float: 'left', fontSize: '3rem', fontWeight: '900', color: 'var(--color-accent)', lineHeight: '0.8', marginRight: '12px', marginTop: '4px' }}>T</span>
                            he King Fahd Causeway is more than a bridge; it is a vital economic and social artery connecting the Kingdom of Saudi Arabia and the Kingdom of Bahrain. Opened in 1986, this 25-kilometer engineering marvel changed the relationship between the two nations, turning a short flight or long ferry ride into a convenient drive. Today, it serves millions of travelers annually. However, crossing the border requires preparation and knowledge to ensure a smooth journey. This comprehensive guide covers everything you need to know about the trip.
                        </p>

                        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>1. Pre-Departure Requirements</h2>

                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>Documentation</h3>
                        <p>
                            Before you even set foot in one of our taxis, ensuring you have the correct documentation is compliant. The requirements vary depending on your nationality and residency status.
                        </p>
                        <ul style={{ listStyle: 'none', padding: '1rem 0' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>GCC Citizens:</strong> A valid National ID card is usually sufficient.</div></li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Saudi Residents (Iqama Holders):</strong> Valid passport (6 months validity) and an Exit/Re-Entry Visa.</div></li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Visitors (Tourist/Business):</strong> Check for multiple-entry status and Bahrain e-visa eligibility.</div></li>
                        </ul>

                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>Health and Insurance</h3>
                        <p>
                            Medical insurance that covers you in Bahrain is highly recommended. Our taxi fare includes mandatory vehicle insurance, so you do not need to worry about purchasing it separately at the booths.
                        </p>

                        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>2. The Journey: Step-by-Step</h2>

                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>Step 1: The Saudi Toll Gate</h3>
                        <p>
                            Leaving Al Khobar, we approach the initial toll gate. A fee of 25 SAR is payable here, typically included in your fixed quote with us.
                        </p>

                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>Step 2: Saudi Passport Control</h3>
                        <p>
                            The first major stop where you present your Passport/ID. Officers verify identity and exit visa status for residents.
                        </p>

                        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '2rem', marginBottom: '0.5rem' }}>Step 3: The Middle Island</h3>
                        <p>
                            The 12km border station island. Here you transition from Saudi to Bahraini jurisdiction.
                        </p>

                        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>3. Best Times to Travel</h2>
                        <ul style={{ listStyle: 'none', padding: '1rem 0' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Weekdays (Sun-Wed):</strong> Best for speed (30-45 mins).</div></li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--color-accent)' }}>●</span> <div><strong>Thu PM / Sat PM:</strong> Peak hours with delays up to 2-3 hours.</div></li>
                        </ul>

                        <div style={{ marginTop: '4rem', padding: '2.5rem', borderRadius: '16px', background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                            <h3 style={{ fontWeight: '800', marginBottom: '0.75rem', fontSize: '1.15rem' }}>Ready for a Stress-Free Crossing?</h3>
                            <p style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '0.9rem' }}>Let our professional chauffeurs handle the logistics while you relax.</p>
                            <Link href="https://wa.me/966569487569" className="btn btn-primary" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', border: 'none', padding: '12px 32px' }}>BOOK ON WHATSAPP</Link>
                        </div>

                        <ExpertInsight
                            text="Preparation is the single biggest factor in a smooth crossing. The difference between a 30-minute trip and a 3-hour ordeal often comes down to timing and documentation."
                            author="Operations Team"
                            cityName="Causeway"
                        />

                        <div style={{ marginTop: '4rem' }}>
                            <PageFAQ faqs={faqs} cityName="Causeway" />
                        </div>

                        <LastUpdated date="April 3, 2026" />

                    </div>
                </div>
            </div>

            <TrustBar clientsServed="500+" />
        </>
    );
}
