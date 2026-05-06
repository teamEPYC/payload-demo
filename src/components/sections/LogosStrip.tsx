import { Container, Reveal } from '@/components/ui'
import { landing, type LandingContent } from '@/content/landing'

export function LogosStrip({ data = landing.logos }: { data?: LandingContent['logos'] }) {
  const { title, items } = data

  return (
    <section className="border-ink-thick border-y bg-ink py-10 text-paper">
      <Container>
        <Reveal variant="fade" duration={500}>
          <div className="mb-7 text-center font-mono text-xs uppercase tracking-[0.15em] text-yellow">
            {title}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-display text-xl opacity-90">
            {items.map((logo) => (
              <span key={logo} className="border-2 border-paper/20 px-3.5 py-2">
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
