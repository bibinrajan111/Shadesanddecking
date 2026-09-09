import type { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & { size?: 'default' | 'wide' | 'narrow' }
const widths = { default: 'max-w-7xl', wide: 'max-w-[90rem]', narrow: 'max-w-3xl' }
export function Container({ size = 'default', className = '', ...props }: ContainerProps) {
  return <div className={`mx-auto w-full ${widths[size]} px-5 sm:px-8 lg:px-10 ${className}`} {...props} />
}
