import PageHero from '@/components/ui/PageHero';
import TrustBar from '@/components/sections/TrustBar';
import SchemaMarkup from '@/components/sections/SchemaMarkup';
import LastUpdated from '@/components/sections/LastUpdated';
import PageFAQ from '@/components/sections/PageFAQ';

export const metadata = {
    title: "Contact Us | 24/7 Support | Dammam to Bahrain Taxi",
    description: "Contact Dammam to Bahrain Taxi. 24/7 WhatsApp support, email booking desk, and Al Khobar headquarters. Instant response for all transport inquiries.",
};

const contactFaqs = [
    {
        question: "How quickly do you respond to booking requests?",
        answer: "We respond to all booking requests within 15 minutes during business hours (6 AM - 12 AM). WhatsApp messages receive the fastest response. Email inquiries are typically answered within 1 hour."
    },
    {
        question: "Can I modify or cancel my booking?",
        answer: "Yes. Modifications and cancellations are free up to 24 hours before your scheduled pickup. Within 24 hours, a partial fee may apply. Contact us via WhatsApp or email to make changes."
    },
    {
        question: "Do you offer corporate accounts?",
        answer: "Yes. We offer dedicated corporate accounts with monthly invoicing, priority booking, and volume discounts. Contact us at info@dammamtobahrain.com to set up a corporate account for your company."
    },
];

export default function ContactUs() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Contact Us', href: '/contact-us/' },
                ],
                faqs: contactFaqs,
            }} />

            <PageHero
                title="Get in Touch"
                subtitle="24/7 Support for all your transport needs. We are here to assist you."
                label="CONTACT US"
            />
            <div className="section">
                <div className="container">

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            <p>
                                We value clear, direct communication. Whether you have a specific inquiry about a route, need to modify an existing reservation, or simply wish to speak with a representative, we are at your disposal.
                            </p>
                            <p>
                                Our office operates 24 hours a day, 7 days a week, 365 days a year. We monitor all channels continuously to ensure no client is left waiting.
                            </p>

                            <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginTop: '2rem', borderBottom: '1px solid #000', paddingBottom: '5px' }}>Headquarters</h3>
                            <p style={{ marginTop: '1rem' }}>
                                King Fahd Road<br />
                                Al Khobar 31952<br />
                                Kingdom of Saudi Arabia
                            </p>

                            <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginTop: '2rem', borderBottom: '1px solid #000', paddingBottom: '5px' }}>Direct Lines</h3>
                            <p style={{ marginTop: '1rem' }}>
                                <strong>General Inquiries:</strong><br />
                                <span style={{ fontFamily: 'Courier New, monospace' }}>info@dammamtobahrain.com</span>
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                <strong>Booking Desk:</strong><br />
                                <span style={{ fontFamily: 'Courier New, monospace' }}>booking@dammamtobahrain.com</span>
                            </p>

                            <h3 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginTop: '2rem', borderBottom: '1px solid #000', paddingBottom: '5px' }}>WhatsApp Support</h3>
                            <p style={{ marginTop: '1rem' }}>
                                For immediate assistance, please click the button below to chat with our operations team.
                            </p>
                            <a href="https://wa.me/923080628195" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block', borderRadius: '0' }}>
                                OPEN WHATSAPP CHAT
                            </a>
                        </div>

                        <div style={{ background: '#000', color: 'white', padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <h2 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'white' }}>Quick Booking via WhatsApp</h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                We have moved to a direct WhatsApp booking system for faster responses and real-time coordination. Our team is available 24/7.
                            </p>
                            <a href="https://wa.me/923080628195" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', background: '#25D366', borderColor: '#25D366' }}>
                                CHAT ON WHATSAPP
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="section" style={{ background: '#fafafa', padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <PageFAQ faqs={contactFaqs} cityName="Contact" />
                </div>
            </div>

            {/* Trust Bar */}
            <TrustBar clientsServed="500+" />

            {/* Last Updated */}
            <div className="container">
                <LastUpdated date="February 19, 2026" />
            </div>
        </>
    );
}
