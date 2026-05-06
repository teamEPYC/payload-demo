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

export default function HomePage() {
  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <LogosStrip />
        <ProblemSection />
        <DifferenceCards />
        <Pillars />
        <Process />
        <CompareTable />
        <NumbersSection />
        <ICPSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <BigCTA />
      </main>
      <Footer />
    </>
  )
}
