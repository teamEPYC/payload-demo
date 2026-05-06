'use client'

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/cn'

export type RevealVariant = 'up' | 'left' | 'right' | 'fade'

const HIDDEN_CLS: Record<RevealVariant, string> = {
  up: 'opacity-0 translate-y-6',
  left: 'opacity-0 -translate-x-6',
  right: 'opacity-0 translate-x-6',
  fade: 'opacity-0',
}

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 700,
  className,
}: {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const style: CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: delay ? `${delay}ms` : undefined,
  }

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'transition-all ease-out will-change-transform',
        shown ? 'opacity-100 translate-x-0 translate-y-0' : HIDDEN_CLS[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

export function RevealStagger({
  children,
  step = 90,
  startDelay = 0,
  variant = 'up',
  className,
}: {
  children: ReactNode
  step?: number
  startDelay?: number
  variant?: RevealVariant
  className?: string
}) {
  const items = Children.toArray(children).filter(isValidElement)
  return (
    <>
      {items.map((child, i) => (
        <Reveal
          key={i}
          variant={variant}
          delay={startDelay + i * step}
          className={className}
        >
          {child}
        </Reveal>
      ))}
    </>
  )
}
