'use client';

import Link from 'next/link';
import { Instagram, Mail, MessageCircle, Heart } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export function Footer() {
  const waLink = getWhatsAppLink(`Hello ${siteConfig.name}! 👋 I'd love to see your collection.`);

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-3">
              Dimple<span className="text-primary"> KreativeArts</span>
            </h3>
            <p className="text-background/70 max-w-md leading-relaxed">
              {siteConfig.brandIntro}
            </p>
            <p className="text-background/70 max-w-md leading-relaxed mt-2">
              Handcrafted crochet accessories, keychains, flowers, bouquets, and
              customized creations — each piece made with love.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Explore</h4>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @{siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-background/50">
            <p className="flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by hand
            </p>
            <span className="hidden sm:inline text-background/20">·</span>
            <p className="flex items-center gap-1.5">
              Designed with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by{' '}
              <a
                href="https://www.instagram.com/pratik.p_pvt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-2"
              >
                Pratik Patil
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
