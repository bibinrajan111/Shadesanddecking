# Phase 7 quality assurance record

## Code-level review and fixes
- Added a branded 404 route so unknown SPA paths no longer render a blank route.
- Preserved the global overflow guard, responsive container gutters, reduced-motion CSS and component-level Framer Motion checks.
- Confirmed primary navigation, footer navigation and CTA destinations use internal router links; contact form fields use native labels, fieldsets, error references and status/alert announcements.
- The enquiry anchor now has scroll margin for the sticky header.

## Known test limitation
Dependency installation is blocked by the environment's npm registry access, so a production bundle, interactive keyboard test, viewport screenshots, browser console audit and Lighthouse run remain outstanding.

## Production verification required
1. Test 320–1920px breakpoints in Chrome, Firefox, Safari and Edge after dependencies install.
2. Replace every architectural image placeholder with approved, dimensioned, responsive photography and final descriptive alt text.
3. Verify the mobile menu's Escape handling, focus restoration and scroll lock in browsers.
4. Configure and test the secured enquiry endpoint, including server-side validation, honeypot rejection and rate limiting.
5. Supply official logo, final domain, public contact details, Facebook URL, privacy/legal text, and approved social image.
