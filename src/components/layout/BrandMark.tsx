import { Link } from 'react-router-dom'
import { company } from '../../data/company'
export function BrandMark({ inverted = false, onNavigate }: { inverted?: boolean; onNavigate?: () => void }) {
 return <Link to="/" onClick={onNavigate} className={`inline-flex min-h-11 items-center font-semibold leading-none tracking-[-0.04em] ${inverted ? 'text-white' : 'text-charcoal'}`} aria-label={`${company.name} home`}><span className="border-l-2 border-timber pl-3 text-lg sm:text-xl">Shades<br /><span className="font-normal">and Decking</span></span></Link>
}
