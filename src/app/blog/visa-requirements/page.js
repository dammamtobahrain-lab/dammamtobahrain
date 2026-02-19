import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ExpertInsight from '@/components/sections/ExpertInsight';
import LastUpdated from '@/components/sections/LastUpdated';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import PageFAQ from '@/components/sections/PageFAQ';

export const metadata = {
    title: "Saudi to Bahrain Visa Requirements 2026 | Iqama, E-Visa & GCC Rules | Dammam to Bahrain Taxi",
    description: "Can you enter Bahrain with a Saudi Iqama? Complete 2026 guide to visa on arrival eligibility, profession restrictions, e-visa process, and exit/re-entry requirements.",
};

const faqs = [
    {
        question: "Can I enter Bahrain with a Saudi Iqama?",
        answer: "It depends on your profession code. 'High-level' professions (Manager, Engineer, Doctor, etc.) are eligible for visa on arrival. 'Labor' professions must apply for a Bahrain e-visa in advance through the official portal."
    },
    {
        question: "How much is the Bahrain visa on arrival?",
        answer: "The visa on arrival fee ranges from 5 to 15 BHD depending on your nationality and the duration requested. Single-entry visas (48 hours) are cheapest. Our drivers can guide you through the payment process at the border."
    },
    {
        question: "Do I need an exit/re-entry visa to cross the causeway?",
        answer: "Yes, if you are a Saudi resident (Iqama holder). You must have a valid exit/re-entry visa before departing Saudi Arabia. Without it, Saudi immigration will not allow you to leave. This can be obtained through Absher or your sponsor."
    }
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
                    <h1 className="section-title">Visa Guide: Entering Bahrain</h1>

                    <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        <p>
                            Crossing the border is easy, provided your paperwork is in order. We see passsengers turned back every week due to simple mistakes.
                            Here is the 2026 checklist.
                        </p>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>1. GCC Citizens (Saudis)</h2>
                        <p>ID Card is sufficient. Driving license is accepted if your vehicle is authorized.</p>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>2. Saudi Iqama Holders (Residents)</h2>
                        <p>This is where it gets tricky. You are generally eligible for <strong>Visa on Arrival</strong> if:</p>
                        <ul>
                            <li>Your Iqama profession is "High Level" (Manager, Engineer, Doctor, etc).</li>
                            <li>Your passport is valid for 6+ months.</li>
                            <li>Your Iqama is valid for 3+ months.</li>
                            <li>You have a valid Exit/Re-Entry Visa for Saudi Arabia.</li>
                        </ul>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>What if I have a "Labor" Profession?</h2>
                        <p>
                            You likely need to apply for an <strong>E-Visa</strong> in advance through the Bahrain e-Government portal. Do not attempt to drive to the border without it.
                        </p>

                        <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>Vehicle Papers</h2>
                        <p>
                            If you are driving a personal car that is <strong>under a bank lease</strong>, you absolutely need a "Letter of Authorization" (Tafweedi) from the bank to cross borders.
                            <br /><br />
                            <strong>Solution:</strong> Skip the paperwork hassle and book a taxi. We handle the vehicle permits completely.
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 40px' }}>
                            BOOK TAXI (NO CAR PERMIT NEEDED)
                        </Link>
                    </div>

                    <div style={{ marginTop: '3rem', padding: '2rem', borderTop: '1px solid #ddd' }}>
                        <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginBottom: '1rem' }}>Related Guides</h3>
                        <ul style={{ listStyle: 'none', lineHeight: '2.5' }}>
                            <li><Link href="/blog/causeway-traffic-guide/" style={{ textDecoration: 'underline' }}>Causeway Traffic Guide: Best Times to Cross</Link></li>
                            <li><Link href="/services/visa-run/" style={{ textDecoration: 'underline' }}>Visa Run Service — We Handle Everything</Link></li>
                            <li><Link href="/travel-guide/" style={{ textDecoration: 'underline' }}>Complete Saudi-Bahrain Travel Guide</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ExpertInsight
                text="We see visa issues at the border every single day. The most common mistake is Iqama holders with 'labor' profession codes assuming they can get a visa on arrival — they cannot. The second most common issue is expired exit/re-entry visas. We always advise passengers to verify their documentation 24 hours before travel. One rejected passenger wastes a full round trip and causeway toll. Prevention is free."
                author="Border Liaison Officer, Dammam to Bahrain Taxi"
                cityName="Saudi-Bahrain"
            />
            <PageFAQ faqs={faqs} cityName="Saudi-Bahrain" />
            <TrustBar clientsServed="500+" />
            <LastUpdated date="February 19, 2026" />
        </>
    );
}
