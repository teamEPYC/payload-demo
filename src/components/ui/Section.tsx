import { cn } from '@/lib/cn'
import { Container } from './Container'
import { Reveal } from './Reveal'

export type SectionTone = 'default' | 'paper' | 'ink' | 'yellow' | 'red'

const TONE_CLS: Record<SectionTone, string> = {
  default: 'bg-bg text-ink',
  paper: 'bg-paper text-ink',
  ink: 'bg-ink text-paper',
  yellow: 'bg-yellow text-ink',
  red: 'bg-red text-paper',
}

export function Section({
  children,
  tone = 'default',
  bordered = true,
  reveal = true,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode
  tone?: SectionTone
  bordered?: boolean
  /** Wrap inner content in a scroll Reveal. Disable when the section composes its own reveals (e.g. staggered grids). */
  reveal?: boolean
  className?: string
  containerClassName?: string
  id?: string
}) {
  const inner = <Container className={containerClassName}>{children}</Container>
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-24',
        TONE_CLS[tone],
        bordered && 'border-ink-thick border-t',
        id && 'scroll-mt-nav',
        className,
      )}
    >
      {reveal ? <Reveal>{inner}</Reveal> : inner}
    </section>
  )
}
