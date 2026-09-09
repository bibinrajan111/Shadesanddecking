import type { ReactNode } from 'react'
type Props = { title: string; description: string; icon?: ReactNode; number?: string; accent?: boolean }
export function FeatureCard({ title, description, icon, number, accent = false }: Props) {
 return <article className={`border-l-2 p-6 ${accent ? 'border-timber bg-white' : 'border-warm-grey bg-canvas'}`}><div className="flex items-start justify-between gap-5">{icon && <span className="text-timber" aria-hidden="true">{icon}</span>}{number && <span className="text-sm font-bold tracking-[0.15em] text-timber">{number}</span>}</div><h3 className="mt-10 text-xl font-semibold text-charcoal">{title}</h3><p className="mt-3 leading-7 text-charcoal/75">{description}</p></article>
}
