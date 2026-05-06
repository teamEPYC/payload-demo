/**
 * Static content for the AIxGrowth landing page.
 *
 * In iteration 2 this file will be replaced by a Payload Global fetch
 * (`payload.findGlobal({ slug: 'landing-page' })`) that returns the same shape.
 * Keep the shapes stable so the swap is mechanical.
 */

export type NavLink = { label: string; href: string }

export type Stat = { num: string; label: string }

export type DifferenceCard = {
  icon: string
  title: string
  body: string
}

export type ServiceLine = string

export type Pillar = {
  key: string
  number: string
  title: string
  lead: string
  detail: string
  servicesLabel: string
  services: ServiceLine[]
}

export type ProcessStep = {
  num: string
  title: string
  body: string
}

export type CompareRow = {
  label: string
  us: string
  agencies: string
  inhouse: string
}

export type NumberStat = { num: string; label: string }

export type Industry = string

export type PricingTier = {
  tag: string
  name: string
  sub: string
  price: string
  priceSuffix: string
  features: string[]
  ctaLabel: string
  ctaVariant: 'ink' | 'red' | 'yellow'
  popular?: boolean
}

export type Testimonial = {
  initials: string
  name: string
  role: string
  quote: string
}

export type Faq = { q: string; a: string }

export type FooterColumn = { title: string; items: string[] }

export type LandingContent = {
  ticker: string[]
  nav: { links: NavLink[]; ctaLabel: string; ctaHref: string }
  hero: {
    tag: string
    headline: { lead: string; hl: string; mid: string; hlRed: string; tail: string }
    sub: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    note: string
    stats: Stat[]
    visual: {
      title: string
      bars: Array<{ heightPct: number; color: 'pink' | 'yellow' | 'blue' | 'red' | 'green' }>
      legend: string[]
      footLeft: string
      footRight: string
      badge: string
      tape: string
    }
  }
  logos: { title: string; items: string[] }
  problem: {
    eyebrow: string
    title: string
    paragraphs: string[]
    callout: { title: string; body: string }
  }
  difference: {
    eyebrow: string
    title: string
    sub: string
    cards: DifferenceCard[]
  }
  pillars: {
    eyebrow: string
    title: string
    sub: string
    items: Pillar[]
  }
  process: {
    eyebrow: string
    title: string
    sub: string
    steps: ProcessStep[]
  }
  compare: {
    eyebrow: string
    title: string
    sub: string
    columns: { us: string; agencies: string; inhouse: string }
    rows: CompareRow[]
  }
  numbers: {
    eyebrow: string
    title: string
    sub: string
    items: NumberStat[]
  }
  icp: {
    eyebrow: string
    title: string
    paragraphs: Array<{ text: string; bold?: boolean }>
    industries: Industry[]
  }
  pricing: {
    eyebrow: string
    title: string
    sub: string
    tiers: PricingTier[]
  }
  testimonials: {
    eyebrow: string
    title: string
    sub: string
    items: Testimonial[]
  }
  faq: {
    eyebrow: string
    title: string
    sub: string
    items: Faq[]
  }
  bigCta: {
    eyebrow: string
    title: { lead: string; highlight: string; tail: string }
    sub: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    note: string
    aside: { spotsRemaining: string; cohort: string }
  }
  footer: {
    tagline: { lead: string; hl: string; tail: string }
    columns: FooterColumn[]
    copyright: string
    badge: string
  }
}

