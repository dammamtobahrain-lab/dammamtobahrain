'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

const STATUS_OPTIONS = ['new', 'contacted', 'quoted', 'confirmed', 'completed', 'cancelled', 'lost'];

export default function AdminDashboard() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login');
            } else {
                fetchLeads();
            }
        };
        checkUser();
    }, []);

    const fetchLeads = async () => {
        setLoading(true);
        setErrorMsg(null);
        const { data, error } = await supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching leads:', error);
            setErrorMsg(error.message);
        } else {
            setLeads(data || []);
        }
        setLoading(false);
    };

    const updateStatus = async (id, status) => {
        setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
        const { error } = await supabase.from('leads').update({ status }).eq('id', id);
        if (error) {
            console.error('Error updating status:', error);
            fetchLeads(); // revert to server truth on failure
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    if (loading) return <div className="admin-shell">Loading leads…</div>;

    return (
        <div className="admin-shell">
            <div className="admin-header">
                <h1 style={{ margin: 0, fontSize: '1.4rem' }}>Leads ({leads.length})</h1>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button onClick={fetchLeads} className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Refresh</button>
                    <button onClick={handleLogout} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Logout</button>
                </div>
            </div>

            {errorMsg && (
                <div style={{ background: '#fee2e2', color: '#dc2626', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                    Failed to load leads: {errorMsg}
                </div>
            )}

            {!errorMsg && leads.length === 0 && (
                <p style={{ color: 'var(--color-text-muted)' }}>No leads yet.</p>
            )}

            {leads.length > 0 && (
                <div className="admin-table-wrap">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Created</th>
                                <th>WhatsApp</th>
                                <th>Pickup</th>
                                <th>Destination</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Pax</th>
                                <th>Vehicle</th>
                                <th>Source</th>
                                <th>Landing Page</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead) => (
                                <tr key={lead.id}>
                                    <td>
                                        {new Date(lead.created_at).toLocaleDateString()}<br />
                                        <small style={{ color: '#888' }}>{new Date(lead.created_at).toLocaleTimeString()}</small>
                                    </td>
                                    <td>
                                        <a href={`https://wa.me/${(lead.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700 }}>
                                            {lead.whatsapp}
                                        </a>
                                    </td>
                                    <td>{lead.pickup}</td>
                                    <td>{lead.destination}</td>
                                    <td>{lead.travel_date}{lead.return_trip ? ` (+ return ${lead.return_date || ''})` : ''}</td>
                                    <td>{lead.pickup_time}</td>
                                    <td>{lead.passengers}</td>
                                    <td>{lead.vehicle_type || '—'}</td>
                                    <td>{lead.source}</td>
                                    <td style={{ maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={lead.landing_page}>
                                        {lead.landing_page || '—'}
                                    </td>
                                    <td>
                                        <select
                                            className="admin-status-select"
                                            value={lead.status}
                                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                                        >
                                            {STATUS_OPTIONS.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
