import { cn } from '@/lib/cn'

export type EyebrowVariant = 'ink' | 'red' | 'paper' | 'yellow'

const VARIANT_CLS: Record<EyebrowVariant, string> = {
  ink: 'bg-ink text-yellow',
  red: 'bg-red text-paper',
  paper: 'bg-paper text-red border-ink border',
  yellow: 'bg-yellow text-ink',
}

export function Eyebrow({
  children,
  variant = 'ink',
  className,
}: {
  children: React.ReactNode
  variant?: EyebrowVariant
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em]',
        VARIANT_CLS[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
