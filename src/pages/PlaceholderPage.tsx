import type { ReactNode } from 'react'

type PlaceholderPageProps = { title: string; children: ReactNode }
export function PlaceholderPage({ title, children }: PlaceholderPageProps) {
  return <main className="mx-auto max-w-6xl px-6 py-24"><h1 className="text-4xl font-semibold text-charcoal">{title}</h1><div className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">{children}</div></main>
}
