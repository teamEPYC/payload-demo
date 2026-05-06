import { Reveal, RevealStagger, Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

export function NumbersSection() {
  const { eyebrow, title, sub, items } = landing.numbers

  return (
    <Section tone="red" reveal={false}>
      <Reveal>
        <SectionHeading
          eyebrow={eyebrow}
          eyebrowVariant="paper"
          title={title}
          sub={sub}
          titleClassName="text-paper"
          subClassName="text-paper/90"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <RevealStagger>
          {items.map((n) => (
            <div
              key={n.label}
              className="border-ink-thick shadow-brut-lg bg-paper p-7 text-ink"
            >
              <div className="font-display text-5xl leading-none tracking-tight">{n.num}</div>
              <div className="mt-3.5 font-mono text-xs uppercase tracking-[0.08em] text-ink/70">
                {n.label}
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </Section>
  )
}
