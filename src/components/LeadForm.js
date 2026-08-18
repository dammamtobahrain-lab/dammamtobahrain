"use client";

import { useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, Phone, CheckCircle2, AlertTriangle } from 'lucide-react';
import { getAttribution } from '@/utils/attribution';

const WHATSAPP_NUMBER = '966569487569';
const VEHICLE_OPTIONS = ['Sedan (Camry)', 'SUV (GMC Yukon)', 'Van (Hyundai Staria)', 'No preference'];
const LUGGAGE_OPTIONS = ['Hand luggage only', '1-2 bags', '3-4 bags', '5+ bags'];

function track(event, label) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', event, {
            event_category: 'Lead',
            event_label: label,
            page_location: window.location.pathname,
        });
    }
}

function todayIso() {
    return new Date().toISOString().slice(0, 10);
}

function buildWhatsAppMessage(f) {
    const lines = ['Hi, I just requested a quote.', ''];
    lines.push(`Pickup: ${f.pickup || '-'}`);
    lines.push(`Destination: ${f.destination || '-'}`);
    lines.push(`Date: ${f.travel_date || '-'}`);
    lines.push(`Time: ${f.pickup_time || '-'}`);
    lines.push(`Passengers: ${f.passengers || '-'}`);
    if (f.return_trip) lines.push(`Return: ${f.return_date || '-'} ${f.return_time || ''}`.trim());
    if (f.vehicle_type) lines.push(`Vehicle: ${f.vehicle_type}`);
    lines.push('', 'Please send me the price.');
    return lines.join('\n');
}

