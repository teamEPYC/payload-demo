import { landing } from '@/content/landing'

export function Ticker() {
  // Duplicate the items so the keyframe (-50% translate) loops seamlessly.
  const items = [...landing.ticker, ...landing.ticker]
  return (
    <div className="border-ink-thick border-b bg-ink text-yellow overflow-hidden">
      <div className="animate-tick flex gap-14 whitespace-nowrap py-2.5 font-mono text-[13px] font-medium uppercase tracking-[0.05em]">
        {items.map((item, i) => (
          <span key={i} className="flex-shrink-0">
            <span className="mr-3 text-red">★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
