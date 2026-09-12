'use client';

import Link from 'next/link';
import { X, Home, ShoppingBag, Search, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: Props) {
  if (!open) return null;

  const waLink = getWhatsAppLink(`Hello ${siteConfig.name}! 👋 I'd love to see your collection.`);

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-card shadow-xl animate-slide-in-right p-6 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-serif font-bold">
            Dimple<span className="text-primary"> KreativeArts</span>
          </span>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 rounded-xl text-foreground/80 hover:bg-secondary hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-[#25D366] text-white px-4 py-3 rounded-full text-center font-medium hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

export function MobileBottomNav() {
  const waLink = getWhatsAppLink(`Hello ${siteConfig.name}! 👋 I'd love to see your collection.`);

  const items = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Shop', href: '/shop', icon: ShoppingBag },
    { label: 'Search', href: '/shop?q=', icon: Search },
    { label: 'WhatsApp', href: waLink, icon: MessageCircle, external: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card/95 backdrop-blur-md border-t border-border/50 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          return item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 px-3 py-1.5 text-foreground/60 hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 px-3 py-1.5 text-foreground/60 hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
