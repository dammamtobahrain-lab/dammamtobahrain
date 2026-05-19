export default function sitemap() {
    const baseUrl = 'https://dammamtobahrain.com';
    const now = new Date();

    return [
        { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
        { url: `${baseUrl}/booking`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
        { url: `${baseUrl}/fare-calculator`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/causeway-traffic`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/drivers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/routes/riyadh-to-bahrain-airport`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },

        // Services
        { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/services/visa-run`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/family-taxi`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/business-meetings`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/weekend-getaway`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/hotel-transfers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/airport-transfers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/dammam-airport-to-bahrain`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/khobar-to-bahrain`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/student-transport`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/services/pet-transport`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

        // Corporate
        { url: `${baseUrl}/corporate`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

        // Locations - High Priority
        { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/al-khobar`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/dammam`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/riyadh`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/jubail`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/bahrain`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/dhahran`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/locations/dammam-airport`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

        // Locations - Secondary
        { url: `${baseUrl}/locations/hofuf`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/ras-tanura`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/qatif`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/abqaiq`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/khafji`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/safaniya`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/tanajib`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/jeddah`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/dammam-sea-port`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/hofuf-airport`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/hafer-albaten`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/al-kharj`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/khurais`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/karsaniya`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/salwa`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/shedgum`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/udhailiyah`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/nariya`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/fadhli`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/haradh`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/uthmaniyah`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/manifa`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/hawiyah`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/abu-hadriyah`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/shaybah`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

        // Locations - Lower Priority
        { url: `${baseUrl}/locations/abu-ali-island`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/aindar`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/barri`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/duba`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/gazal`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/hawtah`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/harmaliyah`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/madrik`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/najan`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/naym`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/tinat`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/turaif`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/yanbu`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/jizan`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/najran`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

        // Destinations
        { url: `${baseUrl}/destinations/bahrain-airport`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/destinations/city-centre-mall`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/destinations/juffair`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/destinations/amwaj-islands`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },

        // Fleet
        { url: `${baseUrl}/fleet`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/fleet/camry`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/fleet/gmc-yukon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/fleet/lexus`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/fleet/hyundai-staria`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

        // Blog
        { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/blog/causeway-traffic-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/blog/visa-requirements`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/top-hotels-bahrain`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/cost-guide-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/dammam-to-bahrain-taxi-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/dammam-to-bahrain-bus-vs-taxi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/eid-travel-bahrain`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/blog/bahrain-grand-prix-travel`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/blog/expat-guide-bahrain`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

        // Info Pages
        { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/travel-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/contact-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
        { url: `${baseUrl}/terms-conditions`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    ];
}
