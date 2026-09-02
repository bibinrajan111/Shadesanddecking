const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
export const company = {
  name: 'Shades and Decking', legalName: 'Shades and Decking NZ Limited', positioning: 'Create. Relax. Enjoy.',
  description: 'Premium outdoor spaces built for New Zealand living.', promise: 'Built with pride. Made to last.',
  serviceArea: 'New Zealand', siteUrl: configuredSiteUrl,
  // Add only business details that have been verified for publication.
  contact: { phone: undefined, email: undefined, facebookUrl: undefined, address: undefined, openingHours: undefined },
} as const
