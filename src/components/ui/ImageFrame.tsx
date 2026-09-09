import type { ImgHTMLAttributes } from 'react'
type Props = ImgHTMLAttributes<HTMLImageElement> & { aspect?: 'landscape' | 'portrait' | 'square'; overlay?: boolean; hover?: boolean }
const aspects = { landscape: 'aspect-[4/3]', portrait: 'aspect-[3/4]', square: 'aspect-square' }
export function ImageFrame({ aspect = 'landscape', overlay = false, hover = false, className = '', alt, loading, ...props }: Props) {
 return <div className={`group relative overflow-hidden bg-warm-grey ${aspects[aspect]}`}>{<img alt={alt} loading={loading ?? 'lazy'} className={`h-full w-full object-cover ${hover ? 'transition-transform duration-500 group-hover:scale-[1.035]' : ''} ${className}`} {...props} />}{overlay && <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-charcoal/45 via-transparent to-transparent" />}</div>
}
