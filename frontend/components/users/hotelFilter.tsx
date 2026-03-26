'use client';

import React , {useState} from 'react';
import { X, Building2, DollarSign } from 'lucide-react';

const types = ['Hotel', '2-star hotel', '3-star hotel', '4-star hotel', '5-star hotel'];
const priceRanges = ['₦0 - ₦30,000', '₦30,000 - ₦60,000', '₦60,000 - ₦100,000', '₦100,000+'];

interface HotelFilterProps {
  type: string;
  price: string;
  onTypeChange: (v: string) => void;
  onPriceChange: (v: string) => void;
  onClose: () => void;
}

export default function HotelFilter({ type, price, onTypeChange, onPriceChange, onClose }: HotelFilterProps) {
  const [pendingType, setPendingType] = useState(type);
  const [pendingPrice, setPendingPrice] = useState(price);

  function handleApply() {
    onTypeChange(pendingType);   // only fires when Apply is clicked
    onPriceChange(pendingPrice);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full md:max-w-sm bg-[#1a2332] rounded-t-2xl md:rounded-2xl p-6 z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-semibold text-base">Filters</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Type */}
        <div className="mb-5">
          <label className="text-xs text-gray-400 uppercase tracking-wide mb-2 block flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" /> Property Type
          </label>
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setPendingType(pendingType === t ? '' : t)} 
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                   pendingType === t
                    ? 'bg-gold border-gold text-black font-semibold'
                    : 'border-white/10 text-gray-400 hover:border-gold/40'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="text-xs text-gray-400 uppercase tracking-wide mb-2 block flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5" /> Price Range
          </label>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((p) => (
              <button
                key={p}
                 onClick={() => setPendingPrice(pendingPrice === p ? '' : p)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                   pendingPrice === p
                    ? 'bg-gold border-gold text-black font-semibold'
                    : 'border-white/10 text-gray-400 hover:border-gold/40'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Apply */}
        <button
           onClick={handleApply}
          className="w-full bg-gold text-black font-semibold py-2.5 rounded-lg text-sm cursor-pointer"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}