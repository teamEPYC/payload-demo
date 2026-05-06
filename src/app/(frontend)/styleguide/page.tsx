import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Style Guide · AIxGrowth',
  description: 'Design tokens and component primitives.',
}

const colors: Array<{ name: string; cls: string; hex: string; textCls?: string }> = [
  { name: 'bg', cls: 'bg-bg', hex: '#F5F1E8' },
  { name: 'ink', cls: 'bg-ink', hex: '#0A0A0A', textCls: 'text-paper' },
  { name: 'paper', cls: 'bg-paper', hex: '#FFFFFF' },
  { name: 'yellow', cls: 'bg-yellow', hex: '#FFE600' },
  { name: 'red', cls: 'bg-red', hex: '#FF3B30', textCls: 'text-paper' },
  { name: 'blue', cls: 'bg-blue', hex: '#2B44FF', textCls: 'text-paper' },
  { name: 'green', cls: 'bg-green', hex: '#00C853' },
  { name: 'pink', cls: 'bg-pink', hex: '#FF7EB6' },
]

export default function StyleguidePage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="border-ink-thick border-b bg-ink py-10 text-paper">
        <div className="wrap">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-yellow">
            // Internal · Design System
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-tight md:text-7xl">
            Style Guide
          </h1>
          <p className="mt-4 max-w-xl text-paper/80">
            Tokens, primitives, and section utilities. Source of truth for the AIxGrowth marketing
            site.
          </p>
        </div>
      </header>

      {/* Colors */}
      <Section title="Colors" eyebrow="// 01 · Tokens">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {colors.map((c) => (
            <div
              key={c.name}
              className={`border-ink shadow-brut ${c.cls} ${c.textCls ?? 'text-ink'} p-5`}
            >
              <div className="font-display text-lg uppercase">{c.name}</div>
              <div className="mt-2 font-mono text-xs">{c.hex}</div>
              <div className="mt-1 font-mono text-[10px] opacity-70">bg-{c.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography" eyebrow="// 02 · Type">
        <div className="space-y-8">
          <Row label="font-display · Archivo Black">
            <p className="font-display text-6xl uppercase leading-[0.95] tracking-tight">
              Headlines That Compound
            </p>
          </Row>
          <Row label="font-sans · Space Grotesk">
            <p className="text-lg leading-relaxed">
              Body copy uses Space Grotesk at multiple weights. Most paragraphs sit at base or
              lg with comfortable line-height for readability.
            </p>
          </Row>
          <Row label="font-mono · JetBrains Mono">
            <p className="font-mono text-sm uppercase tracking-[0.08em]">
              // SENIOR STRATEGIST RESPONDS WITHIN 24 HOURS
            </p>
          </Row>
          <Row label="Type scale">
            <div className="space-y-2">
              <p className="font-display text-7xl uppercase leading-none tracking-tight">
                7xl Display
              </p>
              <p className="font-display text-5xl uppercase leading-none tracking-tight">
                5xl Section
              </p>
              <p className="font-display text-2xl uppercase">2xl Card</p>
              <p className="text-xl">xl Lead</p>
              <p className="text-base">base Body</p>
              <p className="font-mono text-xs uppercase tracking-wider">xs Mono Eyebrow</p>
            </div>
          </Row>
        </div>
      </Section>

      {/* Shadows + borders */}
      <Section title="Shadows & Borders" eyebrow="// 03 · Surfaces">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <ShadowSwatch label="shadow-brut-sm" cls="shadow-brut-sm" />
          <ShadowSwatch label="shadow-brut" cls="shadow-brut" />
          <ShadowSwatch label="shadow-brut-lg" cls="shadow-brut-lg" />
          <ShadowSwatch label="shadow-brut-xl" cls="shadow-brut-xl" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="border-ink bg-paper p-6">
            <p className="font-mono text-xs uppercase">.border-ink</p>
            <p className="mt-1 text-sm opacity-70">3px solid ink</p>
          </div>
          <div className="border-ink-thick bg-paper p-6">
            <p className="font-mono text-xs uppercase">.border-ink-thick</p>
            <p className="mt-1 text-sm opacity-70">4px solid ink</p>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Buttons" eyebrow="// 04 · Primitives">
        <div className="flex flex-wrap gap-4">
          <Btn>Default</Btn>
          <Btn variant="yellow">Yellow</Btn>
          <Btn variant="red">Red</Btn>
          <Btn variant="blue">Blue</Btn>
          <Btn variant="ink">Ink</Btn>
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider opacity-60">
          // Hover lifts -2,-2 · Active presses 3,3
        </p>
      </Section>

      {/* Eyebrows */}
      <Section title="Eyebrows" eyebrow="// 05 · Primitives">
        <div className="flex flex-wrap gap-4">
          <Eyebrow>// THE PROBLEM</Eyebrow>
          <Eyebrow variant="red">// THE PROBLEM</Eyebrow>
          <Eyebrow variant="paper">// PRICING</Eyebrow>
          <Eyebrow variant="yellow">// LIMITED</Eyebrow>
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards" eyebrow="// 06 · Primitives">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card bg="paper">
            <p className="font-display text-2xl uppercase">Paper</p>
            <p className="mt-2 text-sm opacity-80">Default surface for most cards.</p>
          </Card>
          <Card bg="yellow">
            <p className="font-display text-2xl uppercase">Yellow</p>
            <p className="mt-2 text-sm opacity-80">Highlight / featured surface.</p>
          </Card>
          <Card bg="blue" textCls="text-paper">
            <p className="font-display text-2xl uppercase">Blue</p>
            <p className="mt-2 text-sm opacity-90">Inverted accent.</p>
          </Card>
          <Card bg="pink">
            <p className="font-display text-2xl uppercase">Pink</p>
            <p className="mt-2 text-sm opacity-80">Soft accent.</p>
          </Card>
          <Card bg="ink" textCls="text-paper">
            <p className="font-display text-2xl uppercase text-yellow">Ink</p>
            <p className="mt-2 text-sm opacity-80">Dark surface for contrast bands.</p>
          </Card>
        </div>
      </Section>

      {/* Chips */}
      <Section title="Chips" eyebrow="// 07 · Primitives">
        <div className="flex flex-wrap gap-3">
          {[
            'B2B SaaS',
            'Edtech',
            'E-commerce',
            'HR Tech',
            'Developer Tools',
            'Fintech',
            'Healthtech',
          ].map((c, i) => (
            <span
              key={c}
              className={`border-ink shadow-brut-sm bg-paper px-4 py-2 text-sm font-semibold ${
                i % 2 === 1 ? 'bg-yellow -rotate-1' : i % 3 === 0 ? 'bg-pink rotate-1' : ''
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* Container demo */}
      <Section title="Container · .wrap" eyebrow="// 08 · Layout">
        <div className="border-ink bg-paper p-4">
          <div className="bg-yellow border-ink-thick p-4">
            <p className="font-mono text-xs uppercase">max-width 1360px · px 28px</p>
          </div>
        </div>
      </Section>
    </div>
  )
}

/* -- Local helpers (exist only in this file, will be promoted to /components/ui in Phase B) -- */

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow: string
  children: React.ReactNode
}) {
  return (
    <section className="border-ink-thick border-t py-14">
      <div className="wrap">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] bg-ink text-yellow inline-block px-3 py-1.5 mb-5">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-wider opacity-60">{label}</p>
      {children}
    </div>
  )
}

function ShadowSwatch({ label, cls }: { label: string; cls: string }) {
  return (
    <div className={`border-ink bg-paper p-6 ${cls}`}>
      <p className="font-mono text-xs uppercase">{label}</p>
    </div>
  )
}

function Btn({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'yellow' | 'red' | 'blue' | 'ink'
}) {
  const map = {
    default: 'bg-paper text-ink',
    yellow: 'bg-yellow text-ink',
    red: 'bg-red text-paper',
    blue: 'bg-blue text-paper',
    ink: 'bg-ink text-paper',
  }
  return (
    <button
      type="button"
      className={`border-ink shadow-brut brut-hover inline-flex items-center gap-2 px-6 py-3 font-semibold ${map[variant]}`}
    >
      {children} →
    </button>
  )
}

function Eyebrow({
  children,
  variant = 'ink',
}: {
  children: React.ReactNode
  variant?: 'ink' | 'red' | 'paper' | 'yellow'
}) {
  const map = {
    ink: 'bg-ink text-yellow',
    red: 'bg-red text-paper',
    paper: 'bg-paper text-red border-ink border',
    yellow: 'bg-yellow text-ink',
  }
  return (
    <span
      className={`inline-block px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] ${map[variant]}`}
    >
      {children}
    </span>
  )
}

function Card({
  children,
  bg = 'paper',
  textCls = 'text-ink',
}: {
  children: React.ReactNode
  bg?: 'paper' | 'yellow' | 'blue' | 'pink' | 'ink'
  textCls?: string
}) {
  const map = {
    paper: 'bg-paper',
    yellow: 'bg-yellow',
    blue: 'bg-blue',
    pink: 'bg-pink',
    ink: 'bg-ink',
  }
  return (
    <div className={`border-ink-thick shadow-brut-lg p-7 ${map[bg]} ${textCls}`}>{children}</div>
  )
}
