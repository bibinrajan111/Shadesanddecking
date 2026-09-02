import type { ReactNode } from 'react'
type Props = { eyebrow?: string; heading: ReactNode; description?: ReactNode; align?: 'left' | 'center'; className?: string }
export function SectionHeading({ eyebrow, heading, description, align = 'left', className = '' }: Props) {
 const alignment = align === 'center' ? 'mx-auto text-center' : ''
 return <div className={`max-w-2xl ${alignment} ${className}`}>{eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-timber">{eyebrow}</p>}<h2 className="text-3xl font-semibold tracking-[-0.035em] text-charcoal sm:text-4xl lg:text-5xl">{heading}</h2>{description && <div className="mt-5 text-base leading-7 text-charcoal/75 sm:text-lg">{description}</div>}</div>
}
