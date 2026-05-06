import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="wrap text-center py-20">
        <p className="font-mono text-xs uppercase tracking-[0.15em] bg-ink text-yellow inline-block px-3 py-1.5">
          // Phase A · Style Guide ready
        </p>
        <h1 className="mt-6 font-display text-5xl uppercase tracking-tight md:text-7xl">
          AIxGrowth
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg">
          The homepage will be assembled in Phase C. For now, review the design tokens and
          primitives.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/styleguide"
            className="border-ink shadow-brut brut-hover inline-flex items-center gap-2 px-6 py-3 font-semibold bg-yellow text-ink"
          >
            View Style Guide →
          </Link>
          <a
            href="/admin"
            className="border-ink shadow-brut brut-hover inline-flex items-center gap-2 px-6 py-3 font-semibold bg-paper text-ink"
          >
            Admin Panel
          </a>
        </div>
      </div>
    </main>
  )
}
