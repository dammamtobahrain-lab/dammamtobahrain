import Link from 'next/link';

export default function LocationsGrid() {
    const locations = [
        { name: "Abqaiq", url: "/locations/abqaiq" },
        { name: "Abu Ali Island", url: "/locations/abu-ali-island" },
        { name: "Abu Hadriyah", url: "/locations/abu-hadriyah" },
        { name: "Aindar", url: "/locations/aindar" },
        { name: "Al Kharj", url: "/locations/al-kharj" },
        { name: "Al Khobar", url: "/locations/al-khobar" },
        { name: "Bahrain", url: "/locations/bahrain" },
        { name: "Barri", url: "/locations/barri" },
        { name: "Dammam City", url: "/locations/dammam" },
        { name: "Dammam Airport (DMM)", url: "/locations/dammam-airport" },
        { name: "Dammam Sea Port", url: "/locations/dammam-sea-port" },
        { name: "Dhahran", url: "/locations/dhahran" },
        { name: "Duba", url: "/locations/duba" },
        { name: "Fadhli", url: "/locations/fadhli" },
        { name: "Gazal", url: "/locations/gazal" },
        { name: "Hafer Al Baten", url: "/locations/hafer-albaten" },
        { name: "Haradh", url: "/locations/haradh" },
        { name: "Harmaliyah", url: "/locations/harmaliyah" },
        { name: "Hawiyah", url: "/locations/hawiyah" },
        { name: "Hawtah", url: "/locations/hawtah" },
        { name: "Hofuf (Al Ahsa)", url: "/locations/hofuf" },
        { name: "Hofuf Airport (HOF)", url: "/locations/hofuf-airport" },
        { name: "Jeddah", url: "/locations/jeddah" },
        { name: "Jizan", url: "/locations/jizan" },
        { name: "Jubail", url: "/locations/jubail" },
        { name: "Karsaniya", url: "/locations/karsaniya" },
        { name: "Khafji", url: "/locations/khafji" },
        { name: "Khurais", url: "/locations/khurais" },
        { name: "Madrik", url: "/locations/madrik" },
        { name: "Manifa", url: "/locations/manifa" },
        { name: "Najan", url: "/locations/najan" },
        { name: "Najran", url: "/locations/najran" },
        { name: "Nariya", url: "/locations/nariya" },
        { name: "Naym", url: "/locations/naym" },
        { name: "Qatif", url: "/locations/qatif" },
        { name: "Ras Tanura", url: "/locations/ras-tanura" },
        { name: "Riyadh", url: "/locations/riyadh" },
        { name: "Safaniya", url: "/locations/safaniya" },
        { name: "Salwa", url: "/locations/salwa" },
        { name: "Shaybah", url: "/locations/shaybah" },
        { name: "Shedgum", url: "/locations/shedgum" },
        { name: "Tanajib", url: "/locations/tanajib" },
        { name: "Tinat", url: "/locations/tinat" },
        { name: "Turaif / Northern Borders", url: "/locations/turaif" },
        { name: "Udhailiyah", url: "/locations/udhailiyah" },
        { name: "Uthmaniyah", url: "/locations/uthmaniyah" },
        { name: "Yanbu", url: "/locations/yanbu" },
    ];

    return (
        <section className="section" style={{ background: '#f9f9f9', borderTop: '2px solid #000' }}>
            <div className="container">
                <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>AREAS WE SERVE</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                    {locations.map((loc) => (
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
        </section>
    );
}
