import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../../data/company'
import { seoByPath } from '../../data/seo'

export function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = seoByPath[pathname] ?? seoByPath['/']
    document.title = seo.title
    const canonical = `${company.siteUrl}${seo.path}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical)
  }, [pathname])
  return null
}
