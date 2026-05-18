export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/admin/login/', '/api/', '/private/'],
            },
        ],
        sitemap: 'https://dammamtobahrain.com/sitemap.xml',
    }
}
