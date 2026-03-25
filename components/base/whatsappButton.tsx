import React from 'react';
import { footer } from '@/lib/constants/landing';
import Image from 'next/image';
export default function WhatsAppButton() {
  return (
    <a
      href={footer.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] shadow-lg hover:shadow-[#25D366]/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <Image src="/logos/whatsapp.png" fill alt='whatsapp icon'/>
      
    </a>
  );
}