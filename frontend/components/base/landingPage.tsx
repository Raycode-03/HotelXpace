import React from 'react'
import Hero from './hero'
import Navbar from "./navbar"
import StaysSection from './staysSection'
import WhyUsSection from './whyUsSection'
import StatsSection from './statsSection'
import Footer from './footer'
import HowItWorksSection from './howItWorksSection'
import WhatsAppButton from '@/components/base/whatsappButton';
import { useWarmBackend } from '@/hooks/useWarmBackend'
function LandingPage() {
   useWarmBackend();
  return (
    <>
      <WhatsAppButton />
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