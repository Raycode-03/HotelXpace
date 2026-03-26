'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hero } from "@/lib/constants/landing";
import { useIsMobile } from '@/hooks/use-mobile';
import { useGsapFadeUp, useGsapFadeRight } from '@/hooks/useGsapAnimation';
import HotelSearchForm from '@/components/base/hotelSearchForm'
const Hero = () => {
  const isMobile = useIsMobile();
  // refs
  const titleRef = useGsapFadeUp({ scroll: false, delay: 0 });
  const descRef = useGsapFadeUp({ scroll: false, delay: 0.2 });
  const btnRef = useGsapFadeUp({ scroll: false, delay: 0.4 });
  return (
    <div className="relative mt-0 min-h-[70vh] md:min-h-screen overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Restaurant background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-24 pb-16 lg:py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 ref={titleRef} className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
          {hero.title}<br />
          <span className="text-gold">{hero.titleAccent}</span>
        </h1>

        <p ref={descRef} className="mt-6 text-base lg:  text-xl text-white/80 leading-relaxed max-w-md mx-auto">
          {hero.description}
        </p>

        {/* form */}
        <div ref={btnRef} className="mt-8 w-full max-w-3xl md:max-w-5xl px-4">
          <HotelSearchForm />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default Hero;