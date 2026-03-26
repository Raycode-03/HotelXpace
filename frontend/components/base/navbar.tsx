'use client';

import React, { useState, useEffect ,useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#about' },
  { label: 'Popular Stays', href: '#stays' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // mobile menu
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-primary/90 backdrop-blur-md shadow-sm '
      : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center align-center justify-between">

        {/* Logo */}
        <div className="flex items-center h-20 w-[156px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/hotelxpace.svg" alt="logo" height={30} width={30} />
            <span className="text-gold text-2xl font-black tracking-tight">
              Hotel<span className="text-3xl">X</span>pace
            </span>
          </Link>
        </div>
        <div className='hidden md:flex items-center gap-8'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-400 hover:text-gray-200' : 'text-white hover:text-white'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/hotels"
            className="bg-gold hover:bg-[#e2a430] text-white text-sm font-semibold px-5 py-2 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className='text-gold w-5 h-5'/> : <Menu className={`${scrolled ? 'text-gold':'invert'} w-5 h-5 `} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute right-4 top-16 md:hidden w-48 bg-[#0A192F] px-4 py-4 flex flex-col gap-4 rounded-lg" ref={menuRef}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-gray-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/hotels"
            onClick={() => setMenuOpen(false)}
            className="bg-gold hover:bg-[#e2a430] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;