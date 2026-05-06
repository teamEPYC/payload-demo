import {
  BigCTA,
  CompareTable,
  DifferenceCards,
  FAQ,
  Footer,
  Hero,
  ICPSection,
  LogosStrip,
  Nav,
  NumbersSection,
  Pillars,
  Pricing,
  ProblemSection,
  Process,
  Testimonials,
  Ticker,
} from '@/components/sections'
import { getLanding } from '@/lib/getLanding'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const data = await getLanding()

  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <Hero data={data.hero} />
        <LogosStrip data={data.logos} />
        <ProblemSection />
        <DifferenceCards />
        <Pillars />
        <Process />
        <CompareTable />
        <NumbersSection />
        <ICPSection />
        <Pricing data={data.pricing} />
        <Testimonials data={data.testimonials} />
        <FAQ data={data.faq} />
        <BigCTA data={data.bigCta} />
      </main>
      <Footer />
    </>
  )
}
