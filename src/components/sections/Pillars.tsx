'use client'

import { useState } from 'react'
import { Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

export function Pillars() {
  const { eyebrow, title, sub, items } = landing.pillars
  const [active, setActive] = useState(items[0]!.key)
  const current = items.find((p) => p.key === active) ?? items[0]!

  return (
    <Section tone="paper" id="services">
      <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

      {/* Tabs — stacked on mobile, single row from md up */}
      <div className="border-ink-thick mt-10 flex flex-col bg-bg md:flex-row">
        {items.map((p, i) => {
          const isActive = p.key === active
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setActive(p.key)}
              className={`flex-1 cursor-pointer px-5 py-4 text-left font-display uppercase tracking-tight transition-colors ${
                i < items.length - 1
                  ? 'border-b-[3px] border-ink md:border-b-0 md:border-r-[3px]'
                  : ''
              } ${isActive ? 'bg-ink text-yellow' : 'bg-bg text-ink'}`}
            >
              <span className="mb-1 block font-mono text-xs opacity-70">{p.number}</span>
              <span className="text-base md:text-xl">{p.title}</span>
            </button>
          )
        })}
      </div>

      {/* Body */}
      <div className="border-ink-thick grid grid-cols-1 gap-10 border-t-0 bg-paper p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <h3 className="mb-4 font-display text-3xl uppercase leading-none tracking-tight md:text-4xl">
            {current.title}
          </h3>
          <p className="mb-3.5 text-[17px] leading-[1.5] text-ink/85">{current.lead}</p>
          <p className="mb-3.5 text-[17px] leading-[1.5] text-ink/85">
            <em>{current.detail}</em>
          </p>
          <span className="border-ink inline-block border-2 bg-yellow px-2.5 py-1 font-mono text-xs uppercase">
            {current.servicesLabel}
          </span>
        </div>

        <div className="border-ink border bg-paper">
          {current.services.map((s, i) => (
            <div
              key={s}
              className={`flex items-center justify-between px-4 py-3.5 text-[15px] font-medium transition-colors hover:bg-yellow ${
                i < current.services.length - 1 ? 'border-b-2 border-ink' : ''
              }`}
            >
              <span>{s}</span>
              <span className="font-mono text-sm">↗</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