export default function LeadForm({ defaultPickup = '', defaultDestination = '', title = 'Get Your Quote', landingPage }) {
    const uid = useId();
    const pathname = usePathname();
    const hasStarted = useRef(false);

    const [fields, setFields] = useState({
        pickup: defaultPickup,
        destination: defaultDestination,
        travel_date: '',
        pickup_time: '',
        passengers: '2',
        whatsapp: '',
        return_trip: false,
        return_date: '',
        return_time: '',
        vehicle_type: '',
        luggage: '',
        notes: '',
        website: '', // honeypot
    });
    const [showMore, setShowMore] = useState(false);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const set = (field) => (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFields((f) => ({ ...f, [field]: value }));
        if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

    const markStarted = () => {
        if (!hasStarted.current) {
            hasStarted.current = true;
            track('quote_start', `Lead Form — ${pathname}`);
        }
    };

    const validateClient = () => {
        const e = {};
        if (!fields.pickup.trim()) e.pickup = 'Pickup location is required.';
        if (!fields.destination.trim()) e.destination = 'Destination is required.';
        if (!fields.travel_date) e.travel_date = 'Travel date is required.';
        if (!fields.pickup_time) e.pickup_time = 'Pickup time is required.';
        if (!fields.passengers || Number(fields.passengers) < 1) e.passengers = 'Select passenger count.';
        if (!fields.whatsapp.trim() || !/^\+?[0-9][0-9\s\-()]{6,18}[0-9]$/.test(fields.whatsapp.trim())) {
            e.whatsapp = 'Enter a valid WhatsApp number.';
        }
        if (fields.return_trip && !fields.return_date) e.return_date = 'Return date is required.';
        return e;
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const clientErrors = validateClient();
        if (Object.keys(clientErrors).length > 0) {
            setErrors(clientErrors);
            return;
        }

        setStatus('loading');
        setErrors({});

        const attribution = getAttribution();

        try {
            const res = await fetch('/api/leads/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...fields,
                    source: 'website_form',
                    landing_page: landingPage || pathname,
                    ...attribution,
                }),
            });

            const payload = await res.json().catch(() => ({}));

            if (res.ok && payload.success) {
                setStatus('success');
                track('quote_submit', `Lead Form — ${pathname}`);
                return;
            }

            if (res.status === 400 && payload.errors) {
                setErrors(payload.errors);
                setStatus('idle');
                return;
            }

            setStatus('error');
            track('quote_error', `Lead Form — ${pathname} — ${payload.reason || res.status}`);
        } catch {
            setStatus('error');
            track('quote_error', `Lead Form — ${pathname} — network`);
        }
    };

    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(fields))}`;

    if (status === 'success') {
        return (
            <div className="lead-form-panel lead-form-success">
                <CheckCircle2 size={40} color="#22c55e" strokeWidth={2.5} />
                <h3>Quote request received</h3>
                <p>We&apos;ve received your trip details. Our team will contact you shortly with your quote.</p>
                <div className="lead-form-actions-row">
                    <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', borderColor: '#25D366' }}>
                        <MessageCircle size={18} /> WHATSAPP US
                    </a>
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="btn btn-outline">
                        <Phone size={18} /> CALL NOW
                    </a>
                </div>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="lead-form-panel lead-form-error-panel">
                <AlertTriangle size={40} color="#dc2626" strokeWidth={2.5} />
                <h3>We couldn&apos;t submit your request right now</h3>
                <p>Please contact us directly on WhatsApp or by phone — your trip details are below and ready to send.</p>
                <div className="lead-form-actions-row">
                    <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', borderColor: '#25D366' }}>
                        <MessageCircle size={18} /> WHATSAPP NOW
                    </a>
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="btn btn-outline">
                        <Phone size={18} /> CALL NOW
                    </a>
                </div>
                <button type="button" className="lead-form-retry" onClick={() => setStatus('idle')}>
                    ← Edit details and try again
                </button>
            </div>
        );
    }

    return (
        <form className="lead-form" onSubmit={handleSubmit} onFocus={markStarted} noValidate>
            {title && <h3 className="lead-form-title">{title}</h3>}

            {/* Honeypot - hidden from real users */}
            <div className="lead-form-honeypot" aria-hidden="true">
                <label htmlFor={`${uid}-website`}>Company</label>
                <input
                    id={`${uid}-website`}
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={fields.website}
                    onChange={set('website')}
                />
            </div>

            <div className="lead-form-grid">
                <div className="lead-form-field">
                    <label htmlFor={`${uid}-pickup`}>Pickup Location</label>
                    <input id={`${uid}-pickup`} type="text" value={fields.pickup} onChange={set('pickup')} placeholder="e.g. Dammam, Al Khobar" required />
                    {errors.pickup && <span className="lead-form-error">{errors.pickup}</span>}
                </div>

                <div className="lead-form-field">
                    <label htmlFor={`${uid}-destination`}>Destination</label>
                    <input id={`${uid}-destination`} type="text" value={fields.destination} onChange={set('destination')} placeholder="e.g. Bahrain" required />
                    {errors.destination && <span className="lead-form-error">{errors.destination}</span>}
                </div>

                <div className="lead-form-field">
                    <label htmlFor={`${uid}-date`}>Travel Date</label>
                    <input id={`${uid}-date`} type="date" min={todayIso()} value={fields.travel_date} onChange={set('travel_date')} required />
                    {errors.travel_date && <span className="lead-form-error">{errors.travel_date}</span>}
                </div>

                <div className="lead-form-field">
                    <label htmlFor={`${uid}-time`}>Pickup Time</label>
                    <input id={`${uid}-time`} type="time" value={fields.pickup_time} onChange={set('pickup_time')} required />
                    {errors.pickup_time && <span className="lead-form-error">{errors.pickup_time}</span>}
                </div>

                <div className="lead-form-field">
                    <label htmlFor={`${uid}-passengers`}>Passengers</label>
                    <select id={`${uid}-passengers`} value={fields.passengers} onChange={set('passengers')} required>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? 'passenger' : 'passengers'}</option>
                        ))}
                    </select>
                    {errors.passengers && <span className="lead-form-error">{errors.passengers}</span>}
                </div>

                <div className="lead-form-field">
                    <label htmlFor={`${uid}-whatsapp`}>WhatsApp Number</label>
                    <input id={`${uid}-whatsapp`} type="tel" value={fields.whatsapp} onChange={set('whatsapp')} placeholder="+966 5xxxxxxxx" required />
                    {errors.whatsapp && <span className="lead-form-error">{errors.whatsapp}</span>}
                </div>
            </div>

            <button type="button" className="lead-form-toggle" onClick={() => setShowMore((v) => !v)}>
                {showMore ? '− Hide trip details' : '+ Add trip details (optional)'}
            </button>

            {showMore && (
                <div className="lead-form-grid lead-form-grid-optional">
                    <div className="lead-form-field lead-form-checkbox">
                        <label htmlFor={`${uid}-return`}>
                            <input id={`${uid}-return`} type="checkbox" checked={fields.return_trip} onChange={set('return_trip')} />
                            Return trip
                        </label>
                    </div>

                    {fields.return_trip && (
                        <>
                            <div className="lead-form-field">
                                <label htmlFor={`${uid}-return-date`}>Return Date</label>
                                <input id={`${uid}-return-date`} type="date" min={fields.travel_date || todayIso()} value={fields.return_date} onChange={set('return_date')} />
                                {errors.return_date && <span className="lead-form-error">{errors.return_date}</span>}
                            </div>
                            <div className="lead-form-field">
                                <label htmlFor={`${uid}-return-time`}>Return Time</label>
                                <input id={`${uid}-return-time`} type="time" value={fields.return_time} onChange={set('return_time')} />
                            </div>
                        </>
                    )}

                    <div className="lead-form-field">
                        <label htmlFor={`${uid}-vehicle`}>Vehicle Type</label>
                        <select id={`${uid}-vehicle`} value={fields.vehicle_type} onChange={set('vehicle_type')}>
                            <option value="">No preference</option>
                            {VEHICLE_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </div>

                    <div className="lead-form-field">
                        <label htmlFor={`${uid}-luggage`}>Luggage</label>
                        <select id={`${uid}-luggage`} value={fields.luggage} onChange={set('luggage')}>
                            <option value="">Not specified</option>
                            {LUGGAGE_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </div>

                    <div className="lead-form-field lead-form-field-wide">
                        <label htmlFor={`${uid}-notes`}>Additional Notes</label>
                        <textarea id={`${uid}-notes`} rows={2} maxLength={500} value={fields.notes} onChange={set('notes')} placeholder="Flight number, child seat, meeting point, etc." />
                    </div>
                </div>
            )}

            <button type="submit" className="btn btn-primary lead-form-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'SENDING…' : 'GET MY QUOTE'}
            </button>

            <a href={waHref} target="_blank" rel="noopener noreferrer" className="lead-form-wa-alt">
                or Request Quote on WhatsApp
            </a>

            <p className="lead-form-privacy">
                By submitting this form, you agree that we may use your details to respond to your transport enquiry.
            </p>
        </form>
    );
}
