import { Reveal, RevealStagger, Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

export function Process() {
  const { eyebrow, title, sub, steps } = landing.process

  return (
    <Section tone="yellow" id="process" reveal={false}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
      </Reveal>

      {/*
        Dividers come from the `bg-ink` container showing through the 3px grid
        gap — layout-independent, so the column count can change freely.
        5 steps don't divide evenly into 2 or 3 columns, so the last card
        spans the leftover cell to avoid an empty black gap.
      */}
      <div className="border-ink-thick mt-12 grid grid-cols-1 gap-[3px] bg-ink sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:[&>*:last-child]:col-span-2 xl:[&>*:last-child]:col-span-1">
        <RevealStagger step={70} className="h-full">
          {steps.map((step, i) => {
            const altBg = i === 1 || i === 3 ? 'bg-bg' : 'bg-paper'
            return (
              <div
                key={step.num}
                className={`h-full min-h-[260px] p-6 ${altBg}`}
              >
                <div className="font-display text-6xl leading-none tracking-tight text-red">
                  {step.num}
                </div>
                <h4 className="mt-3.5 font-display text-lg uppercase leading-tight tracking-tight break-words">
                  {step.title}
                </h4>
                <p className="mt-2.5 text-sm leading-[1.5] text-ink/80">{step.body}</p>
              </div>
            )
          })}
        </RevealStagger>
      </div>
    </Section>
  )
}
