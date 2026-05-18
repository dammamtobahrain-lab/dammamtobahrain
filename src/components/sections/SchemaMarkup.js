export default function SchemaMarkup({ type, data }) {
    const schemas = [];

    // LocalBusiness & TaxiService Schema
    if (type === 'home' || type === 'location') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'TaxiService'],
            '@id': 'https://dammamtobahrain.com/#business',
            name: 'Dammam to Bahrain Taxi & Private Transfer',
            description: 'Premium executive taxi and private car service connecting Saudi Arabia and Bahrain via the King Fahd Causeway. Fixed rates, professional chauffeurs, and 24/7 availability.',
            url: 'https://dammamtobahrain.com',
            telephone: '+966569487569',
            priceRange: 'SAR 250 - SAR 1500',
            image: 'https://dammamtobahrain.com/images/hero.png',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'King Fahd Road',
                addressLocality: 'Al Khobar',
                addressRegion: 'Eastern Province',
                addressCountry: 'SA',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.2172,
                longitude: 50.1971,
            },
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.95',
                reviewCount: '520',
                bestRating: '5',
            },
            areaServed: [
                { '@type': 'City', name: 'Dammam' },
                { '@type': 'City', name: 'Al Khobar' },
                { '@type': 'City', name: 'Dhahran' },
                { '@type': 'City', name: 'Riyadh' },
                { '@type': 'City', name: 'Jubail' },
                { '@type': 'Country', name: 'Bahrain' },
            ],
            provider: {
                '@type': 'Organization',
                name: 'Dammam to Bahrain Taxi',
                logo: 'https://dammamtobahrain.com/logo.png'
            }
        });

        // FAQ Schema for Rich Snippets
        if (data?.faqs) {
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: data.faqs.map(faq => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                    },
                })),
            });
        }
    }

    // BreadcrumbList for SEO
    if (data?.breadcrumbs) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: data.breadcrumbs.map((crumb, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: crumb.name,
                item: `https://dammamtobahrain.com${crumb.href}`,
            })),
        });
    }

    if (schemas.length === 0) return null;

    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
