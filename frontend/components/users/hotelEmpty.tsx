import React from 'react'
import { MapPin } from 'lucide-react';
function HotelEmpty() {
      return (
        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <MapPin className="w-7 h-7 text-gray-500" />
          </div>
          <h3 className="text-white font-semibold text-lg mb-1">No properties found</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Try searching for a different location or adjusting your filters.
          </p>
        </div>
      );
    }

export default HotelEmpty