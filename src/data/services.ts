export type Service = {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  seo: { title: string; description: string }
  image: string
  imageAlt: string
  callToAction: string
}

// Replace `image` values with optimised, owned project photography once supplied.
export const services: Service[] = [
  { id: 'pergolas', title: 'Pergolas & Shade Structures', slug: 'pergolas-and-shade-structures', shortDescription: 'Purposeful shade for outdoor living.', fullDescription: 'Pergolas and shade structures for considered outdoor spaces.', benefits: ['Tailored for your space', 'Built for New Zealand conditions'], seo: { title: 'Pergolas & Shade Structures | Shades and Decking NZ', description: 'Explore pergolas and shade structures for New Zealand outdoor living.' }, image: '', imageAlt: 'Pergola and shade structure project photography placeholder', callToAction: 'Discuss a shade structure' },
  { id: 'decking', title: 'Decking', slug: 'decking', shortDescription: 'Durable decking made for everyday living.', fullDescription: 'Decking solutions that connect your home with the outdoors.', benefits: ['Quality materials', 'Detail-focused workmanship'], seo: { title: 'Decking | Shades and Decking NZ', description: 'Explore premium decking solutions for New Zealand homes.' }, image: '', imageAlt: 'Decking project photography placeholder', callToAction: 'Discuss your decking' },
  { id: 'screens-fencing', title: 'Privacy Screens & Fencing', slug: 'privacy-screens-and-fencing', shortDescription: 'Privacy and definition with a refined finish.', fullDescription: 'Privacy screens and fencing tailored to your outdoor setting.', benefits: ['Custom solutions', 'Built to complement your home'], seo: { title: 'Privacy Screens & Fencing | Shades and Decking NZ', description: 'Explore privacy screens and fencing solutions.' }, image: '', imageAlt: 'Privacy screen and fencing project photography placeholder', callToAction: 'Discuss screens or fencing' },
  { id: 'outdoor-living', title: 'Outdoor Living Solutions', slug: 'outdoor-living-solutions', shortDescription: 'Spaces designed for time spent outdoors.', fullDescription: 'Outdoor living solutions that bring comfort, structure and style together.', benefits: ['Designed with purpose', 'Tailored to lifestyle'], seo: { title: 'Outdoor Living Solutions | Shades and Decking NZ', description: 'Explore tailored outdoor living solutions.' }, image: '', imageAlt: 'Outdoor living project photography placeholder', callToAction: 'Discuss your outdoor space' },
  { id: 'design-build', title: 'Design & Build', slug: 'design-and-build', shortDescription: 'A considered path from vision to build.', fullDescription: 'A practical, collaborative design and build approach for outdoor projects.', benefits: ['One considered process', 'Clear project direction'], seo: { title: 'Design & Build | Shades and Decking NZ', description: 'Explore outdoor design and build services.' }, image: '', imageAlt: 'Outdoor design and build project photography placeholder', callToAction: 'Start a conversation' },
  { id: 'custom-features', title: 'Custom Features', slug: 'custom-features', shortDescription: 'Details made for your space.', fullDescription: 'Custom outdoor features shaped around your home and lifestyle.', benefits: ['Tailored designs', 'Crafted details'], seo: { title: 'Custom Features | Shades and Decking NZ', description: 'Explore custom outdoor features.' }, image: '', imageAlt: 'Custom outdoor feature project photography placeholder', callToAction: 'Discuss a custom feature' },
]
