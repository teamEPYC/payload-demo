import type { Metadata } from 'next'
import { Button, Card, Chip, Container, Eyebrow, Section, SectionHeading } from '@/components/ui'

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
      <header className="border-ink-thick border-b bg-ink py-12 text-paper">
        <Container>
          <Eyebrow>// Internal · Design System</Eyebrow>
          <h1 className="mt-4 font-display text-5xl uppercase tracking-tight md:text-7xl">
            Style Guide
          </h1>
          <p className="mt-4 max-w-xl text-paper/80">
            Tokens, primitives, and section utilities. Source of truth for the AIxGrowth marketing
            site.
          </p>
        </Container>
      </header>

      {/* 01 Colors */}
      <Section tone="default">
        <SectionHeading eyebrow="// 01 · Tokens" title="Colors" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {colors.map((c) => (
            <div
              key={c.name}
              className={`border-ink shadow-brut p-5 ${c.cls} ${c.textCls ?? 'text-ink'}`}
            >
              <div className="font-display text-lg uppercase">{c.name}</div>
              <div className="mt-2 font-mono text-xs">{c.hex}</div>
              <div className="mt-1 font-mono text-[10px] opacity-70">bg-{c.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 02 Typography */}
      <Section tone="paper">
        <SectionHeading eyebrow="// 02 · Type" title="Typography" />
        <div className="mt-10 space-y-8">
          <Row label="font-display · Archivo Black">
            <p className="font-display text-6xl uppercase leading-[0.95] tracking-tight">
              Headlines That Compound
            </p>
          </Row>
          <Row label="font-sans · Space Grotesk">
            <p className="text-lg leading-relaxed">
              Body copy uses Space Grotesk at multiple weights. Most paragraphs sit at base or lg
              with comfortable line-height for readability.
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

      {/* 03 Shadows + borders */}
      <Section tone="default">
        <SectionHeading eyebrow="// 03 · Surfaces" title="Shadows & Borders" />
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
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

      {/* 04 Buttons */}
      <Section tone="paper">
        <SectionHeading eyebrow="// 04 · Primitives" title="Buttons" />
        <div className="mt-10 flex flex-wrap gap-4">
          <Button>Default →</Button>
          <Button variant="yellow">Yellow →</Button>
          <Button variant="red">Red →</Button>
          <Button variant="blue">Blue →</Button>
          <Button variant="ink">Ink →</Button>
          <Button href="#" variant="yellow">
            As Link →
          </Button>
        </div>
        <p className="mt-5 font-mono text-xs uppercase tracking-wider opacity-60">
          // Renders as &lt;a&gt; when href is provided, else &lt;button&gt;
        </p>
      </Section>

      {/* 05 Eyebrows */}
      <Section tone="default">
        <SectionHeading eyebrow="// 05 · Primitives" title="Eyebrows" />
        <div className="mt-10 flex flex-wrap gap-4">
          <Eyebrow>// THE PROBLEM</Eyebrow>
          <Eyebrow variant="red">// THE PROBLEM</Eyebrow>
          <Eyebrow variant="paper">// PRICING</Eyebrow>
          <Eyebrow variant="yellow">// LIMITED</Eyebrow>
        </div>
      </Section>

      {/* 06 Cards */}
      <Section tone="paper">
        <SectionHeading eyebrow="// 06 · Primitives" title="Cards" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card bg="paper">
            <p className="font-display text-2xl uppercase">Paper</p>
            <p className="mt-2 text-sm opacity-80">Default surface for most cards.</p>
          </Card>
          <Card bg="yellow">
            <p className="font-display text-2xl uppercase">Yellow</p>
            <p className="mt-2 text-sm opacity-80">Highlight / featured surface.</p>
          </Card>
          <Card bg="blue">
            <p className="font-display text-2xl uppercase">Blue</p>
            <p className="mt-2 text-sm opacity-90">Inverted accent.</p>
          </Card>
          <Card bg="pink">
            <p className="font-display text-2xl uppercase">Pink</p>
            <p className="mt-2 text-sm opacity-80">Soft accent.</p>
          </Card>
          <Card bg="ink">
            <p className="font-display text-2xl uppercase text-yellow">Ink</p>
            <p className="mt-2 text-sm opacity-80">Dark surface for contrast bands.</p>
          </Card>
          <Card bg="paper" shadow="xl">
            <p className="font-display text-2xl uppercase">XL Shadow</p>
            <p className="mt-2 text-sm opacity-80">Featured / hero card shadow.</p>
          </Card>
        </div>
      </Section>

      {/* 07 Chips */}
      <Section tone="default">
        <SectionHeading eyebrow="// 07 · Primitives" title="Chips" />
        <div className="mt-10 flex flex-wrap gap-3">
          <Chip rotate={-1}>B2B SaaS</Chip>
          <Chip bg="yellow" rotate={1}>
            Edtech
          </Chip>
          <Chip bg="pink" rotate={-2}>
            E-commerce
          </Chip>
          <Chip rotate={1}>HR Tech</Chip>
          <Chip bg="blue" rotate={-1}>
            Developer Tools
          </Chip>
          <Chip bg="yellow" rotate={2}>
            Fintech
          </Chip>
        </div>
      </Section>

      {/* 08 Section heading */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="// 08 · Composition"
          title="Section Heading"
          sub="Eyebrow + display headline + optional sub. This component is reused across every section of the landing page."
        />
      </Section>

      {/* 09 Container */}
      <Section tone="default">
        <SectionHeading eyebrow="// 09 · Layout" title="Container · .wrap" />
        <div className="mt-8 border-ink bg-paper p-4">
          <div className="bg-yellow border-ink-thick p-4">
            <p className="font-mono text-xs uppercase">max-width 1360px · px 28px</p>
          </div>
        </div>
      </Section>
    </div>
  )
}

/* Local helpers */

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
