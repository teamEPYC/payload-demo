import { Container, Eyebrow } from '@/components/ui'

export function BlogHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string
  title: React.ReactNode
  sub?: React.ReactNode
}) {
  return (
    <header className="border-ink-thick border-b bg-bg py-16 md:py-20">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display uppercase tracking-tight leading-[0.95] text-[clamp(40px,5.5vw,76px)]">
          {title}
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-lg leading-[1.5] text-ink/80">{sub}</p>}
      </Container>
    </header>
  )
}
