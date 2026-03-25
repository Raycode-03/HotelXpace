'use client';
import React from 'react';
import { MapPin, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { footer } from '@/lib/constants/landing';



// --- Hotel Card ---
interface HotelCardProps {
  category: string;
  rating: number;
  name: string;
  address: string;
  price: number;
  image: string;
  onClick?: () => void;
  selected: boolean;
}



function optimizeCloudinaryUrl( url: string ) {
  if (!url || !url.includes('cloudinary.com')) return url
  return url.replace('/upload/', '/upload/w_800,q_auto,f_auto/');
}

export function HotelCard({ category, rating, name, address, price, image, onClick, selected }: HotelCardProps) {
  const message = `Hi, I'm interested in ${name} located at ${address}. Price: ₦${price}/night`;
  const encoded = encodeURIComponent(message);
  const whatsapp = footer.whatsapp
  
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl p-3 cursor-pointer transition-colors ${selected
        ? 'bg-gradient-to-r from-[#C59F59]/30 to-[#1a2332] border-l-4 border-gold'
        : 'bg-[#1a2332] hover:bg-[#293d57] border-l-4 border-transparent'
        }`}
    >
      {/* Image */}
      <Image
        src={optimizeCloudinaryUrl(image)}
        alt={name}
        className="w-20 h-20 rounded-lg object-cover shrink-0"
        height={200}
        width={200}
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-semibold text-gold uppercase tracking-wider">
            {category}
          </span>
          <span className="flex items-center gap-0.5 text-[10px] text-yellow-400">
            <Star className="w-3 h-3 fill-yellow-400" />
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="text-white font-semibold text-sm truncate">{name}</p>
        <p className="flex items-center gap-1 text-gray-400 text-xs mt-0.5 truncate">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="truncate">{address}</span>
        </p>
        <p className="text-white text-sm font-bold mt-1">
          ₦{price} <span className="text-gray-400 text-xs font-normal">/ night</span>
        </p>
      </div>

      {/* Arrow */}

      <a
        href={`${whatsapp}?text=${encoded}`}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
        className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 hover:bg-gold/20 transition-colors"
      >
        <ChevronRight className="w-4 h-4 text-gold" />
      </a>
    </div>
  );
}

