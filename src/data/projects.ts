import { illustrativeImages } from './images'

export type Project = { id: string; category: string; title: string; image: string; imageAlt: string; aspect: 'landscape' | 'portrait' | 'square' }
// Illustrative imagery must be replaced with approved, ownedy before launch.
export const featuredProjects: Project[] = [
  { id: 'pergola', category: 'Pergolas', title: 'Future pergola project', image: illustrativeImages.pergola, imageAlt: 'Illustrative image for pergola', aspect: 'landscape' },
  { id: 'decking', category: 'Decking', title: 'Future decking project', image: illustrativeImages.decking, imageAlt: 'Illustrative image for decking', aspect: 'portrait' },
  { id: 'living', category: 'Outdoor living', title: 'Future outdoor living project', image: illustrativeImages.outdoor, imageAlt: 'Illustrative image for outdoor living', aspect: 'landscape' },
  { id: 'screens', category: 'Privacy screens', title: 'Future privacy screen project', image: illustrativeImages.screens, imageAlt: 'Illustrative image for privacy screen', aspect: 'square' },
]
