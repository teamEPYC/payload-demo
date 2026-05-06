import type { GlobalConfig } from 'payload'
import { landing } from '@/content/landing'

const { hero, logos, pricing, testimonials, faq, bigCta } = landing

/**
 * Editable subset of the landing page.
 * Sections NOT in this global (Problem, Difference, Pillars, Process, Compare,
 * Numbers, ICP, Footer) are intentionally hardcoded — their structure changes
 * rarely and editing them in the admin would be painful.
 */
export const LandingPage: GlobalConfig = {
  slug: 'landing-page',
  label: 'Landing Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ============= HERO =============
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                { name: 'tag', type: 'text', required: true, defaultValue: hero.tag },
                {
                  name: 'headline',
                  type: 'group',
                  admin: {
                    description:
                      'The headline is split into 5 segments. Two of them (hl, hlRed) are highlighted with colored backgrounds.',
                  },
                  fields: [
                    { name: 'lead', type: 'text', required: true, defaultValue: hero.headline.lead },
                    { name: 'hl', type: 'text', required: true, defaultValue: hero.headline.hl, label: 'Highlighted (yellow)' },
                    { name: 'mid', type: 'text', required: true, defaultValue: hero.headline.mid },
                    { name: 'hlRed', type: 'text', required: true, defaultValue: hero.headline.hlRed, label: 'Highlighted (red)' },
                    { name: 'tail', type: 'text', required: true, defaultValue: hero.headline.tail },
                  ],
                },
                { name: 'sub', type: 'textarea', required: true, defaultValue: hero.sub },
                {
                  name: 'primaryCta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true, defaultValue: hero.primaryCta.label },
                    { name: 'href', type: 'text', required: true, defaultValue: hero.primaryCta.href },
                  ],
                },
                {
                  name: 'secondaryCta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true, defaultValue: hero.secondaryCta.label },
                    { name: 'href', type: 'text', required: true, defaultValue: hero.secondaryCta.href },
                  ],
                },
                { name: 'note', type: 'text', defaultValue: hero.note },
                {
                  name: 'stats',
                  type: 'array',
                  minRows: 0,
                  maxRows: 3,
                  admin: { description: 'Up to 3 stat boxes shown below the hero CTAs.' },
                  fields: [
                    { name: 'num', type: 'text', required: true },
                    { name: 'label', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },

        // ============= LOGOS =============
        {
          label: 'Logos',
          fields: [
            {
              name: 'logos',
              type: 'group',
              fields: [
                { name: 'title', type: 'text', required: true, defaultValue: logos.title },
                {
                  name: 'items',
                  type: 'array',
                  admin: { description: 'Logo wordmarks shown in the trust strip.' },
                  fields: [{ name: 'name', type: 'text', required: true }],
                },
              ],
            },
          ],
        },

        // ============= PRICING =============
        {
          label: 'Pricing',
          fields: [
            {
              name: 'pricing',
              type: 'group',
              fields: [
                { name: 'eyebrow', type: 'text', required: true, defaultValue: pricing.eyebrow },
                { name: 'title', type: 'text', required: true, defaultValue: pricing.title },
                { name: 'sub', type: 'textarea', required: true, defaultValue: pricing.sub },
                {
                  name: 'tiers',
                  type: 'array',
                  minRows: 1,
                  maxRows: 4,
                  fields: [
                    { name: 'tag', type: 'text', required: true },
                    { name: 'name', type: 'text', required: true },
                    { name: 'sub', type: 'textarea', required: true },
                    { name: 'price', type: 'text', required: true },
                    { name: 'priceSuffix', type: 'text', required: true, defaultValue: '/month' },
                    {
                      name: 'features',
                      type: 'array',
                      fields: [{ name: 'item', type: 'text', required: true }],
                    },
                    { name: 'ctaLabel', type: 'text', required: true, defaultValue: 'Get Started →' },
                    {
                      name: 'ctaVariant',
                      type: 'select',
                      required: true,
                      defaultValue: 'ink',
                      options: [
                        { label: 'Ink (default)', value: 'ink' },
                        { label: 'Red (popular tier)', value: 'red' },
                        { label: 'Yellow', value: 'yellow' },
                      ],
                    },
                    {
                      name: 'popular',
                      type: 'checkbox',
                      defaultValue: false,
                      admin: { description: 'Pin this tier as the highlighted one.' },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ============= TESTIMONIALS =============
        {
          label: 'Testimonials',
          fields: [
            {
              name: 'testimonials',
              type: 'group',
              fields: [
                { name: 'eyebrow', type: 'text', required: true, defaultValue: testimonials.eyebrow },
                { name: 'title', type: 'text', required: true, defaultValue: testimonials.title },
                { name: 'sub', type: 'textarea', required: true, defaultValue: testimonials.sub },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    { name: 'initials', type: 'text', required: true, maxLength: 3 },
                    { name: 'name', type: 'text', required: true },
                    { name: 'role', type: 'text', required: true },
                    { name: 'quote', type: 'textarea', required: true },
                  ],
                },
              ],
            },
          ],
        },

        // ============= FAQ =============
        {
          label: 'FAQ',
          fields: [
            {
              name: 'faq',
              type: 'group',
              fields: [
                { name: 'eyebrow', type: 'text', required: true, defaultValue: faq.eyebrow },
                { name: 'title', type: 'text', required: true, defaultValue: faq.title },
                { name: 'sub', type: 'textarea', required: true, defaultValue: faq.sub },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    { name: 'q', type: 'text', required: true },
                    { name: 'a', type: 'textarea', required: true },
                  ],
                },
              ],
            },
          ],
        },

        // ============= BIG CTA =============
        {
          label: 'Big CTA',
          fields: [
            {
              name: 'bigCta',
              type: 'group',
              fields: [
                { name: 'eyebrow', type: 'text', required: true, defaultValue: bigCta.eyebrow },
                {
                  name: 'title',
                  type: 'group',
                  fields: [
                    { name: 'lead', type: 'text', required: true, defaultValue: bigCta.title.lead },
                    { name: 'highlight', type: 'text', required: true, defaultValue: bigCta.title.highlight, label: 'Highlight (red)' },
                    { name: 'tail', type: 'text', required: true, defaultValue: bigCta.title.tail },
                  ],
                },
                { name: 'sub', type: 'textarea', required: true, defaultValue: bigCta.sub },
                {
                  name: 'primaryCta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true, defaultValue: bigCta.primaryCta.label },
                    { name: 'href', type: 'text', required: true, defaultValue: bigCta.primaryCta.href },
                  ],
                },
                {
                  name: 'secondaryCta',
                  type: 'group',
                  fields: [
                    { name: 'label', type: 'text', required: true, defaultValue: bigCta.secondaryCta.label },
                    { name: 'href', type: 'text', required: true, defaultValue: bigCta.secondaryCta.href },
                  ],
                },
                { name: 'note', type: 'text', defaultValue: bigCta.note },
                {
                  name: 'aside',
                  type: 'group',
                  fields: [
                    { name: 'spotsRemaining', type: 'text', required: true, defaultValue: bigCta.aside.spotsRemaining },
                    { name: 'cohort', type: 'text', required: true, defaultValue: bigCta.aside.cohort },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
