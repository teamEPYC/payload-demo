import { landing } from '@/content/landing'

const BAR_BG: Record<string, string> = {
  pink: 'bg-pink',
  yellow: 'bg-yellow',
  blue: 'bg-blue',
  red: 'bg-red',
  green: 'bg-green',
}

export function HeroVisualCard() {
  const { title, bars, legend, footLeft, footRight, badge, tape } = landing.hero.visual

  return (
    <div className="relative pt-4">
      <div className="border-ink-thick shadow-brut-xl relative bg-paper p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-dashed border-ink pb-3.5">
          <h4 className="font-mono text-xs uppercase tracking-[0.1em]">{title}</h4>
          <div className="flex gap-1.5">
            {(['red', 'yellow', 'green'] as const).map((c) => (
              <i
                key={c}
                className={`block h-2.5 w-2.5 rounded-full border-[1.5px] border-ink ${BAR_BG[c]}`}
              />
            ))}
          </div>
        </div>

        {/* Bars chart */}
        <div className="mt-4 flex h-40 items-end gap-2.5">
          {bars.map((b, i) => (
            <div
              key={i}
              className={`border-ink relative flex-1 overflow-hidden ${BAR_BG[b.color]}`}
              style={{ height: `${b.heightPct}%` }}
            >
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, transparent 0 6px, rgba(0,0,0,.08) 6px 7px)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-3.5 flex justify-between font-mono text-[10px] uppercase text-ink/60">
          {legend.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>

        {/* Foot */}
        <div className="mt-4 flex items-center justify-between bg-ink p-3 font-mono text-xs uppercase tracking-[0.08em] text-yellow">
          <span>{footLeft}</span>
          <span>{footRight}</span>
        </div>

        {/* Floating badge */}
        <div className="border-ink-thick shadow-brut absolute -right-5 -top-5 grid h-[110px] w-[110px] rotate-12 place-items-center rounded-full bg-red text-center font-display text-sm leading-tight text-paper">
          {badge.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < badge.split('\n').length - 1 && <br />}
            </span>
          ))}
        </div>

        {/* Floating tape */}
        <div className="border-ink absolute -bottom-4 -left-4 -rotate-[4deg] bg-yellow px-4 py-2 font-mono text-xs font-bold uppercase shadow-[4px_4px_0_0_var(--color-ink)]">
          {tape}
        </div>
      </div>
    </div>
  )
}
