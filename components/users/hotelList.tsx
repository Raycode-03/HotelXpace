'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import { HotelCardSkeleton } from '../common/skeleton';
import HotelFilter from './hotelFilter';
import type { Hotel } from '@/types/hotel';
import { HotelCard } from './hotelCard';
import  HotelEmpty  from './hotelEmpty'
interface HotelListProps {
  onShowMap: () => void;
  type: string;
  price: string;
  onTypeChange: (v: string) => void;
  onPriceChange: (v: string) => void;
  hotels: Hotel[];
  isLoading: boolean;
  selectedHotelId: string | null;
  onSelectHotel: (id: string) => void;
}


export default function HotelList({ onShowMap, onTypeChange, onPriceChange, type, price, hotels, isLoading, selectedHotelId, onSelectHotel }: HotelListProps) {
  const [filterOpen, setFilterOpen] = useState(false); 

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 p-4">
        {Array.from({ length: 5 }).map((_, i) => <HotelCardSkeleton key={i} />)}
      </div>
    );
  }

  if (!hotels.length) {
    return <HotelEmpty />;
  }

  return (
    <section className=''>
      {/* Filter bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <span className="text-gray-400 text-sm">{hotels.length} properties found</span>
         <button onClick={() => setFilterOpen(true)} className="flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider cursor-pointer">
          <Image src='/logos/tune.png' width={14} height={14} alt='filter icon' />
          Filters
        </button>
        {filterOpen && (
          <HotelFilter
            type={type}
            price={price}
            onTypeChange={onTypeChange}
            onPriceChange={onPriceChange}
            onClose={() => setFilterOpen(false)}
          />
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 p-4">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            {...hotel}
            address={hotel.address ?? hotel.location}
            image={hotel.image ?? '/images/hero-bg.jpg'}
            onClick={() => onSelectHotel(hotel.id)}
            selected={selectedHotelId === hotel.id}
          />
        ))}
      </div>
      <div className="w-full md:hidden flex justify-center py-4">
        <Button onClick={() => onShowMap()} className='bg-gold text-blackitems-center p-5 rounded-lg'>
          <Image src='/logos/info.png' width={20} height={20} alt='info icon' />Show Map
        </Button>
      </div>
    </section>
  );
}
