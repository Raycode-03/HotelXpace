'use client';
import React from 'react';
import { featuredHotels } from '@/lib/constants/landing';
import { useGsapFadeUp, useGsapFadeLeft } from '@/hooks/useGsapAnimation';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import MediaDisplay from '../common/mediaDisplay';
import { CardContent, CardFooter } from '../ui/card';

export default function StepsSection() {
  const titleRef = useGsapFadeUp();
  const step0Ref = useGsapFadeLeft({ delay: 0 });
  const step1Ref = useGsapFadeLeft({ delay: 0.15 });
  const step2Ref = useGsapFadeLeft({ delay: 0.3 });

  return (
    <section id="stays" className="py-16 px-8 bg-primary/90">
      {/* Header row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <div ref={titleRef}>
          <h2 className="text-3xl font-bold text-white pb-2 relative w-fit after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-gold">
  {featuredHotels.title}
</h2>
        </div>
        <Link
          href="/hotels"
          className="flex items-center gap-1 text-gold hover:text-[#e0b96a] transition-colors text-sm font-medium"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {featuredHotels.items.map((menu, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-2xl bg-[#0D1F35] border border-white/10 transition hover:border-gold/40 hover:shadow-lg hover:shadow-black/30"
          >
            {/* Image with rating badge */}
            <div className="relative">
              <MediaDisplay
                image_url={menu.image}
                alt={menu.name}
                className="h-52 w-full" 
              />
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 rounded-md">
                <span className="text-yellow-500">★</span>
                {menu.rating}
              </div>
            </div>

            <CardContent className="p-4 space-y-1 flex-1">
              <h3 className="text-base font-semibold text-white line-clamp-1">
                {menu.name}
              </h3>
              <p className="text-sm text-gray-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {menu.location}
              </p>
            </CardContent>

            <CardFooter className="flex items-center justify-between p-4 pt-0 mt-auto">
              <p className="text-base font-bold">
                <span className="text-gold">${menu.price.toLocaleString()}</span>
                <span className="text-gray-400 text-sm font-normal">/night</span>
              </p>
              <Link
                href={`/hotels/?search=${menu.name}`}
                className="w-9 h-9 rounded-lg bg-[#c59f5952] flex items-center justify-center hover:bg-[#e2a430] transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </CardFooter>
          </div>
        ))}
      </div>
    </section>
  );
}