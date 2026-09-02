import { PlaceholderPage } from './PlaceholderPage'
import { services } from '../data/services'
export function Services() { return <PlaceholderPage title="Our Services"><ul className="list-disc space-y-2 pl-5">{services.map((service) => <li key={service.id}>{service.title}</li>)}</ul></PlaceholderPage> }
