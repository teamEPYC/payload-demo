import { cn } from '@/lib/cn'

export type ButtonVariant = 'default' | 'yellow' | 'red' | 'blue' | 'ink'

const VARIANT_CLS: Record<ButtonVariant, string> = {
  default: 'bg-paper text-ink',
  yellow: 'bg-yellow text-ink',
  red: 'bg-red text-paper',
  blue: 'bg-blue text-paper',
  ink: 'bg-ink text-paper',
}

const BASE = 'border-ink shadow-brut brut-hover inline-flex items-center gap-2 px-6 py-3 font-semibold cursor-pointer'

type CommonProps = {
  variant?: ButtonVariant
  className?: string
  children: React.ReactNode
}

type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string
  }

type ButtonElProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined
  }

export type ButtonProps = AnchorProps | ButtonElProps

export function Button(props: ButtonProps) {
  const { variant = 'default', className, children, ...rest } = props
  const cls = cn(BASE, VARIANT_CLS[variant], className)

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={cls}
    >
      {children}
    </button>
  )
}
