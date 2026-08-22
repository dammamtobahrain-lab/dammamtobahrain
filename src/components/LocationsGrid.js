import Link from 'next/link';

const regions = [
    {
        name: 'Eastern Province',
        locations: [
            { name: "Al Khobar", url: "/locations/al-khobar/" },
            { name: "Dammam City", url: "/locations/dammam/" },
            { name: "Dammam Airport (DMM)", url: "/locations/dammam-airport/" },
            { name: "Dammam Sea Port", url: "/locations/dammam-sea-port/" },
            { name: "Dhahran", url: "/locations/dhahran/" },
            { name: "Jubail", url: "/locations/jubail/" },
            { name: "Qatif", url: "/locations/qatif/" },
            { name: "Ras Tanura", url: "/locations/ras-tanura/" },
            { name: "Abqaiq", url: "/locations/abqaiq/" },
            { name: "Hofuf (Al Ahsa)", url: "/locations/hofuf/" },
            { name: "Hofuf Airport (HOF)", url: "/locations/hofuf-airport/" },
            { name: "Khafji", url: "/locations/khafji/" },
            { name: "Udhailiyah", url: "/locations/udhailiyah/" },
            { name: "Shaybah", url: "/locations/shaybah/" },
            { name: "Hafer Al Baten", url: "/locations/hafer-albaten/" },
            { name: "Salwa", url: "/locations/salwa/" },
        ],
    },
    {
        name: 'Riyadh Region',
        locations: [
            { name: "Riyadh", url: "/locations/riyadh/" },
            { name: "Al Kharj", url: "/locations/al-kharj/" },
        ],
    },
    {
        name: 'Other Saudi Cities',
        locations: [
            { name: "Jeddah", url: "/locations/jeddah/" },
            { name: "Yanbu", url: "/locations/yanbu/" },
            { name: "Najran", url: "/locations/najran/" },
            { name: "Jizan", url: "/locations/jizan/" },
            { name: "Turaif / Northern Borders", url: "/locations/turaif/" },
            { name: "Duba", url: "/locations/duba/" },
        ],
    },
];

const industrialSites = [
    { name: "Abu Ali Island", url: "/locations/abu-ali-island/" },
    { name: "Abu Hadriyah", url: "/locations/abu-hadriyah/" },
    { name: "Aindar", url: "/locations/aindar/" },
    { name: "Barri", url: "/locations/barri/" },
    { name: "Fadhli", url: "/locations/fadhli/" },
    { name: "Gazal", url: "/locations/gazal/" },
    { name: "Haradh", url: "/locations/haradh/" },
    { name: "Harmaliyah", url: "/locations/harmaliyah/" },
    { name: "Hawiyah", url: "/locations/hawiyah/" },
    { name: "Hawtah", url: "/locations/hawtah/" },
    { name: "Karsaniya", url: "/locations/karsaniya/" },
    { name: "Khurais", url: "/locations/khurais/" },
    { name: "Madrik", url: "/locations/madrik/" },
    { name: "Manifa", url: "/locations/manifa/" },
    { name: "Najan", url: "/locations/najan/" },
    { name: "Nariya", url: "/locations/nariya/" },
    { name: "Naym", url: "/locations/naym/" },
    { name: "Safaniya", url: "/locations/safaniya/" },
    { name: "Shedgum", url: "/locations/shedgum/" },
    { name: "Tanajib", url: "/locations/tanajib/" },
    { name: "Tinat", url: "/locations/tinat/" },
    { name: "Uthmaniyah", url: "/locations/uthmaniyah/" },
];

export default function LocationsGrid() {
    return (
        <section className="section" style={{ background: '#f9f9f9', borderTop: '2px solid #000' }}>
            <div className="container">
                <h3 className="section-title" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', textAlign: 'center' }}>SAUDI CITIES WE SERVE</h3>

                {regions.map((region) => (
                    <div key={region.name} style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: '#666', marginBottom: '1rem' }}>{region.name}</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                            {region.locations.map((loc) => (
                                <Link key={loc.url} href={loc.url} style={{
                                    display: 'block',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    textDecoration: 'none',
                                    color: '#000',
                                    fontSize: '0.9rem',
                                    background: 'white',
                                    transition: 'all 0.2s'
                                }} className="hover:border-black">
                                    {loc.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: '700', color: '#888', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Industrial &amp; Remote Sites</p>
                    <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: '2' }}>
                        {industrialSites.map((loc, i) => (
                            <span key={loc.url}>
                                <Link href={loc.url} style={{ color: '#555', textDecoration: 'underline' }}>{loc.name}</Link>
                                {i < industrialSites.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
}
