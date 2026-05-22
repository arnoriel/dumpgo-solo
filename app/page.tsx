import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import AreaCoverage from '@/components/AreaCoverage'
import Gallery from '@/components/Gallery'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WAFloat from '@/components/WAFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <AreaCoverage />
        <Gallery />
        <CTA />
      </main>
      <Footer />
      <WAFloat />
    </>
  )
}
