import React from 'react';
import { footer } from '@/lib/constants/landing';
import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ripple rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping [animation-delay:1.5s] [animation-duration:2s]" />
      <a
        href={footer.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full  flex items-center justify-center transition-all duration-500 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative w-12 h-12">
          <Image src="/logos/whatsapp.png" fill alt="whatsapp icon" className="object-contain" />
        </div>
      </a>
    </div>
  );
}