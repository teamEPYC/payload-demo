import { Section, SectionHeading } from '@/components/ui'
import { landing } from '@/content/landing'

export function CompareTable() {
  const { eyebrow, title, sub, columns, rows } = landing.compare

  // Column set including the leading label column
  const cells = (row: { label: string; us: string; agencies: string; inhouse: string }) => [
    { content: row.label, kind: 'label' as const },
    { content: row.us, kind: 'us' as const },
    { content: row.agencies, kind: 'plain' as const },
    { content: row.inhouse, kind: 'plain' as const },
  ]

  return (
    <Section tone="paper">
      <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

      <div className="border-ink-thick mt-12 overflow-hidden bg-paper">
        {/* Header row */}
        <div className="border-ink grid grid-cols-1 border-b-[3px] bg-ink text-paper md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="border-ink hidden md:block md:border-r-[3px] p-5" />
          <div className="border-ink bg-yellow p-5 font-display uppercase tracking-tight text-ink md:border-r-[3px]">
            {columns.us}
          </div>
          <div className="border-ink p-5 font-display uppercase tracking-tight md:border-r-[3px]">
            {columns.agencies}
          </div>
          <div className="p-5 font-display uppercase tracking-tight">{columns.inhouse}</div>
        </div>

        {/* Body rows */}
        {rows.map((row, ri) => {
          const isLast = ri === rows.length - 1
          return (
            <div
              key={row.label}
              className={`grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] ${
                isLast ? '' : 'border-b-[3px] border-ink'
              }`}
            >
              {cells(row).map((c, ci) => {
                const isLastCol = ci === 3
                const base = 'p-5 text-[15px] leading-[1.4]'
                const border = isLastCol ? '' : 'md:border-r-[3px] md:border-ink'
                const mobileBorder = ci === 3 ? '' : 'border-b-[3px] border-ink md:border-b-0'
                let cls = ''
                if (c.kind === 'label')
                  cls = `bg-bg font-mono text-xs font-bold uppercase tracking-[0.08em]`
                else if (c.kind === 'us') cls = `bg-[#FFFBDB] font-semibold`
                return (
                  <div key={ci} className={`${base} ${cls} ${border} ${mobileBorder}`}>
                    {c.content}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
