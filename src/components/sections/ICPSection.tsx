import { Chip, Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

const CHIP_PATTERN: Array<'paper' | 'yellow' | 'pink' | 'blue'> = [
  'paper',
  'yellow',
  'pink',
  'paper',
  'blue',
]
const ROTATIONS = [-1, 1, -2, 1, -1]

export function ICPSection() {
  const { eyebrow, title, paragraphs, industries } = landing.icp

  return (
    <Section tone="default">
      <div className="grid grid-cols-1 items-start gap-11 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </div>
        <div>
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-3.5 text-lg leading-[1.55] text-ink/90 last:mb-0">
              {p.bold ? <strong>{p.text}</strong> : p.text}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {industries.map((ind, i) => (
              <Chip
                key={ind}
                bg={CHIP_PATTERN[i % CHIP_PATTERN.length]}
                rotate={ROTATIONS[i % ROTATIONS.length]}
              >
                {ind}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
