import type { Variants } from 'framer-motion'
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
export const motionConfig = { duration: 0.55, distance: 24, ease }
export const revealUp = (reduced = false, delay = 0): Variants => ({ hidden: { opacity: 0, y: reduced ? 0 : motionConfig.distance }, visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : motionConfig.duration, delay, ease } } })
export const fadeReveal = (reduced = false): Variants => ({ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: reduced ? 0 : motionConfig.duration, ease } } })
export const staggerContainer = (reduced = false): Variants => ({ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } } })
export const imageReveal = (reduced = false): Variants => ({ hidden: { opacity: 0, scale: reduced ? 1 : 1.04 }, visible: { opacity: 1, scale: 1, transition: { duration: reduced ? 0 : 0.7, ease } } })
