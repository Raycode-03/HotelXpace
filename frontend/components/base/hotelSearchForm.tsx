'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search, MapPin, Building2, DollarSign } from 'lucide-react'

const locations = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Warri']
const types = ['Hotel', '2-star hotel', '3-star hotel', '4-star hotel', '5-star hotel'];
const priceRanges = ['₦0 - ₦30,000', '₦30,000 - ₦60,000', '₦60,000 - ₦100,000', '₦100,000+']

export default function HotelSearchForm() {
  const router = useRouter()
  
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location) params.set('location', location)
    if (type) params.set('type', type)
    if (price) params.set('price', price)
       params.set('limit', '20') 
    router.push(`/hotels?${params.toString()}`)
  }

  return (
    <div className="bg-primary/90 backdrop-blur-md rounded-xl p-8 flex flex-col md:flex-row gap-4 w-full  max-w-3xl md:max-w-5xl">
      
      {/* Location */}
      <div className="flex-1">
        <label className="text-xs text-gray-400 uppercase tracking-wide mb-1 block">Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#243040] text-white text-sm pl-9 pr-4 py-2.5 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer"
          >
            <option value="">Where are you going?</option>
            {locations.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Type */}
      <div className="flex-1">
        <label className="text-xs text-gray-400 uppercase tracking-wide mb-1 block">Type</label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-[#243040] text-white text-sm pl-9 pr-4 py-2.5 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-goldor-pointer"
          >
            <option value="">Property Type</option>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Price */}
      <div className="flex-1">
        <label className="text-xs text-gray-400 uppercase tracking-wide mb-1 block">Price Range</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-[#243040] text-white text-sm pl-9 pr-4 py-2.5 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-goldor-pointer"
          >
            <option value="">Range</option>
            {priceRanges.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Button */}
      <div className="flex items-end">
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-gold hover:bg-[#e2a430] text-white font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4" />
          Search Hotel
        </button>
      </div>

    </div>
  )
}