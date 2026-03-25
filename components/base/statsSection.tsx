'use client';

import React from 'react';
import { Bed, Globe, Star, Headset } from 'lucide-react';
import { stats } from '@/lib/constants/landing';
import { useGsapScaleFade } from '@/hooks/useGsapAnimation';

export default function StatsSection() {
  const cardRef = useGsapScaleFade({ delay: 0.2 });

  // Map icons to each stat (based on index)
  const icons = [Bed, Globe, Star, Headset];

  return (
    <section
      id="stats"
      className="py-16 px-4 bg-primary/90 backdrop-blur-md text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={cardRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((item, index) => {
            const Icon = icons[index];

            return (
              <div key={index} className="flex flex-col items-center gap-4">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1E3A5F]">
                  <Icon className="w-6 h-6 text-gold" />
                </div>

                {/* Value */}
                <h2 className="text-3xl font-bold">
                  {item.value}
                </h2>

                {/* Label */}
                <p className="text-sm tracking-widest text-gray-300">
                  {item.label.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}