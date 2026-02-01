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
        <div className="section">
            <div className="container">
                <h1 className="section-title">BOOK YOUR RIDE</h1>

                <div style={{ maxWidth: '600px', margin: '0 auto', border: '5px double #000', padding: '3rem' }}>

                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', color: 'green', padding: '2rem' }}>
                            <h2 style={{ fontSize: '2rem' }}>✔ Request Sent!</h2>
                            <p>We have received your booking details. Our team will contact you via WhatsApp shortly to confirm the price and driver.</p>
                            <button onClick={() => setStatus('idle')} className="btn btn-primary" style={{ marginTop: '1rem' }}>Book Another</button>
                        </div>
                    ) : (
                        <>
                            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                Please fill out the form below to request a booking. We will confirm via WhatsApp or Email within 1 hour.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>FULL NAME</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>CONTACT NUMBER (WHATSAPP)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                        placeholder="+966 5X XXX XXXX"
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                {/* Custom Pickup & Dropoff Inputs */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>PICKUP FROM?</label>
                                        <input
                                            list="locations"
                                            name="pickupCity"
                                            value={formData.pickupCity}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                            placeholder="City, Area, or Landmark"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>DROP OFF AT?</label>
                                        <input
                                            list="locations"
                                            name="dropoffCity"
                                            value={formData.dropoffCity}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                            placeholder="Destination City"
                                            required
                                        />
                                    </div>
                                    <datalist id="locations">
                                        {commonLocations.map(loc => <option key={loc} value={loc} />)}
                                    </datalist>
                                </div>

                                {/* Pickup Date & Time */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>PICKUP DATE</label>
                                        <input
                                            type="date"
                                            name="pickupDate"
                                            value={formData.pickupDate}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem', background: 'white' }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>PICKUP TIME (KSA)</label>
                                        <input
                                            type="time"
                                            name="pickupTime"
                                            value={formData.pickupTime}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem', background: 'white' }}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Passengers & Luggage */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>PASSENGERS</label>
                                        <input
                                            type="number"
                                            name="passengers"
                                            value={formData.passengers}
                                            onChange={handleChange}
                                            min="1"
                                            style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                            placeholder="No. of People"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>LUGGAGE (BAGS)</label>
                                        <input
                                            type="number"
                                            name="luggage"
                                            value={formData.luggage}
                                            onChange={handleChange}
                                            min="0"
                                            style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                            placeholder="No. of Bags"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>VEHICLE TYPE (OR CUSTOM)</label>
                                    <input
                                        list="vehicles"
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem', background: 'white' }}
                                        placeholder="Select or Type Custom Vehicle"
                                    />
                                    <datalist id="vehicles">
                                        {vehicleOptions.map(veh => <option key={veh} value={veh} />)}
                                    </datalist>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>ADDITIONAL NOTES</label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        rows="4"
                                        style={{ width: '100%', padding: '15px', border: '1px solid #000', borderRadius: '0', fontSize: '1rem' }}
                                        placeholder="Flight number, pickup time, specific address..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%', padding: '20px', fontSize: '1.2rem', marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1 }}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'SENDING...' : 'SUBMIT REQUEST'}
                                </button>

                            </form>

                            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                                By submitting this form, you agree to our <a href="/terms-conditions" style={{ textDecoration: 'underline' }}>Terms & Conditions</a>. No payment is required until the trip is confirmed.
                            </p>
                        </>
                    )}

                </div>
            </div>
        </div >
    );
}
