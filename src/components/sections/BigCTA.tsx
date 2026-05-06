import { Button, Container, Eyebrow, Reveal } from '@/components/ui'
import { landing } from '@/content/landing'

export function BigCTA() {
  const { eyebrow, title, sub, primaryCta, secondaryCta, note, aside } = landing.bigCta

  return (
    <section
      id="cta"
      className="border-ink-thick scroll-mt-nav border-y bg-yellow"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-[1.3fr_1fr]">
          {/* Left */}
          <Reveal variant="left">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display uppercase tracking-tight leading-[0.95] text-[clamp(40px,5vw,76px)]">
              {title.lead} <span className="text-red">{title.highlight}</span> {title.tail}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-[1.5]">{sub}</p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Button href={primaryCta.href} variant="ink">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href}>{secondaryCta.label}</Button>
            </div>
            <div className="mt-4 font-mono text-xs uppercase tracking-[0.05em] text-ink/60">
              {note}
            </div>
          </Reveal>

          {/* Right aside */}
          <Reveal variant="right" delay={120}>
          <aside className="border-ink-thick bg-ink p-7 text-paper shadow-[10px_10px_0_0_var(--color-red)]">
            <div className="font-display text-6xl leading-none tracking-tight text-yellow">
              {aside.spotsRemaining}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-paper/70">
              Spots remaining this quarter
            </div>
            <div className="mt-5 border-t-2 border-paper/20 pt-4">
              <div className="mb-1 font-mono text-xs uppercase tracking-[0.1em] text-paper/60">
                NEXT COHORT
              </div>
              <div className="font-display text-2xl text-paper">{aside.cohort}</div>
            </div>
          </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
