export const metadata = {
    title: "Frequently Asked Questions | Dammam to Bahrain Taxi",
    description: "Common questions about our taxi service, border crossing, and payment methods.",
};

export default function FAQ() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">FREQUENTLY ASKED QUESTIONS</h1>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '10px' }}>Q: Do I need a visa to enter Bahrain?</h3>
                        <p><strong>A:</strong> Most GCC residents and citizens do not need a visa. However, other nationalities may require a visa on arrival or an e-visa. Please check with your embassy or the Bahraini government website before traveling. Our drivers can assist with the procedure at the causeway but are not responsible for your visa status.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '10px' }}>Q: How long does the trip take?</h3>
                        <p><strong>A:</strong> The drive from Dammam/Al Khobar to Bahrain typically takes 45 to 60 minutes. However, during weekends or holidays, delays at the King Fahd Causeway customs can increase travel time significantly. We recommend booking in advance.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '10px' }}>Q: What forms of payment do you accept?</h3>
                        <p><strong>A:</strong> We accept Cash (SAR or BHD) and Bank Transfer. Some vehicles are equipped with POS machines, but please request this at the time of booking.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '10px' }}>Q: Can you pick me up from the airport?</h3>
                        <p><strong>A:</strong> Yes. For airport pickups (DMM or BAH), please provide your flight number and arrival time. Our driver will wait for you at the arrivals hall with a name sign.</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '10px' }}>Q: Is smoking allowed in the vehicle?</h3>
                        <p><strong>A:</strong> For the comfort of all our passengers, our vehicles are strictly non-smoking.</p>
                    </div>

                    <div style={{ border: '1px solid #000', padding: '1rem', marginTop: '3rem', fontSize: '0.9rem' }}>
                        <p style={{ margin: 0 }}><strong>Have another question?</strong> Contact us directly at <a href="mailto:booking@dammamtobahrain.com" style={{ textDecoration: 'underline' }}>booking@dammamtobahrain.com</a>.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
