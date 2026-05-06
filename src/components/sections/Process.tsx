import { Reveal, RevealStagger, Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

export function Process() {
  const { eyebrow, title, sub, steps } = landing.process

  return (
    <Section tone="yellow" id="process" reveal={false}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
      </Reveal>

      <div className="border-ink-thick mt-12 grid grid-cols-1 bg-ink md:grid-cols-5">
        <RevealStagger step={70}>
          {steps.map((step, i) => {
            const altBg = i === 1 || i === 3 ? 'bg-bg' : 'bg-paper'
            const isLast = i === steps.length - 1
            return (
              <div
                key={step.num}
                className={`min-h-[260px] p-6 ${altBg} ${
                  isLast
                    ? ''
                    : 'border-r-0 border-b-[3px] border-ink md:border-b-0 md:border-r-[3px]'
                }`}
              >
                <div className="font-display text-6xl leading-none tracking-tight text-red">
                  {step.num}
                </div>
                <h4 className="mt-3.5 font-display text-lg uppercase leading-tight tracking-tight">
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
