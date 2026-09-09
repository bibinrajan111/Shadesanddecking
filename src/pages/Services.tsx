import { CombinedSolutions } from '../components/sections/services/CombinedSolutions'
import { GettingStarted } from '../components/sections/services/GettingStarted'
import { ServiceFeature } from '../components/sections/services/ServiceFeature'
import { ServicesFinalCTA } from '../components/sections/services/ServicesFinalCTA'
import { ServicesHero } from '../components/sections/services/ServicesHero'
import { ServicesIntroduction } from '../components/sections/services/ServicesIntroduction'
import { services } from '../data/services'
export function Services(){return <><ServicesHero/><ServicesIntroduction/>{services.map((service,index)=><ServiceFeature key={service.id} service={service} index={index}/>) }<CombinedSolutions/><GettingStarted/><ServicesFinalCTA/></>}
