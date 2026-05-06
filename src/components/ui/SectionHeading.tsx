import { cn } from '@/lib/cn'
import { Eyebrow, type EyebrowVariant } from './Eyebrow'

export function SectionHeading({
  eyebrow,
  eyebrowVariant = 'ink',
  title,
  sub,
  titleClassName,
  subClassName,
}: {
  eyebrow?: string
  eyebrowVariant?: EyebrowVariant
  title: React.ReactNode
  sub?: React.ReactNode
  titleClassName?: string
  subClassName?: string
}) {
  return (
    <div>
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          'font-display uppercase tracking-tight leading-[0.98] max-w-4xl',
          'text-4xl md:text-5xl lg:text-6xl',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn('mt-5 max-w-2xl text-lg leading-relaxed', subClassName)}>{sub}</p>
      )}
    </div>
  )
}
