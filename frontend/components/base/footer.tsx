'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { footer } from '@/lib/constants/landing';
import Image from 'next/image';
import { landingApi } from '@/lib/api';
export default function Footer() {
  const [email, setEmail] = useState('')
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState('');
  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setIsPending(true);
    setMessage('');
    try {
      const res = await landingApi.subscribeNewsletter(email);
      setMessage("You're subscribed!");
      setEmail('');
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('Failed to subscribe. Try again.');
      }
    } finally {
      setIsPending(false);
    }
  };
  return (
    <footer className="bg-primary/90 px-8 pt-16 pb-8" id="contact">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logos/hotelxpace.svg" alt="logo" height={30} width={30} />
              <span className="text-xl font-bold text-gold">{footer.logo}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{footer.description}</p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {footer.socials.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-gold/40 hover:bg-white/10 transition-colors"
                >
                  {social.type === 'icon'
                    ? <Globe className="w-4 h-4 text-gray-400" />
                    : <Image src={social.src!} alt={social.alt} width={20} height={20} className='invert' />
                  }
                </Link>
              ))
              }
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="space-y-3">
              {footer.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-5">Newsletter</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Subscribe to receive the latest luxury travel insights and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="example@email"
                className="flex-1 bg-[#0D1F35] border border-white/10 text-sm text-white placeholder:text-gray-500 px-4 py-2.5 rounded-l-lg outline-none focus:border-gold/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubscribe}
                disabled={isPending}
                className="bg-gold hover:bg-[#e2a430] text-white text-sm font-semibold px-4 py-2.5 rounded-r-lg transition-colors disabled:opacity-50"
              >
                {isPending ? 'Joining...' : 'Join'}
              </button>

            </div>
            {message && (
              <p className="text-xs mt-2 text-gold">{message}</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">{footer.copy}</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">Designed for Perfection</span>
            <span className="text-xs text-gray-500">Global Locations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}