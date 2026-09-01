import { motion, useReducedMotion } from 'framer-motion'
import { revealUp, staggerContainer } from '../../animations/variants'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
const steps = [
 ['01', 'Get in touch', 'Tell us about your project.'], ['02', 'Discuss your vision', 'Explore ideas and solutions for your outdoor space.'], ['03', 'Design & build', 'Bring the project together with quality workmanship and attention to detail.'], ['04', 'Relax & enjoy', 'Enjoy your new outdoor living space.'],
]
export function ProcessSection() { const reduced = useReducedMotion(); return <Section><SectionHeading eyebrow="Our process" heading="A clear path to a better outdoor space." /><motion.ol className="mt-12 grid border-l border-warm-grey md:grid-cols-4 md:border-l-0 md:border-t" variants={staggerContainer(reduced)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>{steps.map((step) => <motion.li key={step[0]} variants={revealUp(reduced)} className="relative border-b border-warm-grey px-6 pb-8 pt-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:last:border-r-0"><span className="absolute -left-[5px] top-8 h-2 w-2 bg-timber md:-top-[5px] md:left-7" /><p className="text-3xl font-semibold tracking-[-0.04em] text-timber">{step[0]}</p><h3 className="mt-8 text-xl font-semibold text-charcoal">{step[1]}</h3><p className="mt-3 leading-7 text-charcoal/75">{step[2]}</p></motion.li>)}</motion.ol></Section> }
