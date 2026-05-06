import { Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

export function ProblemSection() {
  const { eyebrow, title, paragraphs, callout } = landing.problem

  return (
    <Section tone="ink" id="problem">
      <SectionHeading
        eyebrow={eyebrow}
        eyebrowVariant="red"
        title={title}
        titleClassName="text-paper"
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-[17px] leading-[1.6] text-paper/80 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>

        <aside className="border-ink bg-yellow p-6 text-ink shadow-[8px_8px_0_0_var(--color-red)]">
          <h4 className="mb-2.5 font-mono text-xs font-bold uppercase tracking-[0.12em]">
            {callout.title}
          </h4>
          <p className="font-display text-2xl uppercase leading-tight tracking-tight">
            {callout.body}
          </p>
        </aside>
      </div>
    </Section>
  )
}
