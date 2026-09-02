import { ContactDetails } from '../components/contact/ContactDetails'
import { ContactHero } from '../components/contact/ContactHero'
import { EnquiryForm } from '../components/contact/EnquiryForm'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
export function Contact(){return <><ContactHero/><section className="bg-warm-grey/40 py-16 md:py-24"><Container><div className="mb-10 max-w-2xl"><SectionHeading eyebrow="Your enquiry" heading="Tell us about your project." description="Get in touch to discuss your ideas and request a consultation and quote." /></div><div className="grid gap-6 lg:grid-cols-12"><div className="lg:col-span-4"><ContactDetails/></div><div className="lg:col-span-8"><EnquiryForm/></div></div></Container></section></>}
