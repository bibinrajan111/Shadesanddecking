import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Seo } from './components/ui/Seo'
import { StructuredData } from './components/ui/StructuredData'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { NotFound } from './pages/NotFound'
import { useRouteScrollRestoration } from './hooks/useRouteScrollRestoration'
function RoutedApp() { useRouteScrollRestoration(); return <><Seo /><StructuredData /><AppLayout><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></AppLayout></> }
export function App() { return <BrowserRouter><RoutedApp /></BrowserRouter> }
