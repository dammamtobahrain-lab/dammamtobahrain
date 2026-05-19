import Link from 'next/link';
import SchemaMarkup from '@/components/sections/SchemaMarkup';

export const metadata = {
    title: 'Best Time to Cross King Fahd Causeway | Traffic Guide 2026',
    description: 'When is the best time to cross King Fahd Causeway? Hourly traffic patterns, weekly wait times, peak seasons, and insider tips. Updated 2026 data.',
    alternates: { canonical: '/causeway-traffic/' },
};

const weeklyData = [
    { day: 'Sunday', morning: 'Low', afternoon: 'Low', evening: 'Low', night: 'Low', rating: 5, color: '#22c55e', tip: 'Best day to cross — minimal traffic in both directions.' },
    { day: 'Monday', morning: 'Low', afternoon: 'Low', evening: 'Low', night: 'Low', rating: 5, color: '#22c55e', tip: 'Excellent. Business travelers returning from weekend already passed.' },
    { day: 'Tuesday', morning: 'Low', afternoon: 'Low', evening: 'Moderate', night: 'Low', rating: 4, color: '#86efac', tip: 'Very good. Some evening business traffic but nothing serious.' },
    { day: 'Wednesday', morning: 'Low', afternoon: 'Moderate', evening: 'Moderate', night: 'Low', rating: 4, color: '#86efac', tip: 'Good. Mid-week crossings are comfortable. Avoid 3-6 PM.' },
    { day: 'Thursday', morning: 'Moderate', afternoon: 'HIGH', evening: 'PEAK', night: 'High', rating: 1, color: '#ef4444', tip: 'Worst day — everyone heading to Bahrain for weekend. Expect 1.5-3hr wait 3-10 PM.' },
    { day: 'Friday', morning: 'Low', afternoon: 'Moderate', evening: 'High', night: 'Moderate', rating: 2, color: '#f97316', tip: 'Morning is fine. Friday evening Bahrain→Saudi return traffic picks up.' },
    { day: 'Saturday', morning: 'Moderate', afternoon: 'HIGH', evening: 'PEAK', night: 'High', rating: 1, color: '#ef4444', tip: 'Second worst — return traffic to Saudi Arabia. 12-8 PM extremely congested.' },
];

const hourlyData = [
    { hour: '12 AM', sa_to_bh: 1, bh_to_sa: 1 },
    { hour: '2 AM', sa_to_bh: 1, bh_to_sa: 1 },
    { hour: '4 AM', sa_to_bh: 1, bh_to_sa: 1 },
    { hour: '6 AM', sa_to_bh: 2, bh_to_sa: 1 },
    { hour: '8 AM', sa_to_bh: 3, bh_to_sa: 2 },
    { hour: '10 AM', sa_to_bh: 3, bh_to_sa: 2 },
    { hour: '12 PM', sa_to_bh: 4, bh_to_sa: 3 },
    { hour: '2 PM', sa_to_bh: 5, bh_to_sa: 3 },
    { hour: '4 PM', sa_to_bh: 8, bh_to_sa: 3 },
    { hour: '6 PM', sa_to_bh: 9, bh_to_sa: 4 },
    { hour: '8 PM', sa_to_bh: 7, bh_to_sa: 5 },
    { hour: '10 PM', sa_to_bh: 5, bh_to_sa: 6 },
];

