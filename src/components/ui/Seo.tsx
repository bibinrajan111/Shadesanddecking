import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../../data/company'
import { seoByPath } from '../../data/seo'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
 let node = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
 if (!node) { node = document.createElement('meta'); node.setAttribute(attribute, key); document.head.appendChild(node) }
 node.content = content
}
export function Seo() {
 const { pathname } = useLocation()
 useEffect(() => {
  const seo = seoByPath[pathname] ?? seoByPath['/']; const canonical = `${company.siteUrl}${seo.path}`
  document.title = seo.title
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
  link.href = canonical
  setMeta('name', 'description', seo.description); setMeta('property', 'og:title', seo.title); setMeta('property', 'og:description', seo.description); setMeta('property', 'og:url', canonical); setMeta('property', 'og:type', 'website'); setMeta('name', 'twitter:card', 'summary_large_image')
 }, [pathname])
 return null
}
