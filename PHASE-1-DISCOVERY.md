# Phase 1 — brand discovery and implementation brief

## Asset audit

The repository currently contains no uploaded logo, poster, project images, or other visual assets. A filesystem audit found only the initial README. Consequently, the official assets could not be visually inspected or incorporated in this phase. The website must not proceed to the visual build until the original logo and poster are supplied; the asset hand-off requirements are recorded in [`src/assets/README.md`](src/assets/README.md).

The following is an implementation brief derived strictly from the supplied project information. It does **not** infer a business history, contact details, credentials, reviews, address, service cities, trading hours, or project statistics.

## Confirmed content inventory

- **Brand:** Shades and Decking; legal name: Shades and Decking NZ Limited.
- **Positioning:** “Create. Relax. Enjoy.” and premium outdoor spaces built for New Zealand living.
- **Core message:** “Built with pride. Made to last.” and “Quality you can see. Service you can trust.”
- **Service area:** New Zealand / serving all over New Zealand.
- **Services:** Pergolas & Shade Structures; Decking; Privacy Screens & Fencing; Outdoor Living Solutions; Design & Build; and Custom Features.
- **Values:** quality materials, New Zealand-ready solutions, detail-focused workmanship, custom design, durability, and professional service.

## Design system proposal

### Colour roles

| Token | Value | Intended role |
| --- | --- | --- |
| `charcoal` | `#1C2025` | Primary type, navigation, dark architecture panels |
| `deep-charcoal` | `#111315` | Hero/footer foundations and high-contrast layers |
| `timber` | `#8A552F` | Primary action, active state, linework |
| `wood-brown` | `#6E4123` | Depth in timber accents and hover states |
| `bronze` | `#A56A35` | Small highlights only |
| `canvas` | `#F3F0EB` | Primary light surface |
| `warm-grey` | `#D8D3CC` | Borders, rules and quiet secondary surfaces |
| `white` | `#FFFFFF` | Cards and reversed content |

The principal balance is charcoal, canvas and timber. Borders, offsets and editorial image crops should evoke architectural materials rather than rounded application UI.

### Type, spacing and motion

- Use a strong modern sans-serif with large, compact headings and generous reading measure for body copy.
- Work from a 4px spacing rhythm; use square-to-subtle (not pill-shaped) corners and crisp 1px structural rules.
- Use Framer Motion reveal and stagger variants only for section entry, image masks and restrained hover states.
- Respect `prefers-reduced-motion`; never make motion essential to reading or navigation.

## Information architecture

| Route | Purpose |
| --- | --- |
| `/` | Conversion-focused overview: hero, approach, proof points, services, future projects, process and CTA |
| `/about` | Craft, material quality, New Zealand context and tailored approach without unverified history |
| `/services` | Editorial, alternating service sections generated from central service data |
| `/contact` | Validated enquiry form, verified contact methods and service selection |
| `/services/:slug` | Reserved expansion path for future individual service pages |
| `/projects` | Reserved future photography portfolio path |

## Architecture proposal

- `src/data` is the canonical source for company, navigation, SEO and service content.
- `src/components/layout` will contain responsive navigation, mobile menu and footer.
- `src/components/ui` will contain reusable container, CTA, section heading, image reveal, service card and feature card primitives.
- `src/pages` remains route-level and composes focused section components rather than holding repeated business content.
- `src/animations` centralises Framer Motion variants.
- `src/lib/firebase` remains an integration boundary only; Phase 1–2 does not install or simulate a contact backend.

## Implementation sequence after asset hand-off

1. Inspect logo/poster and update this brief with only verified visual and contact details.
2. Add original logo and optimised, owned project imagery; map imagery through `services.ts`.
3. Build shared layout and responsive navigation, including focus-managed mobile menu.
4. Build the home page’s editorial sections, then About, Services and Contact.
5. Add page metadata, canonical and social metadata, JSON-LD containing verified information only.
6. Add client-side contact validation, honeypot strategy and an explicit “not yet connected” submission state until a Firebase function is implemented.
7. Audit keyboard flow, contrast, reduced motion, responsive breakpoints and image performance.
8. Validate Firebase Hosting SPA rewrite and production build.
