import { Container, Reveal } from '@/components/ui'
import { landing } from '@/content/landing'

export function Footer() {
  const { tagline, columns, copyright, badge } = landing.footer

  return (
    <footer className="border-ink-thick border-t bg-ink py-20 pb-10 text-paper">
      <Container>
        <Reveal>
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Tagline column */}
          <div>
            <div className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
              <span className="border-ink shadow-brut-sm grid h-[38px] w-[38px] -rotate-[4deg] place-items-center bg-yellow font-display text-xl text-ink">
                A
              </span>
              AIxGrowth
            </div>
            <p className="mt-5 font-display text-3xl uppercase leading-none tracking-tight md:text-4xl">
              {tagline.lead}{' '}
              <span className="bg-yellow inline-block border-2 border-paper px-2.5 py-0.5 text-ink mt-1.5">
                {tagline.hl}
              </span>{' '}
              {tagline.tail}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-3.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-yellow">
                {col.title}
              </h5>
              <ul className="space-y-1.5 list-none p-0">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-paper/70 transition-colors hover:text-yellow cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/40 pt-7 font-mono text-xs uppercase tracking-[0.08em] text-paper/50 md:flex-row md:justify-between">
          <div>{copyright}</div>
          <div>{badge}</div>
        </div>
        </Reveal>
      </Container>
    </footer>
  )
}
