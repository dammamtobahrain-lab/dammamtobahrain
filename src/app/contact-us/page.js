export const metadata = {
    title: "Contact Us | Dammam to Bahrain Taxi",
    description: "Official contact channels for Dammam to Bahrain Taxi. Phone, Email, and Address.",
};

export default function ContactUs() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">CONTACT INFORMATION</h1>

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
                        <a href="https://wa.me/13073464572" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block', borderRadius: '0' }}>
                            OPEN WHATSAPP CHAT
                        </a>
                    </div>

                    <div style={{ border: '2px solid #000', padding: '2rem', background: '#fcfcfc' }}>
                        <h2 style={{ fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2rem' }}>Send a Message</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'Arial, sans-serif', fontSize: '0.9rem' }}>YOUR NAME</label>
                                <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #000', borderRadius: '0', background: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'Arial, sans-serif', fontSize: '0.9rem' }}>EMAIL ADDRESS</label>
                                <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #000', borderRadius: '0', background: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'Arial, sans-serif', fontSize: '0.9rem' }}>SUBJECT</label>
                                <select style={{ width: '100%', padding: '10px', border: '1px solid #000', borderRadius: '0', background: 'white' }}>
                                    <option>General Inquiry</option>
                                    <option>Corporate Partnership</option>
                                    <option>Employment</option>
                                    <option>Complaint/Feedback</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'Arial, sans-serif', fontSize: '0.9rem' }}>MESSAGE</label>
                                <textarea rows="6" style={{ width: '100%', padding: '10px', border: '1px solid #000', borderRadius: '0', background: 'white' }}></textarea>
                            </div>
                            <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>SEND MESSAGE</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
