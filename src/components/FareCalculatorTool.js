'use client';

import { useState } from 'react';
import Link from 'next/link';

const origins = [
    'Al Khobar', 'Dhahran', 'Dammam City', 'Dammam Airport (DMM)', 'Dammam Sea Port',
    'Qatif', 'Abqaiq', 'Ras Tanura', 'Jubail', 'Hofuf (Al-Ahsa)',
    'Safaniya', 'Tanajib', 'Manifa', 'Khafji', 'Riyadh', 'Al Kharj', 'Jeddah',
    'Bahrain (Return)',
];

const vehicles = [
    { key: 'sedan', name: 'Camry / Lexus ES', pax: '1-3', img: '🚗' },
    { key: 'suv', name: 'GMC Yukon', pax: '1-6', img: '🚙' },
    { key: 'staria', name: 'Hyundai Staria', pax: '1-8', img: '🚐' },
];

export default function FareCalculatorTool() {
    const [from, setFrom] = useState('');
    const [vehicle, setVehicle] = useState('sedan');
    const [passengers, setPassengers] = useState(1);
    const [roundTrip, setRoundTrip] = useState(false);

    const vehicleName = vehicles.find(v => v.key === vehicle)?.name || '';

    const waLink = from
        ? `https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20from%20${encodeURIComponent(from)}%20to%20Bahrain%20(${encodeURIComponent(vehicleName)}%2C%20${passengers}%20pax${roundTrip ? '%2C%20round%20trip' : ''}).`
        : 'https://wa.me/966569487569?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20taxi%20to%20Bahrain.';

    return (
        <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 30px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>

                <div>
                    <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#666' }}>
                        Pickup Location
                    </label>
                    <select
                        value={from}
                        onChange={e => setFrom(e.target.value)}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '2px solid #e5e7eb', fontSize: '1rem', background: 'white', cursor: 'pointer' }}
                    >
                        <option value="">— Select your city —</option>
                        {origins.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem', color: '#666' }}>
                        Vehicle Type
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}>
                        {vehicles.map(v => (
                            <button
                                key={v.key}
                                onClick={() => setVehicle(v.key)}
                                style={{
                                    padding: '1rem 0.75rem', borderRadius: '10px', cursor: 'pointer', textAlign: 'center',
                                    border: vehicle === v.key ? '2px solid #0a0a0a' : '2px solid #e5e7eb',
                                    background: vehicle === v.key ? '#0a0a0a' : 'white',
                                    color: vehicle === v.key ? 'white' : '#333',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{v.img}</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: '700' }}>{v.name}</div>
                                <div style={{ fontSize: '0.65rem', marginTop: '2px', opacity: 0.7 }}>{v.pax} pax</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#666' }}>
                            Passengers
                        </label>
                        <select
                            value={passengers}
                            onChange={e => setPassengers(Number(e.target.value))}
                            style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '2px solid #e5e7eb', fontSize: '1rem' }}
                        >
                            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} pax</option>)}
                        </select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', paddingBottom: '14px' }}>
                            <input
                                type="checkbox"
                                checked={roundTrip}
                                onChange={e => setRoundTrip(e.target.checked)}
                                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                            />
                            <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>Round Trip</span>
                        </label>
                    </div>
                </div>

                <Link
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'block', width: '100%', padding: '16px', borderRadius: '10px',
                        background: '#25D366', color: 'white', textAlign: 'center',
                        fontSize: '1rem', fontWeight: '800', textDecoration: 'none',
                        letterSpacing: '0.5px'
                    }}
                >
                    GET QUOTE ON WHATSAPP
                </Link>
            </div>

            <div style={{ marginTop: '1.5rem', background: '#f9f9f9', borderRadius: '10px', padding: '1.25rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: '#555', margin: 0 }}>
                    We'll reply with a <strong>fixed price</strong> instantly — toll included, no hidden fees.
                </p>
            </div>
        </div>
    );
}
