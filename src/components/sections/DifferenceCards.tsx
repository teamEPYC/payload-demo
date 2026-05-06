import { Reveal, RevealStagger, Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

const CARD_BG = ['bg-yellow text-ink', 'bg-pink text-ink', 'bg-blue text-paper']

export function DifferenceCards() {
  const { eyebrow, title, sub, cards } = landing.difference

  return (
    <Section tone="default" reveal={false}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <RevealStagger>
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`border-ink-thick shadow-brut-lg p-7 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_var(--color-ink)] ${CARD_BG[i]}`}
            >
              <div className="border-ink shadow-brut-sm mb-5 grid h-14 w-14 place-items-center bg-paper font-display text-2xl text-ink">
                {c.icon}
              </div>
              <h3 className="mb-3.5 font-display text-2xl uppercase leading-tight tracking-tight">
                {c.title}
              </h3>
              <p className="text-[15px] leading-[1.5]">{c.body}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </Section>
  )
}
