'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

export default function AdminDashboard() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prices, setPrices] = useState({}); // Store price inputs for each booking
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login');
            } else {
                setUser(session.user);
                fetchBookings();
            }
        };

        checkUser();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching bookings:', error);
        else setBookings(data || []);
        setLoading(false);
    };

    const handlePriceChange = (id, value) => {
        setPrices({ ...prices, [id]: value });
    };

    const sendWhatsApp = (booking) => {
        const price = prices[booking.id] || 'XXX';
        const message = `Hello ${booking.full_name}, thank you for booking with Dammam to Bahrain Taxi.%0A%0A` +
            `Trip: ${booking.pickup_city} to ${booking.dropoff_city}%0A` +
            `Date: ${booking.pickup_date}%0A` +
            `Time: ${booking.pickup_time} (KSA)%0A` +
            `Vehicle: ${booking.vehicle_type}%0A` +
            `Pax/Luggage: ${booking.passengers} Pax / ${booking.luggage} Bags%0A` +
            `Total Price: ${price} SAR%0A%0A` +
            `Please confirm if you would like to proceed.`;

        // Remove '+' and spaces from phone number for link
        const cleanPhone = booking.phone.replace(/[^0-9]/g, '');
        window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    if (loading) return <div style={{ padding: '2rem' }}>Loading bookings...</div>;

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid black', paddingBottom: '1rem', marginBottom: '2rem' }}>
                <h1 style={{ margin: 0 }}>ADMIN DASHBOARD</h1>
                <button onClick={handleLogout} style={{ background: 'black', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Logout</button>
            </div>

            <button onClick={fetchBookings} style={{ marginBottom: '1rem', padding: '10px', background: '#eee', border: '1px solid #ccc' }}>
                Refresh List
            </button>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                    <tr style={{ background: '#f0f0f0', textAlign: 'left' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name / Phone</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Trip Details</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Vehicle / Notes</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                {new Date(booking.created_at).toLocaleDateString()}<br />
                                <small>{new Date(booking.created_at).toLocaleTimeString()}</small>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <strong>{booking.full_name}</strong><br />
                                <a href={`https://wa.me/${booking.phone.replace(/[^0-9]/g, '')}`} target="_blank" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>{booking.phone}</a><br />
                                <span style={{ color: '#666', fontSize: '0.8rem' }}>{booking.email}</span>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <strong>From:</strong> {booking.pickup_city}<br />
                                <strong>To:</strong> {booking.dropoff_city}<br />
                                <div style={{ marginTop: '5px', color: 'blue' }}>
                                    📅 {booking.pickup_date || 'N/A'}<br />
                                    ⏰ {booking.pickup_time || 'N/A'} (KSA)
                                </div>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <strong>{booking.vehicle_type}</strong><br />
                                <span>👥 {booking.passengers} Pax | 💼 {booking.luggage} Bags</span><br />
                                <em style={{ color: '#888' }}>{booking.notes}</em>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                    <input
                                        type="text"
                                        placeholder="Price (SAR)"
                                        style={{ width: '80px', padding: '5px' }}
                                        value={prices[booking.id] || ''}
                                        onChange={(e) => handlePriceChange(booking.id, e.target.value)}
                                    />
                                    <button
                                        onClick={() => sendWhatsApp(booking)}
                                        style={{
                                            background: '#25D366', color: 'white', border: 'none',
                                            padding: '6px 12px', cursor: 'pointer', fontWeight: 'bold'
                                        }}
                                    >
                                        WhatsApp
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
