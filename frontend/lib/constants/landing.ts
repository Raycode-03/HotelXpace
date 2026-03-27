// constants/landing.ts
import { MapPin, Star, Shield, Zap, Filter, MessageCircle } from 'lucide-react'

const thisYear = new Date().getFullYear()

export const hero = {
  title: "Find Your Perfect Stay,",
  titleAccent: "Anywhere.",
  description: "Discover luxury accommodations near you in seconds. Compare deals, explore locations, and book your perfect stay with ease.",
  btn: "Explore Hotels",
  getMore: "Learn More",
}

export const featuredHotels = {
  title: "Popular Stays",
  description: "Handpicked top-rated hotels loved by travellers.",
  items: [
    {
      image: "/images/hotel-1.jpg",
      name: "Eko Hotel & Suites",
      location: "Victoria Island, Lagos",
      rating: 4.9,
      reviews: 3241,
      price: "₦85,000",
      type: "Luxury Hotel",
    },
    {
      image: "/images/hotel-2.jpg",
      name: "Transcorp Hilton",
      location: "Maitama, Abuja",
      rating: 4.8,
      reviews: 2891,
      price: "₦120,000",
      type: "5-Star Hotel",
    },
    {
      image: "/images/hotel-3.jpg",
      name: "Southern Sun Ikoyi",
      location: "Ikoyi, Lagos",
      rating: 4.7,
      reviews: 1902,
      price: "₦65,000",
      type: "Boutique Hotel",
    },
    {
      image: "/images/hotel-4.jpg",
      name: "Radisson Blu Ikeja",
      location: "Ikeja, Lagos",
      rating: 4.6,
      reviews: 1543,
      price: "₦55,000",
      type: "Business Hotel",
    },
  ],
}

export const whyUs = {
  title: "Why Choose HotelXpace",
  description: "Everything you need to find and book the perfect stay in Nigeria.",
  items: [
    {
      icon: MapPin,
      title: "Search by Location",
      description: "Find hotels across Lagos, Abuja, and more by simply searching your destination.",
    },
    {
      icon: Star,
      title: "Top Rated Stays",
      description: "Browse highly rated hotels ordered by guest ratings so you always get the best.",
    },
    {
      icon: Filter,
      title: "Filter Your Way",
      description: "Narrow results by price range and hotel category to match your budget and preference.",
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All hotels are real, verified listings with accurate pricing and location data.",
    },
    {
      icon: MessageCircle,
      title: "Contact via WhatsApp",
      description: "Reach out to us instantly through WhatsApp for booking help or enquiries.",
    },
    {
      icon: Zap,
      title: "Fast & Simple",
      description: "Clean, fast search experience with no clutter — just find your hotel and go.",
    },
  ],
}

export const howItWorks = {
  title: "How It Works",
  items: [
    {
      step: "01",
      title: "Enter Your Location",
      description: "Type a city or allow location access to find hotels near you.",
    },
    {
      step: "02",
      title: "Browse Results",
      description: "View hotels on a live map and as cards with ratings, images and details.",
    },
    {
      step: "03",
      title: "Pick Your Stay",
      description: "Read AI-generated summaries and choose the hotel that fits you best.",
    },
  ],
}

export const stats = [
  { value: "10K+", label: "Hotels Listed" },
  { value: "50+", label: "Cities Covered" },
  { value: "4.9", label: "Average Rating" },
  { value: "24/7", label: "Always Available" },
]

export const footer = {
  logo: "HotelXpace",
  description: "Redefining the standards of luxury travel and accommodation across the globe. Find your next unforgettable experience with us.",
  quickLinks: [
    { label: "Destinations", href: "#hotels" },
    { label: "Popular Stays", href: "#stays" },
    { label: "Why Us", href: "#whyus" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
 socials: [
  { href: 'https://x.com/@AkereleRaymond0', type: 'image', src: '/logos/xicon.png', alt: 'X' },
  { href: 'https://wa.me/09167019229', type: 'image', src: '/logos/icons8-whatsapp.png', alt: 'WhatsApp' },
  { href: 'https://yourwebsite.com', type: 'icon', alt: 'Website' },
],
  copy: `© ${thisYear} HotelXpace Luxury Stays. All rights reserved.`,
  whatsapp: "https://wa.me/09167019229",
};