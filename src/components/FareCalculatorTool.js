'use client';

import { useState } from 'react';
import Link from 'next/link';

const routes = [
    { from: 'Al Khobar', to: 'Bahrain (Manama)', sedan: 180, suv: 280, staria: 320 },
    { from: 'Dhahran', to: 'Bahrain (Manama)', sedan: 170, suv: 270, staria: 310 },
    { from: 'Dammam City', to: 'Bahrain (Manama)', sedan: 200, suv: 300, staria: 340 },
    { from: 'Dammam Airport (DMM)', to: 'Bahrain (Manama)', sedan: 220, suv: 320, staria: 360 },
    { from: 'Dammam Sea Port', to: 'Bahrain (Manama)', sedan: 210, suv: 310, staria: 350 },
    { from: 'Qatif', to: 'Bahrain (Manama)', sedan: 220, suv: 320, staria: 360 },
    { from: 'Abqaiq', to: 'Bahrain (Manama)', sedan: 260, suv: 360, staria: 400 },
    { from: 'Ras Tanura', to: 'Bahrain (Manama)', sedan: 300, suv: 420, staria: 480 },
    { from: 'Jubail', to: 'Bahrain (Manama)', sedan: 320, suv: 440, staria: 500 },
    { from: 'Hofuf (Al-Ahsa)', to: 'Bahrain (Manama)', sedan: 380, suv: 520, staria: 580 },
    { from: 'Safaniya', to: 'Bahrain (Manama)', sedan: 550, suv: 720, staria: 800 },
    { from: 'Tanajib', to: 'Bahrain (Manama)', sedan: 480, suv: 640, staria: 720 },
    { from: 'Manifa', to: 'Bahrain (Manama)', sedan: 460, suv: 620, staria: 700 },
    { from: 'Khafji', to: 'Bahrain (Manama)', sedan: 650, suv: 850, staria: 950 },
    { from: 'Riyadh', to: 'Bahrain (Manama)', sedan: 950, suv: 1250, staria: 1400 },
    { from: 'Al Kharj', to: 'Bahrain (Manama)', sedan: 750, suv: 1000, staria: 1150 },
    { from: 'Jeddah', to: 'Bahrain (Manama)', sedan: 1100, suv: 1450, staria: 1650 },
    { from: 'Bahrain (Return)', to: 'Al Khobar / Dammam', sedan: 180, suv: 280, staria: 320 },
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
    const [result, setResult] = useState(null);

    const origins = [...new Set(routes.map(r => r.from))];

    const calculate = () => {
        const route = routes.find(r => r.from === from);
        if (!route) return;
        const base = route[vehicle];
        const total = roundTrip ? Math.round(base * 2 * 0.9) : base;
        setResult({ base, total, route, roundTrip });
    };

    const waMsg = result
        ? `https://wa.me/966569487569?text=Hi%2C%20I%20want%20to%20book%20a%20taxi%20from%20${encodeURIComponent(result.route.from)}%20to%20${encodeURIComponent(result.route.to)}%20(${vehicle}%2C%20${passengers}%20pax${roundTrip ? '%2C%20round%20trip' : ''}).%20Quoted%3A%20${result.total}%20SAR.`
        : 'https://wa.me/966569487569';

    return (
        <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 30px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>

                <div>
                    <label style={{ display: 'block', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#666' }}>
                        Pickup Location
                    </label>
                    <select
                        value={from}
                        onChange={e => { setFrom(e.target.value); setResult(null); }}
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
                                onClick={() => { setVehicle(v.key); setResult(null); }}
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
                                onChange={e => { setRoundTrip(e.target.checked); setResult(null); }}
                                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                            />
                            <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>Round Trip <span style={{ color: 'green', fontSize: '0.7rem' }}>(−10%)</span></span>
                        </label>
                    </div>
                </div>

                <button
                    onClick={calculate}
                    disabled={!from}
                    style={{
                        width: '100%', padding: '16px', borderRadius: '10px', border: 'none',
                        background: from ? '#0a0a0a' : '#ccc', color: 'white',
                        fontSize: '1rem', fontWeight: '800', cursor: from ? 'pointer' : 'not-allowed',
                        letterSpacing: '0.5px'
                    }}
                >
                    CALCULATE FARE
                </button>
            </div>

            {result && (
                <div style={{ marginTop: '2rem', background: '#0a0a0a', color: 'white', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                        {result.route.from} → {result.route.to}
                    </div>
                    <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '900', color: 'var(--color-accent)', lineHeight: 1 }}>
                        {result.total} SAR
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                        {roundTrip ? `Round trip (${result.base} × 2 − 10%)` : 'One-way fixed price'} · {vehicles.find(v => v.key === vehicle)?.name}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                        {['Toll included', 'No hidden fees', 'Free cancel 24h'].map(f => (
                            <span key={f} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '4px 10px', fontSize: '0.7rem' }}>✓ {f}</span>
                        ))}
                    </div>
                    <Link
                        href={waMsg}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '1rem' }}
                    >
                        BOOK THIS RIDE ON WHATSAPP
                    </Link>
                </div>
            )}
        </div>
    );
}
