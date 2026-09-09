import { Link } from 'react-router-dom'
import { company } from '../../data/company'
import { navigation } from '../../data/navigation'
import { services } from '../../data/services'
import { Container } from '../ui/Container'
import { BrandMark } from './BrandMark'
export function Footer() {
 const year = new Date().getFullYear()
 return <footer className="bg-deep-charcoal text-white"><Container><div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]"><div><BrandMark inverted /><p className="mt-6 max-w-xs leading-7 text-white/70">{company.description}</p></div><div><h2 className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">Navigate</h2><ul className="mt-5 space-y-3">{navigation.map(item => <li key={item.to}><Link className="text-sm text-white/75 transition-colors hover:text-white" to={item.to}>{item.label}</Link></li>)}</ul></div><div><h2 className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">Services</h2><ul className="mt-5 space-y-3">{services.map(service => <li key={service.id}><Link className="text-sm text-white/75 transition-colors hover:text-white" to="/services">{service.title}</Link></li>)}</ul></div><div><h2 className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">Service area</h2><p className="mt-5 text-sm leading-6 text-white/75">Serving all over {company.serviceArea}.</p><p className="mt-5 text-sm leading-6 text-white/55">Phone, email and Facebook details will be added after final verification.</p></div></div><div className="flex flex-col gap-3 border-t border-white/15 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"><p>© {year} {company.legalName}. All rights reserved.</p><p>Privacy and terms information to be supplied before launch.</p></div></Container></footer>
}
