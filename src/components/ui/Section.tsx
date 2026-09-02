import type { HTMLAttributes } from 'react'
import { Container } from './Container'

type SectionProps = HTMLAttributes<HTMLElement> & { spacing?: 'compact' | 'default' | 'large'; container?: boolean; containerSize?: 'default' | 'wide' | 'narrow' }
const spacingClasses = { compact: 'py-12 md:py-16', default: 'py-16 md:py-24 lg:py-28', large: 'py-20 md:py-28 lg:py-36' }
export function Section({ spacing = 'default', container = true, containerSize, className = '', children, ...props }: SectionProps) {
  const content = container ? <Container size={containerSize}>{children}</Container> : children
  return <section className={`${spacingClasses[spacing]} ${className}`} {...props}>{content}</section>
}
