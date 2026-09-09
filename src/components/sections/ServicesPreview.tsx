import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from '../ui/ServiceCard'
import { services } from '../../data/services'
export function ServicesPreview() { const [featured, ...supporting] = services; return <Section id="services"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionHeading eyebrow="What we create" heading="Outdoor solutions with purpose in every detail." description="Explore the services that shape practical, welcoming spaces outside your home." /><Button to="/services" variant="text">View all services <span aria-hidden="true">→</span></Button></div><div className="mt-12 grid gap-5 lg:grid-cols-12"><AnimatedSection className="lg:col-span-7"><ServiceCard title={featured.title} description={featured.shortDescription} to="/services" image={featured.image} imageAlt={featured.imageAlt} category="Featured service" /></AnimatedSection><div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">{supporting.map((service, index) => <AnimatedSection key={service.id} delay={index * 0.05}><ServiceCard title={service.title} description={service.shortDescription} to="/services" image={service.image} imageAlt={service.imageAlt} /></AnimatedSection>)}</div></div></Section> }
