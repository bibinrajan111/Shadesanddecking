import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { revealUp } from '../../animations/variants'
type Props = { children: ReactNode; className?: string; delay?: number }
export function AnimatedSection({ children, className = '', delay = 0 }: Props) {
 const reduceMotion = useReducedMotion()
 return <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealUp(reduceMotion, delay)}>{children}</motion.div>
}
