'use client';

import Link from 'next/link';
import { Heart, Palette, MessageCircle, Sparkles, Gift, ShoppingBag } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export default function AboutPage() {
  const waLink = getWhatsAppLink(`Hello ${siteConfig.name}! 👋 I'd love to know more about your work.`);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-secondary text-foreground/70 text-sm px-4 py-1.5 rounded-full mb-6">
            ✨ {siteConfig.brandIntro}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            About <span className="text-primary">{siteConfig.name}</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            A creative space where art, learning & customized creations come together.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/7585259/pexels-photo-7585259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Handmade crochet craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Handmade with Love
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {siteConfig.name} is a creative brand dedicated to handmade crochet
                products and customized creations. Every piece is crafted with care,
                one stitch at a time.
              </p>
              <p>
                From hair accessories and keychains to beautiful flower bouquets and
                cute character dolls, each creation is made to bring joy. We believe
                that handmade items carry a warmth and personality that mass-produced
                products simply can't match.
              </p>
              <p>
                Customization is at the heart of what we do. Whether it's a favourite
                colour, a special occasion, or a completely unique idea — we love
                bringing your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">What We Believe</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: 'Made by Hand',
              desc: 'Every product is handcrafted with attention and care.',
            },
            {
              icon: Palette,
              title: 'Customizable',
              desc: 'Your colours, your ideas, your unique creations.',
            },
            {
              icon: Gift,
              title: 'Made for Gifting',
              desc: 'Thoughtful, personal gifts for every occasion.',
            },
            {
              icon: MessageCircle,
              title: 'Direct Support',
              desc: 'Personal, friendly service directly through WhatsApp.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-foreground text-background rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-serif">60+</p>
              <p className="text-sm text-background/60 mt-1">Products</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-serif">8</p>
              <p className="text-sm text-background/60 mt-1">Collections</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-serif">100%</p>
              <p className="text-sm text-background/60 mt-1">Handmade</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-serif">∞</p>
              <p className="text-sm text-background/60 mt-1">Custom Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Ready to explore?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Browse our collection or message us on WhatsApp — we'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Collection
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
