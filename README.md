# Shades and Decking NZ website

A Phase 1–2 foundation for a premium React, TypeScript, Vite, Tailwind CSS and Framer Motion website.

## Current status

The official logo, poster and project photography are not present in the supplied repository. Phase 1 findings and the visual/technical plan are documented in [PHASE-1-DISCOVERY.md](PHASE-1-DISCOVERY.md). Do not start the full visual build or substitute the logo until those assets are added.

## Structure

- `src/data`: central company, service, navigation and SEO data
- `src/pages`: route-level page composition
- `src/components`: reusable UI and layout components
- `src/animations`: shared motion variants
- `src/lib/firebase`: future backend integration boundary
- `public`: crawler and hosting assets

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
firebase deploy --only hosting
```

Firebase Hosting SPA routing is defined in `firebase.json`. Confirm the canonical domain and replace the placeholder sitemap URLs before launch.
