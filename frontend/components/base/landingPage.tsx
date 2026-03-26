import React from 'react'
import Hero from './hero'
import Navbar from "./navbar"
import StaysSection from './staysSection'
import WhyUsSection from './whyUsSection'
import StatsSection from './statsSection'
import Footer from './footer'
import HowItWorksSection from './howItWorksSection'
import WhatsAppButton from '@/components/base/whatsappButton';
function landingPage() {
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

export default landingPage