import { Reveal, RevealStagger, Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

const TONE = [
  { bg: 'bg-paper text-ink', lift: '' },
  { bg: 'bg-pink text-ink', lift: 'md:translate-y-4' },
  { bg: 'bg-yellow text-ink', lift: 'md:-translate-y-2' },
  { bg: 'bg-blue text-paper', lift: '' },
]

export function Testimonials() {
  const { eyebrow, title, sub, items } = landing.testimonials

  return (
    <Section tone="default" reveal={false}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <RevealStagger step={100}>
        {items.map((t, i) => {
          const tone = TONE[i % TONE.length]!
          return (
            <div
              key={t.name}
              className={`border-ink-thick shadow-brut-lg relative p-7 ${tone.bg} ${tone.lift}`}
            >
              <span
                className="block font-display text-5xl leading-none tracking-tight"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 mb-5 text-base leading-[1.5]">{t.quote}</blockquote>
              <div className="flex items-center gap-3.5 border-t-2 border-current pt-4">
                <div className="border-ink grid h-12 w-12 flex-shrink-0 place-items-center bg-paper font-display text-base text-ink">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[15px] font-bold">{t.name}</div>
                  <div className="font-mono text-xs opacity-80">{t.role}</div>
                </div>
              </div>
            </div>
          )
        })}
        </RevealStagger>
      </div>
    </Section>
  )
}
