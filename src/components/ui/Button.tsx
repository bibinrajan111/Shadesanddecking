import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Shared = { children: ReactNode; variant?: 'primary' | 'secondary' | 'outline' | 'text'; icon?: ReactNode; className?: string }
type ButtonProps = Shared & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never; loading?: boolean }
type LinkProps = Shared & AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string; href?: string; loading?: never }
const variants = { primary: 'bg-timber text-white hover:bg-wood-brown', secondary: 'bg-charcoal text-white hover:bg-deep-charcoal', outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white', text: 'text-charcoal underline-offset-4 hover:text-timber hover:underline' }
const base = 'inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm font-semibold tracking-[0.04em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50'
export function Button({ children, variant = 'primary', icon, className = '', to, href, loading, ...props }: ButtonProps | LinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = <>{loading ? 'Loading…' : children}{!loading && icon}</>
  if (to) return <Link className={classes} to={to} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</Link>
  if (href) return <a className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</a>
  return <button className={classes} type="button" disabled={loading || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{content}</button>
}
