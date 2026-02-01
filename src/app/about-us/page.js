import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
    title: "About Us | Dammam to Bahrain Taxi Service",
    description: "Established in 2026, we are the premier private taxi service connecting Saudi Arabia and Bahrain. Learn about our fleet (GMC, Lexus) and professional drivers.",
    openGraph: {
        title: "About Dammam to Bahrain Taxi",
        description: "Reliable cross-border transport since 2026. Discover our story and commitment to safety.",
    }
};

export default function AboutUs() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">ABOUT OUR SERVICE</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <p className="drop-cap" style={{ marginBottom: '1.5rem' }}>
                            <span style={{ float: 'left', fontSize: '4rem', lineHeight: '0.8', paddingRight: '10px', fontWeight: 'bold' }}>D</span>
                            ammam to Bahrain Taxi was established with a singular vision: to improve the standard of cross-border transportation between the Kingdom of Saudi Arabia and the Kingdom of Bahrain. In a market often characterized by informal arrangements and inconsistent service quality, we sought to introduce a professional, reliable, and dependable alternative.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We recognized early on that for many travelers, the journey across the King Fahd Causeway was a source of stress rather than anticipation. Long queues, unclear customs procedures, and the fatigue of driving were common complaints. We built our service to address these specific pain points, transforming the commute into a simple, comfortable experience.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', borderBottom: '2px solid #000' }}>Our Philosophy</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We believe that transportation is not just about moving people; it is about respecting their time and their dignity. Every aspect of our operation, from the maintenance of our vehicles to the training of our drivers, is designed to uphold these values. We prioritize safety above all else, followed closely by punctuality and comfort.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Transparency is also a cornerstone of our business. We do not believe in hidden fees or surcharges. The price we quote is the price you pay, inclusive of tolls and standard waiting times. This honesty has earned us the trust of hundreds of recurring clients, from individual tourists to large multinational corporations.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', borderBottom: '2px solid #000' }}>The Fleet</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Our fleet is the pride of our operation. We understand that comfort is subjective, which is why we offer a range of vehicles to suit different needs:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Executive Sedans:</strong> Featuring the Lexus ES and Toyota Camry, these vehicles are perfect for solo travelers or couples who value a smooth, quiet ride.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Large SUVs:</strong> The GMC Yukon and Chevrolet Tahoe are the stalwarts of Gulf travel. Spacious, safe, and commanding, they are ideal for families, groups, or those with significant luggage.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Family Vans:</strong> For larger groups, we deploy the Hyundai Staria, offering modern comfort and ample seating capacity.</li>
                        </ul>
                        <p>
                            All vehicles are non-smoking, meticulously cleaned daily, and serviced according to the manufacturer's strict maintenance schedules.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', borderBottom: '2px solid #000' }}>Our Drivers</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Our drivers are our ambassadors. We employ only those with a clean driving record and significant experience driving the specific routes of the Eastern Province and Bahrain. Beyond driving skills, they are trained in customer service etiquette. They are punctual, polite, and discreet. They understand the nuances of the border crossing and can guide you through immigration procedures with ease.
                        </p>
                    </div>

                    <div style={{ borderLeft: '1px solid #000', paddingLeft: '2rem' }}>
                        <div style={{ background: '#f9f9f9', padding: '2rem', border: '1px solid #000', marginBottom: '2rem' }}>
                            <h4 style={{ textTransform: 'uppercase', marginBottom: '1rem' }}>Key Statistics</h4>
                            <ul style={{ listStyle: 'none', lineHeight: '2.5', fontSize: '0.95rem' }}>
                                <li style={{ borderBottom: '1px solid #ddd' }}><strong>Founded:</strong> 2026</li>
                                <li style={{ borderBottom: '1px solid #ddd' }}><strong>HQ:</strong> Al Khobar, KSA</li>
                                <li style={{ borderBottom: '1px solid #ddd' }}><strong>Fleet Size:</strong> 50+ Vehicles</li>
                                <li style={{ borderBottom: '1px solid #ddd' }}><strong>Monthly Trips:</strong> 1,200+</li>
                                <li style={{ borderBottom: '1px solid #ddd' }}><strong>Safety Rating:</strong> 5/5 Stars</li>
                            </ul>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ textTransform: 'uppercase', marginBottom: '1rem' }}>Legal Information</h4>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                We are a fully licensed transportation provider operating under the regulations of the Saudi Transport General Authority (TGA).
                            </p>
                            <p style={{ fontSize: '0.9rem' }}>
                                <strong>License No:</strong> TGA-2026-X889
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
