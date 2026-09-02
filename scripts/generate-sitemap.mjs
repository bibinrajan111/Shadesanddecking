import { mkdirSync, writeFileSync } from 'node:fs'
const siteUrl = process.env.SITE_URL?.replace(/\/$/, '')
if (!siteUrl) { console.warn('SITE_URL is not set; keeping the sitemap template for local development.'); process.exit(0) }
const paths = ['/', '/about', '/services', '/contact']
const urls = paths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')
mkdirSync('dist', { recursive: true })
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
