import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import FlexibilitySection from "@/components/flexibility-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <FlexibilitySection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
