export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/', '/private/'],
        },
        sitemap: 'https://dammamtobahrain.com/sitemap.xml',
    }
}
