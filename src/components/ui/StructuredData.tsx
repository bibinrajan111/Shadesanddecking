import { useLocation } from 'react-router-dom'
import { company } from '../../data/company'
import { seoByPath } from '../../data/seo'
export function StructuredData(){const {pathname}=useLocation();const page=seoByPath[pathname]??seoByPath['/'];const pageUrl=company.siteUrl?`${company.siteUrl}${page.path}`:undefined;const organization={'@type':'Organization',name:company.legalName,alternateName:company.name,...(company.siteUrl?{url:company.siteUrl}:{})};const data={'@context':'https://schema.org','@graph':[organization,...(company.siteUrl?[{'@type':'WebSite',name:company.name,url:company.siteUrl}]:[]),{'@type':'WebPage',name:page.title,description:page.description,...(pageUrl?{url:pageUrl}:{})}]};return <script type="application/ld+json">{JSON.stringify(data)}</script>}
