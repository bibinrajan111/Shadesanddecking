import { Link } from 'react-router-dom'
import { ImageFrame } from './ImageFrame'
type Props = { title: string; description: string; to: string; image?: string; imageAlt: string; category?: string }
export function ServiceCard({ title, description, to, image, imageAlt, category }: Props) {
 return <article className="group border border-warm-grey bg-white"><Link to={to} className="block focus:outline-none">{image ? <ImageFrame src={image} alt={imageAlt} overlay hover /> : <div className="aspect-[4/3] bg-charcoal/10" aria-label={imageAlt} role="img" />}<div className="border-t-2 border-transparent p-6 transition-colors group-hover:border-timber"><p className="text-xs font-bold uppercase tracking-[0.17em] text-timber">{category ?? 'Outdoor living'}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-charcoal">{title}</h3><p className="mt-3 leading-7 text-charcoal/75">{description}</p><span className="mt-5 inline-block text-sm font-semibold text-charcoal group-hover:text-timber">Explore service <span aria-hidden="true">→</span></span></div></Link></article>
}
