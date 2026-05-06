import { cn } from '@/lib/cn'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('wrap', className)}>{children}</div>
}
