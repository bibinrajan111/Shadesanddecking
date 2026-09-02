export type Project = { id: string; category: string; title: string; image: string; imageAlt: string; aspect: 'landscape' | 'portrait' | 'square' }
// Project imagery is intentionally blank until approved, owned photography is supplied.
export const featuredProjects: Project[] = [
  { id: 'pergola', category: 'Pergolas', title: 'Future pergola project', image: '', imageAlt: 'Placeholder for a Shades and Decking pergola project photograph', aspect: 'landscape' },
  { id: 'decking', category: 'Decking', title: 'Future decking project', image: '', imageAlt: 'Placeholder for a Shades and Decking decking project photograph', aspect: 'portrait' },
  { id: 'living', category: 'Outdoor living', title: 'Future outdoor living project', image: '', imageAlt: 'Placeholder for a Shades and Decking outdoor living project photograph', aspect: 'landscape' },
  { id: 'screens', category: 'Privacy screens', title: 'Future privacy screen project', image: '', imageAlt: 'Placeholder for a Shades and Decking privacy screen project photograph', aspect: 'square' },
]
