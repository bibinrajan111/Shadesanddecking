export type SeoConfig = { title: string; description: string; path: string; ogImage?: string }
export const seoByPath: Record<string, SeoConfig> = {
 '/': { title: 'Premium Pergolas, Decking & Outdoor Living Solutions | Shades and Decking NZ', description: 'Premium pergolas, shade structures, decking, privacy screens, fencing and custom outdoor living solutions for New Zealand homes.', path: '/' },
 '/about': { title: 'About Shades and Decking NZ Limited | Premium Outdoor Living Solutions', description: 'Learn about Shades and Decking NZ Limited and our quality-focused approach to custom pergolas, decking, shade structures and outdoor living for New Zealand homes.', path: '/about' },
 '/services': { title: 'Pergolas, Decking & Outdoor Living Solutions | Shades and Decking NZ', description: 'Explore tailored pergolas, shade structures, decking, privacy screens, fencing, design and build, and custom outdoor living solutions across New Zealand.', path: '/services' },
 '/contact': { title: 'Contact Shades and Decking NZ | Free Consultation & Quote', description: 'Contact Shades and Decking NZ Limited to discuss pergolas, decking, shade structures, privacy screens and custom outdoor living solutions.', path: '/contact' },
}
