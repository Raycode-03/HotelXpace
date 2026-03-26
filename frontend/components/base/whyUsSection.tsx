'use client';
import React from 'react';
import { whyUs } from '@/lib/constants/landing';
import { useGsapFadeUp, useGsapScaleFade } from '@/hooks/useGsapAnimation';

export default function WhyUsSection() {
  const titleRef = useGsapFadeUp();
  const card0 = useGsapScaleFade({ delay: 0 });
  const card1 = useGsapScaleFade({ delay: 0.1 });
  const card2 = useGsapScaleFade({ delay: 0.2 });
  const card3 = useGsapScaleFade({ delay: 0.3 });
  const card4 = useGsapScaleFade({ delay: 0.4 });
  const card5 = useGsapScaleFade({ delay: 0.5 });
  const cardRefs = [card0, card1, card2, card3, card4, card5];

  return (
    <section id="whyus" className="py-20 px-8 bg-primary/90">
      <div className="max-w-5xl mx-auto">
        {/* Title block */}
        <div ref={titleRef} className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">{whyUs.title}</h2>
          <p className="text-sm text-gray-400 mt-3 max-w-lg mx-auto leading-relaxed">
            {whyUs.description}
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {whyUs.items.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                ref={cardRefs[index]}
                className="flex flex-row gap-3 gap-y-12"
              >
                {/* Icon box */}
                <div className="w-20 h-11 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}