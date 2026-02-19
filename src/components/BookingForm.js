'use client';

import { useState } from 'react';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        pickupCity: '',
        dropoffCity: '',
        pickupDate: '',
        pickupTime: '',
        passengers: '',
        luggage: '',
        vehicleType: '',
        notes: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const commonLocations = [
        "Al Khobar", "Dammam", "Dammam Airport (DMM)",
        "Jubail", "Riyadh", "Bahrain",
        "Hofuf", "Ras Tanura", "Abqaiq"
    ];

    const vehicleOptions = [
        "Sedan (1-3 Pax)",
        "Family SUV (GMC/Yukon) (1-7 Pax)",
        "Hyundai Staria (Family Van)",
        "Luxury Sedan (Lexus ES)",
        "Mercedes S-Class"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus('success');
                setFormData({
                    fullName: '', phone: '', email: '',
                    pickupCity: '', dropoffCity: '',
                    pickupDate: '', pickupTime: '',
                    passengers: '', luggage: '',
                    vehicleType: '', notes: ''
                });
            } else {
                setStatus('error');
                alert('Error: ' + result.message);
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
            alert('Something went wrong. Please try again or WhatsApp us.');
        }
    };

    return (
        <section className="section" style={{ background: '#f9f9f9' }}>
            <style jsx>{`
                .form-container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: white;
                    padding: 3rem;
                    border-radius: 8px;
                    box-shadow: var(--shadow-lg);
                    border: 1px solid var(--color-border);
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }
                @media (min-width: 768px) {
                    .form-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .col-span-2 {
                        grid-column: span 2;
                    }
                }
                .input-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    font-size: 0.75rem;
                    letter-spacing: 0.05em;
                    color: var(--color-primary);
                    text-transform: uppercase;
                }
                .input-group input, .input-group textarea {
                    width: 100%;
                    padding: 0.8rem 1rem;
                    border: 1px solid var(--color-border);
                    border-radius: 4px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.2s;
                    background-color: #fafafa;
                }
                .input-group input:focus, .input-group textarea:focus {
                    border-color: var(--color-accent);
                    background-color: white;
                }
                @media (max-width: 600px) {
                    .form-container {
                        padding: 1.5rem;
                    }
                }
            `}</style>

            <div className="container">

                <div className="form-container">

                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{
                                width: '80px', height: '80px', background: '#dcfce7', color: '#166534',
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 1.5rem', fontSize: '2rem'
                            }}>
                                ✓
                            </div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Request Sent Successfully!</h2>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                We have received your booking details. Our team will contact you via WhatsApp shortly to confirm the price and driver.
                            </p>
                            <button onClick={() => setStatus('idle')} className="btn btn-primary">Book Another Ride</button>
                        </div>
                    ) : (
                        <>
                            <div className="section-title" style={{ marginBottom: '2rem', textAlign: 'left' }}>
                                <span>Reservation Details</span>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Complete Your Booking</h2>
                                <p style={{ maxWidth: '100%', margin: 0 }}>
                                    Fill out the form below to request a ride. We will confirm via WhatsApp within 1 hour.
                                    No payment required now.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="form-grid">

                                <div className="input-group col-span-2">
                                    <label>FULL NAME</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <label>CONTACT NUMBER (WHATSAPP)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (307) 346-4572"
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label>EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <label>PICKUP FROM?</label>
                                    <input
                                        list="locations"
                                        name="pickupCity"
                                        value={formData.pickupCity}
                                        onChange={handleChange}
                                        placeholder="City, Area, or Landmark"
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label>DROP OFF AT?</label>
                                    <input
                                        list="locations"
                                        name="dropoffCity"
                                        value={formData.dropoffCity}
                                        onChange={handleChange}
                                        placeholder="Destination City"
                                        required
                                    />
                                </div>
                                <datalist id="locations">
                                    {commonLocations.map(loc => <option key={loc} value={loc} />)}
                                </datalist>

                                <div className="input-group">
                                    <label>PICKUP DATE</label>
                                    <input
                                        type="date"
                                        name="pickupDate"
                                        value={formData.pickupDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label>PICKUP TIME (KSA)</label>
                                    <input
                                        type="time"
                                        name="pickupTime"
                                        value={formData.pickupTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <label>PASSENGERS</label>
                                    <input
                                        type="number"
                                        name="passengers"
                                        value={formData.passengers}
                                        onChange={handleChange}
                                        min="1"
                                        placeholder="No. of People"
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label>LUGGAGE (BAGS)</label>
                                    <input
                                        type="number"
                                        name="luggage"
                                        value={formData.luggage}
                                        onChange={handleChange}
                                        min="0"
                                        placeholder="No. of Bags"
                                        required
                                    />
                                </div>

                                <div className="input-group col-span-2">
                                    <label>VEHICLE TYPE</label>
                                    <input
                                        list="vehicles"
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        placeholder="Select or Type Custom Vehicle"
                                    />
                                    <datalist id="vehicles">
                                        {vehicleOptions.map(veh => <option key={veh} value={veh} />)}
                                    </datalist>
                                </div>

                                <div className="input-group col-span-2">
                                    <label>ADDITIONAL NOTES</label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Flight number, pickup time, specific address..."
                                    ></textarea>
                                </div>

                                <div className="col-span-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', marginTop: '0.5rem', opacity: status === 'loading' ? 0.7 : 1 }}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'PROCESSING REQUEST...' : 'SUBMIT BOOKING REQUEST'}
                                    </button>
                                </div>

                            </form>

                            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: '#888' }}>
                                By submitting this form, you agree to our <a href="/terms-conditions" style={{ textDecoration: 'underline', color: 'var(--color-primary)' }}>Terms & Conditions</a>.
                            </p>
                        </>
                    )}

                </div>
            </div>
        </section>
    );
}
