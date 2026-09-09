# SEO audit — Phase 6

## Implemented
- Unique route-level titles and descriptions; canonical and Open Graph URLs are emitted only when `VITE_SITE_URL` is configured.
- Open Graph and Twitter card metadata is centrally controlled; page-specific `ogImage` support is ready for approved brand imagery.
- Organization, WebSite (when URL exists), and route-specific WebPage JSON-LD are emitted from verified company/page data only.
- Public pages are listed in a sitemap generated at build time from `SITE_URL`; robots allows crawling and references it.

## Deliberately excluded
LocalBusiness schema, address, phone, opening hours, ratings, reviews, service pricing, logo URL, Facebook `sameAs`, and Service schema are excluded because verified public values or substantive service-page content are not available.

## Hosting and rendering
This is a client-side rendered Vite SPA. Firebase Hosting rewrites make routes refreshable, but pre-rendering the four public routes is recommended before launch for more reliable first-pass indexing and social preview discovery. Keep the hosting rewrite and serve immutable hashed assets with long cache lifetimes.

## Production checklist
Set both `VITE_SITE_URL` and `SITE_URL` to the same final HTTPS canonical domain. Supply the official logo, approved Open Graph image, verified contact/social details and owned project imagery. Replace image placeholder alt text with descriptions of the actual project photographs.
