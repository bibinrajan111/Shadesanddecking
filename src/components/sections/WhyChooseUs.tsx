import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, revealUp } from '../../animations/variants'
import { FeatureCard } from '../ui/FeatureCard'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
const features = [
 ['01', 'Premium Quality', 'High-quality materials built to last.'], ['02', 'Built for NZ', 'Designed to withstand New Zealand conditions.'], ['03', 'Expert Workmanship', 'Skilled, reliable and detail-focused.'], ['04', 'Custom Solutions', 'Tailored designs to suit your home and lifestyle.'],
]
export function WhyChooseUs() { const reduced = useReducedMotion(); return <section className="bg-charcoal py-16 text-white md:py-24 lg:py-28"><Container><SectionHeading eyebrow="Why choose us" heading="Quality you can see. Service you can trust." description="A considered approach to outdoor living, from the materials selected to the details that finish the space." className="[&_h2]:text-white [&_div]:text-white/70" /><motion.div className="mt-12 grid gap-px overflow-hidden bg-white/15 md:grid-cols-2" variants={staggerContainer(reduced)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>{features.map(([number, title, description], index) => <motion.div variants={revealUp(reduced, index * 0.02)} key={title}><FeatureCard number={number} title={title} description={description} accent={index === 0} /></motion.div>)}</motion.div></Container></section> }
