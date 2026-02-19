export default function SchemaMarkup({ type, data }) {
    const schemas = [];

    // LocalBusiness Schema
    if (type === 'location' || type === 'home') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://dammamtobahrain.com/#business',
            name: 'Dammam to Bahrain Taxi',
            description: 'Premium executive taxi service connecting Saudi Arabia and Bahrain via the King Fahd Causeway.',
            url: 'https://dammamtobahrain.com',
            telephone: '+13073464572',
            priceRange: '$$',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'King Fahd Road',
                addressLocality: 'Al Khobar',
                addressRegion: 'Eastern Province',
                postalCode: '31952',
                addressCountry: 'SA',
            },
            geo: data?.coordinates ? {
                '@type': 'GeoCoordinates',
                latitude: data.coordinates.lat,
                longitude: data.coordinates.lng,
            } : {
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
                ratingValue: '4.9',
                reviewCount: '500',
                bestRating: '5',
            },
            areaServed: data?.areaServed || [
                { '@type': 'City', name: 'Dammam' },
                { '@type': 'City', name: 'Al Khobar' },
                { '@type': 'City', name: 'Jubail' },
                { '@type': 'City', name: 'Bahrain' },
            ],
        });
    }

    // FAQ Schema
    if (data?.faqs && data.faqs.length > 0) {
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

    // BreadcrumbList Schema
    if (data?.breadcrumbs && data.breadcrumbs.length > 0) {
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

    // Service Schema
    if (type === 'service') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: data?.serviceName || 'Taxi Transfer Service',
            description: data?.serviceDescription || 'Premium taxi transfer service between Saudi Arabia and Bahrain.',
            provider: {
                '@type': 'LocalBusiness',
                name: 'Dammam to Bahrain Taxi',
            },
            areaServed: {
                '@type': 'Country',
                name: 'Saudi Arabia',
            },
            serviceType: 'Taxi Service',
        });
    }

    // Article Block
    if (type === 'article') {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: data?.headline,
            image: [
                'https://dammamtobahrain.com/images/hero.png',
            ],
            datePublished: data?.datePublished,
            dateModified: data?.datePublished,
            author: [{
                '@type': 'Organization',
                name: 'Dammam to Bahrain Taxi',
                url: 'https://dammamtobahrain.com'
            }]
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
