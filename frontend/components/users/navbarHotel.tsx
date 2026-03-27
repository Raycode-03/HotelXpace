'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';

interface NavbarHotelProps {
  query: string;
  setQuery: (v: string) => void;
}

function NavbarHotel({ query, setQuery }: NavbarHotelProps) {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary/90 backdrop-blur-md shadow-sm border-b  border-white/10`}>

      {/* Mobile search overlay */}
      {mobileSearchOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 h-16 flex items-center px-4 z-50 bg-primary/90 shadow-md">
          <SearchBar
            query={query?.trim() || ''}
            setQuery={setQuery}
            setShowSearchResults={setShowSearchResults}
            inputRef={searchInputRef}
          />
          <button
            onClick={() => {
              setMobileSearchOpen(false);
              setQuery('');
              setShowSearchResults(false);
            }}
            className="ml-2 p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center h-20 w-[156px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/hotelxpace.svg" alt="logo" height={30} width={30} />
            <span className="text-gold text-2xl font-black tracking-tight">
              Hotel<span className="text-3xl">X</span>pace
            </span>
          </Link>
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex items-center">
          <SearchBar
            query={query}
            setQuery={setQuery}
            setShowSearchResults={setShowSearchResults}
            inputRef={searchInputRef}
          />
        </div>

        {/* Mobile search icon */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-800"
          onClick={() => setMobileSearchOpen(true)}
        >
          <Search className="w-5 h-5" />
        </button>

      </div>
    </nav>
  );
}

export default NavbarHotel;