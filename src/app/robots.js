export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/_next/',
        },
        sitemap: 'https://jobzenter.in/sitemap.xml',
    };
}
