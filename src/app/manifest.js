export default function manifest() {
    return {
        name: 'Dammam to Bahrain Taxi',
        short_name: 'DTB Taxi',
        description: 'Reliable executive taxi service connecting Saudi Arabia and Bahrain.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
