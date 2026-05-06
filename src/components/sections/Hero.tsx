import { Button, Container } from '@/components/ui'
import { landing } from '@/content/landing'
import { HeroVisualCard } from './HeroVisualCard'

export function Hero() {
  const { tag, headline, sub, primaryCta, secondaryCta, note, stats } = landing.hero

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          {/* Left column */}
          <div>
            {/* Tag */}
            <div className="border-ink shadow-brut-sm mb-7 inline-flex items-center gap-2.5 bg-paper px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em]">
              <span className="block h-2.5 w-2.5 rounded-full border-[1.5px] border-ink bg-green" />
              {tag}
            </div>

            {/* Headline */}
            <h1 className="font-display uppercase tracking-tight leading-[0.95] text-[clamp(44px,6.2vw,86px)]">
              {headline.lead}{' '}
              <span className="border-ink shadow-brut my-1.5 inline-block bg-yellow px-3.5 py-0.5">
                {headline.hl}
              </span>{' '}
              {headline.mid}{' '}
              <span className="border-ink shadow-brut my-1.5 inline-block -rotate-[1.5deg] bg-red px-3.5 py-0.5 text-paper">
                {headline.hlRed}
              </span>{' '}
              {headline.tail}
            </h1>

            {/* Sub */}
            <p className="mt-7 max-w-xl text-lg leading-[1.5] text-ink/90">{sub}</p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={primaryCta.href} variant="yellow">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href}>{secondaryCta.label}</Button>
            </div>

            {/* Note */}
            <div className="mt-4 font-mono text-xs uppercase tracking-[0.05em] text-ink/60">
              {note}
            </div>

            {/* Stats */}
            <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat, i) => {
                const bg =
                  i === 0 ? 'bg-yellow' : i === 1 ? 'bg-paper -translate-y-2' : 'bg-blue text-paper'
                return (
                  <div
                    key={stat.label}
                    className={`border-ink shadow-brut p-5 ${bg}`}
                  >
                    <div className="font-display text-4xl leading-none tracking-tight">
                      {stat.num}
                    </div>
                    <div className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em]">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column */}
          <HeroVisualCard />
        </div>
      </Container>
    </section>
  )
}
