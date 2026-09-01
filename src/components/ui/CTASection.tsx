import type { ReactNode } from 'react'
import { Button } from './Button'
import { Container } from './Container'
type Action = { label: string; to?: string; href?: string; variant?: 'primary' | 'secondary' | 'outline' | 'text' }
type Props = { eyebrow?: string; heading: ReactNode; description?: ReactNode; primaryAction: Action; secondaryAction?: Action; variant?: 'dark' | 'light' }
export function CTASection({ eyebrow, heading, description, primaryAction, secondaryAction, variant = 'dark' }: Props) {
 const dark = variant === 'dark'
 return <section className={dark ? 'bg-deep-charcoal text-white' : 'bg-warm-grey text-charcoal'}><Container><div className="py-16 md:py-20"><p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">{eyebrow}</p><h2 className={`mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl ${dark ? 'text-white' : ''}`}>{heading}</h2>{description && <p className={`mt-5 max-w-2xl text-lg leading-8 ${dark ? 'text-white/75' : 'text-charcoal/75'}`}>{description}</p>}<div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button to={primaryAction.to} href={primaryAction.href} variant={primaryAction.variant ?? 'primary'}>{primaryAction.label}</Button>{secondaryAction && <Button to={secondaryAction.to} href={secondaryAction.href} variant={secondaryAction.variant ?? (dark ? 'outline' : 'secondary')} className={dark && !secondaryAction.variant ? 'border-white text-white hover:bg-white hover:text-charcoal' : ''}>{secondaryAction.label}</Button>}</div></div></Container></section>
}
