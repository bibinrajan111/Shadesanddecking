import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { navigation } from './data/navigation'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Seo } from './components/ui/Seo'

export function App() {
  return <BrowserRouter><Seo /><header className="border-b border-warm-grey bg-canvas"><nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-5" aria-label="Main navigation"><NavLink className="mr-auto font-semibold text-charcoal" to="/">Shades and Decking</NavLink>{navigation.map(({ label, to }) => <NavLink key={to} className="text-sm text-charcoal hover:text-timber" to={to}>{label}</NavLink>)}</nav></header><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/contact" element={<Contact />} /></Routes></BrowserRouter>
}
