'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'
import { landing } from '@/content/landing'

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight">
      <span className="border-ink shadow-brut-sm grid h-[38px] w-[38px] -rotate-[4deg] place-items-center bg-yellow font-display text-xl">
        A
      </span>
      AIxGrowth
      <span className="ml-1 font-mono text-[11px] opacity-60">/GTM</span>
    </a>
  )
}

export function Nav() {
  const { links, ctaLabel, ctaHref } = landing.nav
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-ink-thick sticky top-0 z-50 border-b bg-bg">
      <div className="flex items-center justify-between px-7 py-5">
        <Logo />

        <div className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative inline-block px-1 py-2 outline-none focus-visible:outline-none"
            >
              {/* Yellow highlight bar — slides in from left */}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-2.5 origin-left scale-x-0 bg-yellow transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
              <span className="relative z-10 transition-transform duration-150 group-hover:-rotate-[2deg] inline-block">
                {l.label}
              </span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={ctaHref} variant="ink">
            {ctaLabel}
          </Button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="border-ink shadow-brut-sm bg-yellow grid h-11 w-11 place-items-center md:hidden cursor-pointer"
        >
          <span className="relative block h-[2px] w-5 bg-ink">
            <span
              className={`absolute left-0 block h-[2px] w-5 bg-ink transition-transform ${
                open ? 'top-0 rotate-45' : '-top-1.5'
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 bg-ink transition-transform ${
                open ? 'top-0 -rotate-45' : 'top-1.5'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-ink-thick border-t bg-bg md:hidden">
          <div className="flex flex-col gap-1 p-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-ink shadow-brut-sm bg-paper px-4 py-3 font-display text-lg uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="border-ink shadow-brut-sm bg-ink px-4 py-3 font-display text-lg uppercase text-yellow text-center mt-2"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
