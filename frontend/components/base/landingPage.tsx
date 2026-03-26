import React from 'react'
import Hero from './hero'
import Navbar from "./navbar"
import StaysSection from './staysSection'
import WhyUsSection from './whyUsSection'
import StatsSection from './statsSection'
import Footer from './footer'
import HowItWorksSection from './howItWorksSection'
import WhatsAppButton from '@/components/base/whatsappButton';
import WarmBackend from '@/components/base/warmBackend';
function LandingPage() {
  return (
    <>
      <WhatsAppButton />
      <WarmBackend />
      <Navbar />
      <Hero />
      <StatsSection />
      <StaysSection />
      <WhyUsSection />
      <HowItWorksSection />
      <Footer />
    </>
  )
}

export default LandingPage