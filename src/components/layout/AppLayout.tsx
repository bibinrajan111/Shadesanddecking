import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
export function AppLayout({ children }: { children: ReactNode }) {
 return <div className="flex min-h-screen flex-col overflow-x-clip"><a href="#main-content" className="sr-only fixed left-4 top-4 z-[60] bg-white px-4 py-3 text-charcoal shadow focus:not-sr-only">Skip to main content</a><Navbar /><main id="main-content" className="flex-1" tabIndex={-1}>{children}</main><Footer /></div>
}
