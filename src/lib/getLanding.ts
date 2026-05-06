import { getPayload } from 'payload'
import config from '@payload-config'
import { landing } from '@/content/landing'
import type { LandingContent } from '@/content/landing'
import type { LandingPage } from '@/payload-types'

/**
 * Fetches the editable parts of the landing page from Payload Globals
 * and merges with static fallbacks for sections that are still hardcoded.
 *
 * If the global is empty (e.g., admin never opened it) we fall back to
 * the static content baked into the build, so the page never breaks.
 */
export async function getLanding(): Promise<LandingContent> {
  let global: LandingPage | null = null

  try {
    const payload = await getPayload({ config })
    global = (await payload.findGlobal({ slug: 'landing-page', depth: 0 })) as LandingPage
  } catch {
    // DB unavailable / global not yet created — full static fallback
    return landing
  }

  return {
    ...landing,

    hero: global.hero
      ? {
          ...landing.hero,
          tag: global.hero.tag,
          headline: global.hero.headline,
          sub: global.hero.sub,
          primaryCta: global.hero.primaryCta,
          secondaryCta: global.hero.secondaryCta,
          note: global.hero.note ?? '',
          stats:
            global.hero.stats && global.hero.stats.length > 0
              ? global.hero.stats.map((s) => ({ num: s.num, label: s.label }))
              : landing.hero.stats,
          // visual stays from static — too design-y to CMS-ify
        }
      : landing.hero,

    logos: global.logos
      ? {
          title: global.logos.title,
          items:
            global.logos.items && global.logos.items.length > 0
              ? global.logos.items.map((i) => i.name)
              : landing.logos.items,
        }
      : landing.logos,

    pricing: global.pricing
      ? {
          eyebrow: global.pricing.eyebrow,
          title: global.pricing.title,
          sub: global.pricing.sub,
          tiers:
            global.pricing.tiers && global.pricing.tiers.length > 0
              ? global.pricing.tiers.map((t) => ({
                  tag: t.tag,
                  name: t.name,
                  sub: t.sub,
                  price: t.price,
                  priceSuffix: t.priceSuffix,
                  features: (t.features ?? []).map((f) => f.item),
                  ctaLabel: t.ctaLabel,
                  ctaVariant: t.ctaVariant,
                  popular: !!t.popular,
                }))
              : landing.pricing.tiers,
        }
      : landing.pricing,

    testimonials: global.testimonials
      ? {
          eyebrow: global.testimonials.eyebrow,
          title: global.testimonials.title,
          sub: global.testimonials.sub,
          items:
            global.testimonials.items && global.testimonials.items.length > 0
              ? global.testimonials.items.map((t) => ({
                  initials: t.initials,
                  name: t.name,
                  role: t.role,
                  quote: t.quote,
                }))
              : landing.testimonials.items,
        }
      : landing.testimonials,

    faq: global.faq
      ? {
          eyebrow: global.faq.eyebrow,
          title: global.faq.title,
          sub: global.faq.sub,
          items:
            global.faq.items && global.faq.items.length > 0
              ? global.faq.items.map((f) => ({ q: f.q, a: f.a }))
              : landing.faq.items,
        }
      : landing.faq,

    bigCta: global.bigCta
      ? {
          eyebrow: global.bigCta.eyebrow,
          title: global.bigCta.title,
          sub: global.bigCta.sub,
          primaryCta: global.bigCta.primaryCta,
          secondaryCta: global.bigCta.secondaryCta,
          note: global.bigCta.note ?? '',
          aside: global.bigCta.aside,
        }
      : landing.bigCta,
  }
}