const peakSeasons = [
    { event: 'Eid Al-Fitr', period: 'End of Ramadan (3 days)', direction: 'Both', severity: 'Extreme', tip: 'Book 2 weeks in advance. Cross before 8 AM or after midnight to avoid 4-6 hour waits.' },
    { event: 'Eid Al-Adha', period: 'Dhul Hijja 10-13', direction: 'Both', severity: 'Extreme', tip: 'Same as Eid Al-Fitr. The return rush on Day 3 is particularly brutal.' },
    { event: 'Bahrain Grand Prix', period: 'March (F1 Weekend)', direction: 'SA → BH Fri, BH → SA Sun', severity: 'Very High', tip: 'Arrive early Friday morning. Sunday night return is nightmarish — depart before 4 PM.' },
    { event: 'Saudi National Day', period: 'September 23', direction: 'SA → BH', severity: 'High', tip: 'Many Saudis head to Bahrain. Thursday before National Day is the worst crossing.' },
    { event: 'UAE National Day', period: 'December 2', direction: 'Both', severity: 'Moderate', tip: 'Gulf residents traveling. Steady traffic but not extreme.' },
    { event: 'Summer Holidays', period: 'June – August', direction: 'Both', severity: 'Moderate-High', tip: 'Families traveling. Thursdays are still worst days. Mornings remain manageable.' },
    { event: 'School Year Start', period: 'September', direction: 'BH → SA', severity: 'Moderate', tip: 'Expat families returning. Saturday mornings see heavier reverse traffic.' },
];

