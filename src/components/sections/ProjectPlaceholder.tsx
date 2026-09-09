import { illustrativeImages } from '../../data/images'
type Props = { className?: string; label: string; priority?: boolean; src?: string }
export function ProjectPlaceholder({ className = '', label, priority = false, src = illustrativeImages.outdoor }: Props) {
 return <div className={`relative isolate overflow-hidden bg-charcoal ${className}`}><img src={src} alt={label} width="1600" height="1000" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/10 via-transparent to-deep-charcoal/45" /></div>
}
