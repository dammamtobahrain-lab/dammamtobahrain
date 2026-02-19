import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: "Privacy Policy | Dammam to Bahrain Taxi",
    description: "How we collect, use, and protect your personal data. Our commitment to privacy and data security for all taxi service customers.",
};

export default function PrivacyPolicy() {
    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Privacy Policy', href: '/privacy-policy/' },
                ],
            }} />

            <div className="section">
                <div className="container">
                    <h1 className="section-title">PRIVACY POLICY</h1>

                    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>

                        <p>
                            At <strong>Dammam to Bahrain Taxi</strong>, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when using our transportation services.
                        </p>

                        <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>1. Information We Collect</h3>
                        <p>
                            We collect only the information necessary to facilitate your travel booking. This typically includes:
                        </p>
                        <ul>
                            <li><strong>Personal Identification:</strong> Name, phone number, and email address.</li>
                            <li><strong>Travel Details:</strong> Pickup/drop-off addresses, flight numbers, and travel dates.</li>
                            <li><strong>Communication Data:</strong> Records of your correspondence with us via WhatsApp or Email.</li>
                        </ul>
                        <p>
                            We do <strong>NOT</strong> store credit card information on our servers. Any electronic payments are processed through secure third-party payment gateways compliant with PCI-DSS standards.
                        </p>

                        <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>2. How We Use Your Information</h3>
                        <p>
                            Your data is used strictly for operational purposes:
                        </p>
                        <ul>
                            <li>To process your booking and dispatch a driver to your location.</li>
                            <li>To communicate important updates regarding your trip (e.g., driver arrival, delays).</li>
                            <li>To improve our customer service based on your feedback.</li>
                            <li>To comply with legal obligations required by Saudi or Bahraini transport authorities.</li>
                        </ul>

                        <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>3. Data Sharing</h3>
                        <p>
                            We adhere to a strict non-disclosure policy. We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners for analytical purposes.
                        </p>
                        <p>
                            However, we may disclose your information if required by law enforcement or government agencies in Saudi Arabia or Bahrain for security or immigration purposes associated with your cross-border travel.
                        </p>

                        <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>4. Data Security</h3>
                        <p>
                            We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                        </p>

                        <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>5. Your Rights</h3>
                        <p>
                            You have the right to request access to the personal data we hold about you. You also have the right to request the correction of inaccurate data or the deletion of your data from our records, provided it does not conflict with our legal data retention obligations.
                        </p>

                        <h3 style={{ marginTop: '2rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@dammamtobahrain.com" style={{ textDecoration: 'underline' }}>privacy@dammamtobahrain.com</a>.
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}
