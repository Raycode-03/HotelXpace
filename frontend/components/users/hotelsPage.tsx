"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HotelList from "./hotelList";
import HotelMap from "./hotelMap";
import { hotelApi } from "@/lib/api";
interface HotelsPageProps {
  query: string;
  type: string;
  price: string;
  limit: number;
}

export default function HotelsPage({
  query,
  type,
  price,
  limit,
}: HotelsPageProps) {
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);
  const [activeType, setActiveType] = useState(type);
  const [activePrice, setActivePrice] = useState(price);

  const { data: hotelData, isLoading } = useQuery({
    queryKey: ["hotels", query, activeType, activePrice, limit],
    queryFn: () =>
      hotelApi.hotelCardList(query, activeType, activePrice, limit),
    enabled: !!query || !!activeType || !!activePrice,
    staleTime: 1000 * 60 * 2,
    retry: 3, 
    retryDelay: 2000,
  });

  const hotels = hotelData?.hotels ?? [];

  return (
    <div className="pt-20 md:pt-14 lg:pt-16 top-0 flex flex-col md:flex-row h-screen bg-primary/90">
      <div
        className={`${mapOpen ? "hidden" : "flex"} md:flex flex-col w-full md:w-[40%] overflow-y-auto`}
      >
        <HotelList
          onShowMap={() => setMapOpen(true)}
          type={activeType}
          price={activePrice}
          onTypeChange={setActiveType}
          onPriceChange={setActivePrice}
          hotels={hotels}
          isLoading={isLoading}
          selectedHotelId={selectedHotelId}
          onSelectHotel={setSelectedHotelId}
        />
      </div>

      {/* Map — fullscreen on mobile when open, always visible on desktop */}
      <div
        className={`${mapOpen ? "fixed inset-0 z-40 flex flex-col" : "hidden"} md:relative md:flex md:w-[60%]  md:h-auto`}
      >
        <HotelMap
          onClose={() => setMapOpen(false)}
          hotels={hotels}
          selectedHotelId={selectedHotelId}
          onSelectHotel={setSelectedHotelId}
        />
      </div>
    </div>
  );
}
