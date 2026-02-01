import Link from 'next/link';

export const metadata = {
    title: "Saudi to Bahrain Visa Requirements 2026 | Rules for Residents",
    description: "Can I enter Bahrain with Saudi Iqama? Visa on arrival fees, profession restrictions, and e-visa guide.",
};

export default function VisaGuidePage() {
    return (
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
            </div>
        </div>
    );
}
