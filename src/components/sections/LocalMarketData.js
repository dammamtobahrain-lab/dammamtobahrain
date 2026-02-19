import { TrendingUp, Clock, DollarSign, Users, MapPin } from 'lucide-react';

const iconMap = {
    avgFare: DollarSign,
    monthlyTrips: Users,
    peakHours: Clock,
    demandTrend: TrendingUp,
    avgDuration: MapPin,
};

export default function LocalMarketData({ data, cityName }) {
    if (!data) return null;

    const stats = [
        { key: 'avgFare', label: 'Average Fare', value: data.avgFare },
        { key: 'monthlyTrips', label: 'Monthly Trips', value: data.monthlyTrips },
        { key: 'peakHours', label: 'Peak Hours', value: data.peakHours },
        { key: 'demandTrend', label: 'Demand Level', value: data.demandTrend },
        { key: 'avgDuration', label: 'Avg Duration', value: data.avgDuration },
    ].filter(s => s.value);

    return (
        <section style={{ margin: '3rem 0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Local Market Intelligence
                </span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                    {cityName} Route Statistics — 2026
                </h2>
                <p style={{ fontSize: '0.95rem' }}>
                    Real-time data from our {cityName} operations team, updated monthly.
                </p>
            </div>

            <div className="market-data-grid">
                {stats.map(({ key, label, value }) => {
                    const Icon = iconMap[key] || TrendingUp;
                    return (
                        <div key={key} className="market-stat-card">
                            <Icon size={24} color="var(--color-accent)" style={{ marginBottom: '0.5rem' }} />
                            <div className="stat-value">{value}</div>
                            <div className="stat-label">{label}</div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
