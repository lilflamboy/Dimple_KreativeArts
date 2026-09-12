'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export function Hero() {
  const waLink = getWhatsAppLink(`Hello ${siteConfig.name}! 👋 I'd love to see your collection.`);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <span className="inline-block bg-secondary text-foreground/70 text-sm px-4 py-1.5 rounded-full mb-6">
              ✨ {siteConfig.brandIntro}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-balance">
              Handmade with{' '}
              <span className="text-primary">love</span>,<br />
              made just for <span className="text-accent">you</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Discover handcrafted crochet accessories, cute gifts, personalized
              creations and beautiful handmade décor from {siteConfig.name}.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border px-8 py-4 rounded-full font-medium hover:border-primary/30 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Order on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-2xl font-bold font-serif text-foreground">60+</p>
                <p className="text-sm text-muted-foreground">Handmade Products</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-2xl font-bold font-serif text-foreground">8</p>
                <p className="text-sm text-muted-foreground">Collections</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-2xl font-bold font-serif text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Handcrafted</p>
              </div>
            </div>
          </div>

          {/* Right: Image collage */}
          <div className="relative hidden lg:block animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/20269075/pexels-photo-20269075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Crochet flower bouquet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/38634277/pexels-photo-38634277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Crochet keychains"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/30284737/pexels-photo-30284737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Crochet scrunchie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/15469188/pexels-photo-15469188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Crochet wedding bouquet"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-xl p-4 border border-border/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🧶</span>
                </div>
                <div>
                  <p className="text-xs font-semibold">100% Handmade</p>
                  <p className="text-[10px] text-muted-foreground">Crafted with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
