import { cn } from '@/lib/cn'

export type CardBg = 'paper' | 'yellow' | 'blue' | 'pink' | 'ink' | 'red' | 'bg'
export type CardShadow = 'sm' | 'md' | 'lg' | 'xl' | 'none'
export type CardBorder = 'thin' | 'thick'

const BG_CLS: Record<CardBg, string> = {
  paper: 'bg-paper text-ink',
  yellow: 'bg-yellow text-ink',
  blue: 'bg-blue text-paper',
  pink: 'bg-pink text-ink',
  ink: 'bg-ink text-paper',
  red: 'bg-red text-paper',
  bg: 'bg-bg text-ink',
}

const SHADOW_CLS: Record<CardShadow, string> = {
  none: '',
  sm: 'shadow-brut-sm',
  md: 'shadow-brut',
  lg: 'shadow-brut-lg',
  xl: 'shadow-brut-xl',
}

const BORDER_CLS: Record<CardBorder, string> = {
  thin: 'border-ink',
  thick: 'border-ink-thick',
}

export function Card({
  children,
  bg = 'paper',
  shadow = 'md',
  border = 'thick',
  className,
}: {
  children: React.ReactNode
  bg?: CardBg
  shadow?: CardShadow
  border?: CardBorder
  className?: string
}) {
  return (
    <div className={cn('p-7', BG_CLS[bg], SHADOW_CLS[shadow], BORDER_CLS[border], className)}>
      {children}
    </div>
  )
}