export const landing: LandingContent = {
  ticker: [
    'AI-POWERED GROWTH SYSTEMS',
    '110+ PROJECTS DELIVERED',
    '$65M REVENUE INFLUENCED',
    'LIVE IN 2 WEEKS',
    '11 CLIENTS PER QUARTER',
    'SEO / PAID / CONTENT / CRO',
  ],
  nav: {
    links: [
      { label: 'Problem', href: '#problem' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Blog', href: '/blog' },
    ],
    ctaLabel: 'Talk to Us →',
    ctaHref: '#cta',
  },
  hero: {
    tag: 'ACCEPTING 11 NEW CLIENTS · Q2 2026',
    headline: {
      lead: 'We Build',
      hl: 'AI-Powered',
      mid: 'Marketing Systems',
      hlRed: 'That Compound',
      tail: 'Month Over Month.',
    },
    sub: 'Most agencies ship campaigns. We ship growth infrastructure — AI-powered systems across SEO, Content, Paid Media and Conversion that get smarter the longer they run.',
    primaryCta: { label: 'Book a Free Strategy Call →', href: '#cta' },
    secondaryCta: { label: 'See How It Works', href: '#services' },
    note: '// SENIOR STRATEGIST RESPONDS WITHIN 24 HOURS · NO COMMITMENT',
    stats: [
      { num: '110+', label: 'Projects Delivered' },
      { num: '$65M+', label: 'Revenue Influenced' },
      { num: '2 WKS', label: 'Avg. Time to Launch' },
    ],
    visual: {
      title: '// GROWTH_ENGINE.LIVE',
      bars: [
        { heightPct: 30, color: 'pink' },
        { heightPct: 50, color: 'yellow' },
        { heightPct: 72, color: 'blue' },
        { heightPct: 88, color: 'red' },
        { heightPct: 100, color: 'green' },
      ],
      legend: ['WK 1', 'WK 4', 'WK 8', 'WK 12', 'WK 16'],
      footLeft: 'PIPELINE',
      footRight: '↑ +428%',
      badge: 'LIVE\nIN 2\nWEEKS',
      tape: '★ AI-NATIVE STUDIO',
    },
  },
  logos: {
    title: '▼ TRUSTED BY FUNDED STARTUPS AND GROWTH-STAGE TEAMS ▼',
    items: [
      'CLEARTRIP',
      'LETSVENTURE',
      'OWNIFY',
      'JETSEAM',
      'UPGRAD',
      'JUPITER',
      'POLYGON',
      'ACCEL',
      'MATRIX',
      'TARRAKKI',
      'HOUSEWARE',
    ],
  },
  problem: {
    eyebrow: '// THE PROBLEM',
    title: 'The Old Marketing Playbook Is Costing You Growth.',
    paragraphs: [
      "Hiring a great senior marketer takes 3–6 months and costs $150K+/year — and they still can't cover strategy, SEO, paid media, content, analytics, and automation all at once. So you hire more people. Add management overhead. And still move too slowly to keep up.",
      'Traditional agencies give you a polished proposal, a junior account manager, and a monthly report full of impressions. They measure activity. Not outcomes.',
      'And if you plug in AI tools yourself? Without a system connecting them, you get inconsistent outputs — not compounding results.',
    ],
    callout: {
      title: 'THE REAL PROBLEM',
      body: "Effective marketing in 2026 requires orchestration of AI with multiple tools, strategies and skills. Traditional agencies can't do that. We can.",
    },
  },
  difference: {
    eyebrow: '// THE AIXGROWTH DIFFERENCE',
    title: 'A Full-Stack AI Marketing Team That Embeds In 2 Weeks & Shows First Results In 4 Weeks.',
    sub: "AIxGrowth is an AI-native marketing studio. We combine marketing strategy with AI engineering to build revenue systems traditional agencies simply can't — because they don't have the technical depth, and pure AI tools lack the strategic layer. We're not here to run your ads. We're here to build your growth engine.",
    cards: [
      {
        icon: '⚡',
        title: 'AI-Accelerated Execution',
        body: 'Every workflow — from content production to campaign optimization — runs on AI. More output, faster iteration, lower cost per result than any traditional team.',
      },
      {
        icon: '◉',
        title: 'Dedicated Senior Strategist, Not Junior Handoffs',
        body: 'You work directly with senior strategists and AI engineers, not account managers. We think in systems and outcomes, not tasks and deliverables.',
      },
      {
        icon: '⌘',
        title: 'Embedded, Not Outsourced',
        body: 'We plug into your stack (Slack, ad accounts, CRM) within 2 weeks. Weekly shipping cadence. Regular updates. Zero guesswork.',
      },
    ],
  },
  pillars: {
    eyebrow: '// WHAT WE BUILD',
    title: 'Full-Stack AI Marketing Across Every Growth Lever.',
    sub: "We work across three interconnected pillars — Attract, Convert, Accelerate — so your marketing doesn't leak at any stage of the funnel.",
    items: [
      {
        key: 'attract',
        number: '// 01',
        title: 'Attract',
        lead: 'Build the top of your funnel with AI-powered content and acquisition.',
        detail: 'Get found. Get attention. Own the channels your buyers actually use.',
        servicesLabel: '7 SERVICE LINES',
        services: [
          'SEO & AI-Assisted Content Marketing',
          'Paid Media (Google, Meta, LinkedIn)',
          'Social Media Marketing for Brands',
          'Founder & Executive Thought Leadership',
          'Video Marketing & Production',
          'Podcast Strategy & Distribution',
          'Webinar & Virtual Event Marketing',
        ],
      },
      {
        key: 'convert',
        number: '// 02',
        title: 'Convert',
        lead: 'Turn traffic and leads into pipeline with smart nurture systems.',
        detail:
          'Getting traffic is table stakes. We build systems that turn visitors → leads and leads → customers.',
        servicesLabel: '5 SERVICE LINES',
        services: [
          'Landing Page Strategy & Funnel Design',
          'Conversion Rate Optimization (CRO)',
          'Email Marketing & Automation',
          'Lead Nurturing & Lifecycle Campaigns',
          'Retargeting & Re-engagement Flows',
        ],
      },
      {
        key: 'accelerate',
        number: '// 03',
        title: 'Accelerate',
        lead: 'The AI infrastructure layer that makes everything faster, smarter, and more scalable.',
        detail:
          "This is what separates us from every other agency. We don't just use AI tools — we deeply integrate AI into your marketing stack.",
        servicesLabel: '5 SERVICE LINES',
        services: [
          'Custom AI Marketing Agents & Automations',
          'AI-Generated Content at Scale (Images, Video, Copy)',
          'Custom Marketing Analytics Dashboards',
          'A/B Testing Automation',
          'Full-Funnel Attribution & Journey Mapping',
        ],
      },
    ],
  },
  process: {
    eyebrow: '// OUR PROCESS',
    title: "Strategy Isn't A Phase — It's The System.",
    sub: "Here's how we go from first call to compounding growth — in weeks, not quarters.",
    steps: [
      {
        num: '01',
        title: 'Discovery & Strategy',
        body: 'We go deep on your ICP, funnel, channels, and competitive landscape. We align on goals and lock in scope.',
      },
      {
        num: '02',
        title: 'Embedded Setup',
        body: 'We plug into your stack — CRM, ad accounts, CDP, analytics, Slack. No onboarding theater. We move fast.',
      },
      {
        num: '03',
        title: 'Continuous Execution',
        body: 'Weekly shipping cadence: new creatives, landing pages, campaigns, automations. Real progress every week.',
      },
      {
        num: '04',
        title: 'AI-Powered Optimization',
        body: "We surface hidden data and act on it. What's working gets scaled. What isn't gets cut or tested. Fast.",
      },
      {
        num: '05',
        title: 'Monthly Review & Sprint Plan',
        body: "Full performance review tied to pipeline and CAC. Plan next month's priorities together, then build.",
      },
    ],
  },
  compare: {
    eyebrow: '// HOW WE COMPARE',
    title: "You've Tried The Others. Here's How They Compare.",
    sub: "Most growth teams have burned budget on at least one of these. Here's what you're actually getting.",
    columns: { us: 'AIxGrowth', agencies: 'Traditional Agencies', inhouse: 'In-House Teams' },
    rows: [
      {
        label: 'Time to Start',
        us: 'Live in 2 weeks',
        agencies: '2–4 weeks',
        inhouse: '3–6 months to hire',
      },
      {
        label: 'Monthly Cost',
        us: 'From $5K/mo',
        agencies: '$8K–$25K+/mo, opaque',
        inhouse: '$150K–$250K/yr per hire',
      },
      {
        label: 'Who Runs It',
        us: 'Senior strategists + AI engineers',
        agencies: 'Junior account managers',
        inhouse: 'Whoever you hired',
      },
      {
        label: 'AI Integration',
        us: 'Native to every workflow',
        agencies: 'Bolt-on, rarely real',
        inhouse: 'Ad hoc, if at all',
      },
      {
        label: 'Accountability',
        us: 'Outcome-focused KPIs',
        agencies: 'Hard to attribute',
        inhouse: 'Internal management burden',
      },
      {
        label: 'Scales With You',
        us: 'Scales with AI',
        agencies: 'Requires more budget',
        inhouse: 'Requires more headcount',
      },
      {
        label: 'Systems Thinking',
        us: 'Infrastructure built to compound',
        agencies: 'Campaigns, not systems',
        inhouse: 'Depends on who you hire',
      },
    ],
  },
  numbers: {
    eyebrow: '// THE NUMBERS',
    title: 'Built To Drive Revenue, Not Just Campaigns.',
    sub: "Most growth teams have burned budget on at least one of these. Here's what you're actually getting.",
    items: [
      { num: '110+', label: 'Projects delivered for startups & enterprise teams' },
      { num: '$65M+', label: 'Revenue influenced across client portfolios' },
      { num: '2 WKS', label: 'Avg. time from signed contract to live campaigns' },
      { num: '30–60', label: 'Days to first measurable results' },
    ],
  },
  icp: {
    eyebrow: "// WHO IT'S FOR",
    title: "If You're Scaling A Tech Company And Marketing Feels Like A Bottleneck — This Is For You.",
    paragraphs: [
      {
        text: 'We go deep on your ICP, current funnel, channels, and competitive landscape. We align on goals, prioritize the highest-leverage opportunities, and lock in scope and timeline.',
      },
      { text: 'Seed to Series B companies with $1M to $50M ARR.', bold: true },
    ],
    industries: [
      'B2B SaaS',
      'Edtech & Higher Education',
      'E-commerce & D2C',
      'HR Tech & Future of Work',
      'Developer Tools & Infrastructure',
    ],
  },
  pricing: {
    eyebrow: '// PRICING',
    title: 'Transparent Pricing, No Games.',
    sub: 'Every engagement starts with a strategy session. Pick the tier that matches your growth stage — scale up or down anytime.',
    tiers: [
      {
        tag: 'TIER 01 — STARTER',
        name: 'Starter',
        sub: 'For early-stage teams testing AI marketing.',
        price: '$5,000',
        priceSuffix: '/month',
        features: [
          'AI marketing audit + 90-day prioritized growth roadmap',
          '1 paid acquisition channel (Google or Meta)',
          'AI content engine (SEO blog + social)',
          'Email automation setup',
          'Monthly performance reporting',
          'Direct Slack access to your strategist',
        ],
        ctaLabel: 'Get Started →',
        ctaVariant: 'ink',
      },
      {
        tag: 'TIER 02 — GROWTH',
        name: 'Growth',
        sub: 'For teams ready to scale acquisition across multiple channels.',
        price: '$13,500',
        priceSuffix: '/month',
        features: [
          'Unified growth strategy across SEO, paid, content, email & conversion',
          'Multi-channel paid acquisition (Google, Meta, LinkedIn)',
          'Full AI content production (blog, social, video)',
          'Tech stack buildout — CDP setup, CRM integration',
          'Conversion optimization — landing pages, A/B testing, CRO',
          'Bi-weekly strategy calls',
        ],
        ctaLabel: 'Get Started →',
        ctaVariant: 'red',
        popular: true,
      },
      {
        tag: 'TIER 03 — FULL STACK',
        name: 'Full Stack',
        sub: 'For companies ready to go all-in on AI growth.',
        price: 'Custom',
        priceSuffix: '/scoped',
        features: [
          'Everything in Growth, plus:',
          'Dedicated AI marketing team',
          'Custom AI agents & workflow development',
          'Custom mini-apps & internal tool development',
          'Full-funnel attribution & analytics infrastructure',
          'Weekly sprint reviews & priority support',
        ],
        ctaLabel: 'Get Started →',
        ctaVariant: 'yellow',
      },
    ],
  },
  testimonials: {
    eyebrow: '// TESTIMONIALS',
    title: "Here's Why Growth Teams Choose Us.",
    sub: 'We partner with founders and marketing leaders who care about pipeline, not vanity metrics.',
    items: [
      {
        initials: 'LS',
        name: 'Leon Stern',
        role: 'Director of Digital · Polygon',
        quote:
          'Honestly, I never worked with a better partner before. There is always someone available to help, you always deliver on time with great quality. For the last 12 months we have been working on very complex products & the experience has been excellent.',
      },
      {
        initials: 'AP',
        name: 'Asis Panda',
        role: 'Director of Design · Nova Benefits',
        quote:
          'We are not looking for an agency, we are looking for a team who would have as much skin in the game as us. EPYC delivered through and through without leaving a single stone unturned. novabenefits.com went on to organically be featured in respected website design curations.',
      },
      {
        initials: 'PG',
        name: 'Paromita Gupta',
        role: 'Director of Digital · Polygon',
        quote:
          'Arguably one of the most professional & dedicated no-code design studios, going above & beyond, working with you to ensure excellent results. The team is creative, attentive to detail & very responsive to the needs of their clients.',
      },
      {
        initials: 'JM',
        name: 'Jay Magdani',
        role: 'Entrepreneur in Residence · Scalix',
        quote:
          'Very empathetic to the challenges & needs of their clients. Quality before pricing as an approach is refreshing & their USP. We will continue working with them as long as possible.',
      },
    ],
  },
  faq: {
    eyebrow: '// FAQ',
    title: 'Your Questions, Answered.',
    sub: 'Get clear answers about working with AIxGrowth.',
    items: [
      {
        q: "Can't I just use AI tools myself?",
        a: "You can — but without a system connecting strategy, tools, and channels, you'll get inconsistent outputs instead of compounding results. We build the orchestration layer between the tools.",
      },
      {
        q: 'How fast will I see results?',
        a: 'We go live in 2 weeks. First measurable results typically land in 30–60 days.',
      },
      {
        q: 'Do you replace my internal marketing team?',
        a: "We embed alongside them. We're operators who plug into your stack and ship weekly — not consultants who hand off a deck.",
      },
      {
        q: 'What kinds of companies do you work with?',
        a: 'Seed to Series B companies with $1M–$50M ARR across B2B SaaS, Edtech, E-commerce, HR Tech, and Developer Tools.',
      },
      {
        q: 'What makes you different from other "AI marketing" agencies?',
        a: "AI isn't a bolt-on for us. It's the foundation of every workflow — from keyword research to autonomous ad optimization to AI-generated content at scale.",
      },
      {
        q: 'How do we get started?',
        a: 'Book a free strategy call. A senior strategist responds within 24 hours — no commitment required.',
      },
    ],
  },
  bigCta: {
    eyebrow: '// LIMITED AVAILABILITY',
    title: { lead: 'We Only Take On', highlight: '11', tail: 'New Clients Per Quarter.' },
    sub: "We keep a lean team so every client gets senior attention. If you're ready to build a real AI marketing engine, let's talk before the next cohort fills up.",
    primaryCta: { label: 'Book Your Free Strategy Call →', href: '#' },
    secondaryCta: { label: 'See the Blog', href: '/blog' },
    note: '// NO COMMITMENT REQUIRED · SENIOR STRATEGIST RESPONDS WITHIN 24 HOURS',
    aside: { spotsRemaining: '04/11', cohort: 'Q3 2026' },
  },
  footer: {
    tagline: {
      lead: "We're building the",
      hl: 'AI growth engine',
      tail: 'your competitors wish they had.',
    },
    columns: [
      {
        title: '// LINKS',
        items: ['Services', 'How It Works', 'Pricing', 'Blog', 'Contact'],
      },
      {
        title: '// LEGAL',
        items: ['Privacy Policy', 'Terms of Service', 'AIxG Terms'],
      },
      {
        title: '// SOCIAL',
        items: ['LinkedIn', 'Twitter / X', 'team@epyc.in', 'San Francisco, CA'],
      },
    ],
    copyright: '© 2026 AIXGROWTH · ALL RIGHTS RESERVED',
    badge: '★ BUILT FOR REVENUE ACCELERATION',
  },
}
