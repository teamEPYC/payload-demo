'use client'

import { useState } from 'react'
import { Section, SectionHeading } from '@/components/ui'
import { landing, type LandingContent } from '@/content/landing'

export function FAQ({ data = landing.faq }: { data?: LandingContent['faq'] }) {
  const { eyebrow, title, sub, items } = data
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section tone="default">
      <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

      <div className="border-ink-thick mt-12 bg-paper">
        {items.map((f, i) => {
          const isOpen = open === i
          const isLast = i === items.length - 1
          return (
            <div
              key={`${f.q}-${i}`}
              className={`cursor-pointer px-7 py-5 ${
                isLast ? '' : 'border-b-[3px] border-ink'
              }`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-lg uppercase tracking-tight md:text-xl">
                  {f.q}
                </span>
                <span
                  className={`border-ink shadow-brut-sm grid h-9 w-9 flex-shrink-0 place-items-center font-display text-xl transition-transform duration-200 ${
                    isOpen ? 'rotate-45 bg-red text-paper' : 'bg-yellow text-ink'
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden text-base leading-[1.5] text-ink/80">{f.a}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
