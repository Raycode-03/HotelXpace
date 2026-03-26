'use client';
import React from 'react';
import { howItWorks } from '@/lib/constants/landing';
import { useGsapFadeUp, useGsapScaleFade } from '@/hooks/useGsapAnimation';

export default function HowItWorksSection() {
  const titleRef = useGsapFadeUp();
  const card0 = useGsapScaleFade({ delay: 0 });
  const card1 = useGsapScaleFade({ delay: 0.15 });
  const card2 = useGsapScaleFade({ delay: 0.3 });
  const cardRefs = [card0, card1, card2];

  return (
    <section id="how-it-works" className="py-20 px-8 bg-primary/90">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">{howItWorks.title}</h2>
          <p className="text-sm text-gray-400 mt-3">
            Your journey to luxury starts here with three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3  items-center md:items-start justify-between gap-10">
          {/* Connector line (desktop only) */}
          <div className="hidden sm:block absolute top-[2.6rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-white/20" />

          {howItWorks.items.map((item, index) => (
            <div
              key={index}
              ref={cardRefs[index]}
              className="relative flex flex-col items-center text-center flex-1 z-10"
            >
              {/* Number box */}
              <div className="w-20 h-20 rounded-2xl border-2 border-gold flex items-center justify-center mb-6 primary/90">
                <span className="text-2xl font-bold text-gold">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}