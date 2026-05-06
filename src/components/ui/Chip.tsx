import { cn } from '@/lib/cn'

export type ChipBg = 'paper' | 'yellow' | 'pink' | 'blue'

const BG_CLS: Record<ChipBg, string> = {
  paper: 'bg-paper text-ink',
  yellow: 'bg-yellow text-ink',
  pink: 'bg-pink text-ink',
  blue: 'bg-blue text-paper',
}

export function Chip({
  children,
  bg = 'paper',
  rotate = 0,
  className,
}: {
  children: React.ReactNode
  bg?: ChipBg
  rotate?: number
  className?: string
}) {
  return (
    <span
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      className={cn(
        'border-ink shadow-brut-sm inline-block px-4 py-2 text-sm font-semibold',
        BG_CLS[bg],
        className,
      )}
    >
      {children}
    </span>
  )
}
