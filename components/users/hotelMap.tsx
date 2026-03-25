'use client';

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { X, Map } from 'lucide-react';
import type { Hotel } from '@/types/hotel';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;


interface HotelMapProps {
  hotels: Hotel[];
  selectedHotelId: string | null;
  onSelectHotel: (id: string) => void;
  onClose?: () => void;
}

export default function HotelMap({ hotels, selectedHotelId, onSelectHotel, onClose }: HotelMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [3.3792, 6.5244], // Lagos default
      zoom: 6,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Clear old markers
    markers.current.forEach(m => m.remove());
    markers.current = [];

    // Add new markers
    hotels.forEach(hotel => {
      if (!hotel.longitude || !hotel.latitude) return;

      const el = document.createElement('div');
      el.className = 'hotel-marker';
      el.innerHTML = `<div style="
        background: ${selectedHotelId === hotel.id ? '#C59F59' : '#1a2332'};
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
        border: 2px solid ${selectedHotelId === hotel.id ? '#C59F59' : '#1a2332'};
        cursor: pointer;
        white-space: nowrap;
      ">₦${hotel.price.toLocaleString()}</div>`;

      el.addEventListener('click', () => onSelectHotel(hotel.id));

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([hotel.longitude, hotel.latitude])
        .addTo(map.current!);

      markers.current.push(marker);
    });

    // Fit map to markers
    if (hotels.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      hotels.forEach(h => {
        if (h.longitude && h.latitude) bounds.extend([h.longitude, h.latitude]);
      });
      map.current.fitBounds(bounds, { padding: 60 });
    }
  }, [hotels, onSelectHotel, selectedHotelId]);



  return (
      <div className="absolute inset-0 w-full h-full">
      {/* Close button mobile only */}
      <div className="md:hidden absolute insert-0 top-20 right-4 z-10">
        <button
          onClick={onClose}
          className="bg-[#1a2332] border border-white/10 rounded-full p-2"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Empty state overlay */}
      {!hotels.length && (
        <div className="absolute inset-0 z-10 bg-[#1a2332] flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
            <Map className="w-7 h-7 text-gray-500" />
          </div>
          <p className="text-white text-sm font-semibold">Search for hotels</p>
          <p className="text-gray-400 text-xs">Enter a location to see hotels on the map</p>
        </div>
      )}

      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}