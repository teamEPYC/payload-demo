import { Button, Reveal, RevealStagger, Section, SectionHeading } from '@/components/ui'
import { landing, type LandingContent } from '@/content/landing'

export function Pricing({ data = landing.pricing }: { data?: LandingContent['pricing'] }) {
  const { eyebrow, title, sub, tiers } = data

  return (
    <Section tone="ink" id="pricing" reveal={false}>
      <Reveal>
        <SectionHeading
          eyebrow={eyebrow}
          eyebrowVariant="yellow"
          title={title}
          sub={sub}
          titleClassName="text-paper"
          subClassName="text-paper/80"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RevealStagger step={120}>
          {tiers.map((tier) => {
            const popular = !!tier.popular
            const surface = popular ? 'bg-yellow' : 'bg-paper'
            const shadow = popular
              ? 'shadow-[10px_10px_0_0_var(--color-red)]'
              : 'shadow-[10px_10px_0_0_var(--color-yellow)]'
            const lift = popular ? 'lg:-translate-y-3' : ''

            return (
              <div
                key={tier.name}
                className={`border-ink-thick relative p-7 text-ink ${surface} ${shadow} ${lift}`}
              >
                {popular && (
                  <div className="border-ink shadow-brut-sm absolute -top-3.5 right-5 bg-red px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-paper">
                    ★ MOST POPULAR
                  </div>
                )}

                <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-ink/60">
                  {tier.tag}
                </h4>
                <p className="mt-1 min-h-[42px] text-sm font-medium text-ink/80">{tier.sub}</p>

                <div className="mt-5 font-display text-5xl leading-none tracking-tight">
                  {tier.price}
                  <span className="ml-1 font-mono text-sm font-medium text-ink/60">
                    {tier.priceSuffix}
                  </span>
                </div>

                <ul className="mt-5 list-none border-t-2 border-ink p-0">
                  {tier.features.map((f, i) => {
                    const isLast = i === tier.features.length - 1
                    return (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 py-3 text-sm leading-[1.4] ${
                          isLast ? '' : 'border-b border-dashed border-ink/30'
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 font-display ${
                            popular ? 'text-ink' : 'text-red'
                          }`}
                          aria-hidden
                        >
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-6">
                  <Button href="#cta" variant={tier.ctaVariant} className="w-full justify-center">
                    {tier.ctaLabel}
                  </Button>
                </div>
              </div>
            )
          })}
        </RevealStagger>
      </div>
    </Section>
  )
}
