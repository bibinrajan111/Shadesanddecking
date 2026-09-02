import { company } from './company'

export type SeoConfig = { title: string; description: string; path: string }
export const seoByPath: Record<string, SeoConfig> = {
  '/': { title: 'Premium Pergolas, Decking & Outdoor Living | Shades and Decking NZ', description: 'Premium pergolas, shade structures, decking, privacy screens, fencing and custom outdoor living solutions for New Zealand homes.', path: '/' },
  '/about': { title: 'About Shades and Decking NZ Limited | Premium Outdoor Living Solutions', description: 'Learn about Shades and Decking NZ Limited and our quality-focused approach to custom pergolas, decking, shade structures and outdoor living for New Zealand homes.', path: '/about' },
  '/services': { title: 'Pergolas, Decking, Screens & Outdoor Living | Shades and Decking NZ', description: 'Explore pergolas, decking, screens, fencing and custom outdoor living solutions.', path: '/services' },
  '/contact': { title: 'Contact Shades and Decking NZ | Free Consultation & Quote', description: 'Start a conversation about your outdoor living project.', path: '/contact' },
}
