import { company } from './company'

export type SeoConfig = { title: string; description: string; path: string }
export const seoByPath: Record<string, SeoConfig> = {
  '/': { title: 'Premium Pergolas, Decking & Outdoor Living | Shades and Decking NZ', description: company.description, path: '/' },
  '/about': { title: 'About Shades and Decking NZ Limited | Outdoor Living', description: 'Learn about the quality-focused approach behind Shades and Decking NZ.', path: '/about' },
  '/services': { title: 'Pergolas, Decking, Screens & Outdoor Living | Shades and Decking NZ', description: 'Explore pergolas, decking, screens, fencing and custom outdoor living solutions.', path: '/services' },
  '/contact': { title: 'Contact Shades and Decking NZ | Free Consultation & Quote', description: 'Start a conversation about your outdoor living project.', path: '/contact' },
}