export default function CausewayTrafficPage() {
    const maxVal = 10;

    return (
        <>
            <SchemaMarkup type="home" data={{
                breadcrumbs: [
                    { name: 'Home', href: '/' },
                    { name: 'Causeway Traffic Guide', href: '/causeway-traffic/' },
                ],
            }} />

            {/* Hero */}
            <div style={{ background: '#0a0a0a', color: 'white', padding: '4rem 0 3rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>TRAFFIC INTELLIGENCE</span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: '0.5rem 0 1rem', color: 'white', lineHeight: 1.2 }}>
                        King Fahd Causeway<br />Best Time to Cross
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.7 }}>
                        Data-backed traffic patterns for the King Fahd Causeway. Know exactly when to cross — and when to avoid — based on day, hour, and season.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        {[['🟢', 'Best: Sun–Wed morning'], ['🔴', 'Worst: Thu–Sat afternoon'], ['⚡', 'Updated 2026']].map(([icon, text]) => (
                            <span key={text} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '6px 14px', fontSize: '0.8rem' }}>{icon} {text}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* Quick Answer Box */}
                    <div style={{ background: '#f0fdf4', border: '2px solid #22c55e', borderRadius: '16px', padding: '2rem', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', color: '#15803d' }}>⚡ Quick Answer</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <div>
                                <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#15803d', marginBottom: '0.25rem' }}>BEST TIME (SA → BH)</div>
                                <div style={{ fontWeight: '700' }}>Sunday–Wednesday</div>
                                <div style={{ fontSize: '0.85rem', color: '#555' }}>Before 10 AM or after 9 PM</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#dc2626', marginBottom: '0.25rem' }}>AVOID (SA → BH)</div>
                                <div style={{ fontWeight: '700' }}>Thursday 3 PM – 10 PM</div>
                                <div style={{ fontSize: '0.85rem', color: '#555' }}>Wait times 1.5–3 hours</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#dc2626', marginBottom: '0.25rem' }}>AVOID (BH → SA)</div>
                                <div style={{ fontWeight: '700' }}>Saturday 12 PM – 8 PM</div>
                                <div style={{ fontSize: '0.85rem', color: '#555' }}>Weekend return rush</div>
                            </div>
                        </div>
                    </div>

                    {/* Weekly chart */}
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1.5rem' }}>Weekly Traffic by Day</h2>
                    <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '3rem' }}>
                        {weeklyData.map(d => (
                            <div key={d.day} style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: '1rem', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>{d.day}</div>
                                    <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} style={{ fontSize: '0.7rem', color: i < d.rating ? '#f59e0b' : '#ddd' }}>★</span>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.5 }}>{d.tip}</div>
                                <div style={{ background: d.color, color: 'white', borderRadius: '8px', padding: '4px 12px', fontSize: '0.7rem', fontWeight: '800', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                    {d.rating >= 4 ? 'CLEAR' : d.rating === 3 ? 'MODERATE' : d.rating === 2 ? 'BUSY' : 'AVOID'}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hourly chart */}
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>Hourly Congestion (Typical Thursday)</h2>
                    <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1.5rem' }}>Bar height = relative congestion level. Thursday is shown as worst-case reference.</p>
                    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '16px', padding: '2rem', marginBottom: '3rem', overflowX: 'auto' }}>
                        <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end', height: '120px', minWidth: '600px' }}>
                            {hourlyData.map(h => (
                                <div key={h.hour} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '90px' }}>
                                        <div style={{ width: '12px', height: `${(h.sa_to_bh / maxVal) * 90}px`, background: '#0a0a0a', borderRadius: '3px 3px 0 0', transition: 'height 0.3s' }} title={`SA→BH: ${h.sa_to_bh}/10`} />
                                        <div style={{ width: '12px', height: `${(h.bh_to_sa / maxVal) * 90}px`, background: 'var(--color-accent)', borderRadius: '3px 3px 0 0', transition: 'height 0.3s' }} title={`BH→SA: ${h.bh_to_sa}/10`} />
                                    </div>
                                    <div style={{ fontSize: '0.6rem', color: '#888', textAlign: 'center' }}>{h.hour}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', fontSize: '0.75rem' }}>
                            <span><span style={{ display: 'inline-block', width: '12px', height: '12px', background: '#0a0a0a', borderRadius: '2px', marginRight: '4px', verticalAlign: 'middle' }} />SA → Bahrain</span>
                            <span><span style={{ display: 'inline-block', width: '12px', height: '12px', background: 'var(--color-accent)', borderRadius: '2px', marginRight: '4px', verticalAlign: 'middle' }} />Bahrain → SA</span>
                        </div>
                    </div>

                    {/* Peak Seasons */}
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1.5rem' }}>Peak Seasons & Events</h2>
                    <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
                        {peakSeasons.map(s => (
                            <div key={s.event} style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <div>
                                        <span style={{ fontWeight: '800', fontSize: '1rem' }}>{s.event}</span>
                                        <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '0.75rem' }}>{s.period}</span>
                                    </div>
                                    <span style={{
                                        background: s.severity === 'Extreme' ? '#fee2e2' : s.severity === 'Very High' ? '#ffedd5' : '#fef9c3',
                                        color: s.severity === 'Extreme' ? '#dc2626' : s.severity === 'Very High' ? '#ea580c' : '#854d0e',
                                        borderRadius: '20px', padding: '3px 12px', fontSize: '0.7rem', fontWeight: '800'
                                    }}>
                                        {s.severity}
                                    </span>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: '#555' }}>
                                    <strong>Direction:</strong> {s.direction} &nbsp;·&nbsp; {s.tip}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pro Tips */}
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1.5rem' }}>Insider Tips from Our Drivers</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                        {[
                            { tip: 'The last 2 hours before midnight on Thursdays are surprisingly fast — many people give up and wait until Friday morning.', driver: 'Ahmed, 6 years on the route' },
                            { tip: 'Saudi lane vs GCC lane: Saudi passport holders use the Saudi lane which is usually 30% faster. GCC/International use separate lanes.', driver: 'Mohammed, Dammam driver' },
                            { tip: 'The Bahrain side clears faster than the Saudi side on Thursday night. If you\'re returning Saturday, leave Bahrain before 11 AM.', driver: 'Khalid, Al Khobar specialist' },
                            { tip: 'Ramadan nights after Iftar (9-11 PM) are actually decent for crossing — people are eating, not driving.', driver: 'Omar, 8 years experience' },
                        ].map(t => (
                            <div key={t.driver} style={{ background: '#f9f9f9', border: '1px solid #eee', borderRadius: '12px', padding: '1.5rem' }}>
                                <div style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>💡</div>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem', color: '#333' }}>{t.tip}</p>
                                <div style={{ fontSize: '0.75rem', color: '#888', fontStyle: 'italic' }}>— {t.driver}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ background: '#0a0a0a', color: 'white', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>Ready to Cross? Book Your Transfer</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Our drivers know every causeway pattern. We time your pickup to avoid peak traffic.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/fare-calculator/" style={{ background: 'white', color: '#0a0a0a', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '0.9rem' }}>
                                CHECK PRICES
                            </Link>
                            <Link href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '0.9rem' }}>
                                BOOK ON WHATSAPP
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
