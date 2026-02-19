
export async function GET() {
    const baseUrl = 'https://dammamtobahrain.com';

    // Helper to format date
    const formatDate = (date) => date.toISOString();

    const staticRoutes = [
        { url: baseUrl, changeFrequency: 'daily', priority: 1.0 },
        { url: `${baseUrl}/services`, changeFrequency: 'daily', priority: 1.0 },
        { url: `${baseUrl}/booking`, changeFrequency: 'daily', priority: 1.0 },
        { url: `${baseUrl}/locations`, changeFrequency: 'daily', priority: 0.9 },

        { url: `${baseUrl}/about-us`, changeFrequency: 'weekly', priority: 0.8 },

        // Services
        { url: `${baseUrl}/services/visa-run`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/family-taxi`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/business-meetings`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/weekend-getaway`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/hotel-transfers`, changeFrequency: 'weekly', priority: 0.9 },

        // Fleet
        { url: `${baseUrl}/fleet`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/fleet/camry`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/fleet/gmc-yukon`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/fleet/lexus`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/fleet/hyundai-staria`, changeFrequency: 'monthly', priority: 0.8 },

        { url: `${baseUrl}/corporate`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/travel-guide`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/faq`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/contact-us`, changeFrequency: 'monthly', priority: 0.7 },

        // Locations (Origin) - High Priority Landing Pages
        { url: `${baseUrl}/locations/al-khobar`, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/jubail`, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/riyadh`, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/dammam`, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/locations/bahrain`, changeFrequency: 'daily', priority: 0.9 },

        // Secondary Locations
        { url: `${baseUrl}/locations/hofuf`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/ras-tanura`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/qatif`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/abqaiq`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/dhahran`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/locations/khafji`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/safaniya`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/tanajib`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/shaybah`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/jeddah`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/dammam-sea-port`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/nariya`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/fadhli`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/haradh`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/uthmaniyah`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/manifa`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/hawiyah`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/dammam-airport`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/locations/hofuf-airport`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/abu-ali-island`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/abu-hadriyah`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/aindar`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/barri`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/duba`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/gazal`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/hafer-albaten`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/hawtah`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/harmaliyah`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/al-kharj`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/khurais`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/karsaniya`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/madrik`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/najan`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/naym`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/salwa`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/shedgum`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/tinat`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/turaif`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/udhailiyah`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/locations/yanbu`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/jizan`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/locations/najran`, changeFrequency: 'weekly', priority: 0.7 },

        // Drops - High Priority
        { url: `${baseUrl}/destinations/bahrain-airport`, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/destinations/city-centre-mall`, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/destinations/juffair`, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/destinations/amwaj-islands`, changeFrequency: 'daily', priority: 0.9 },

        // Blog
        { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/blog/causeway-traffic-guide`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/blog/visa-requirements`, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/top-hotels-bahrain`, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog/cost-guide-2026`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/dammam-to-bahrain-taxi-guide`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog/dammam-to-bahrain-bus-vs-taxi`, changeFrequency: 'monthly', priority: 0.8 },

        // Additional Services
        { url: `${baseUrl}/services/airport-transfers`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/dammam-airport-to-bahrain`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/khobar-to-bahrain`, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/services/student-transport`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/services/pet-transport`, changeFrequency: 'monthly', priority: 0.8 },

        // Legal
        { url: `${baseUrl}/privacy-policy`, changeFrequency: 'monthly', priority: 0.4 },
        { url: `${baseUrl}/terms-conditions`, changeFrequency: 'monthly', priority: 0.4 },

        // Specific Routes
        { url: `${baseUrl}/routes/riyadh-to-bahrain-airport`, changeFrequency: 'daily', priority: 1.0 },
    ].map(route => ({
        ...route,
        lastModified: new Date()
    }));


    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes.map(route => `
    <url>
        <loc>${route.url}</loc>
        <lastmod>${formatDate(route.lastModified)}</lastmod>
        <changefreq>${route.changeFrequency}</changefreq>
        <priority>${route.priority}</priority>
    </url>
    `).join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
