'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Palette, MessageCircle, Gift, Heart, ShoppingBag } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { categories, products, getFeaturedProducts, getOnSaleProducts } from '@/lib/products';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const saleProducts = getOnSaleProducts().slice(0, 8);
  const waLink = getWhatsAppLink(`Hello ${siteConfig.name}! 👋 I'd love to see your collection.`);

  return (
    <>
      <Hero />

      {/* Featured Categories */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Browse by Category
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From hair accessories to crochet bouquets, find exactly what you're looking for.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Best Sellers / Featured */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Handpicked Favourites
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* On Sale */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Limited Time
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
              On Sale Now
            </h2>
          </div>
          <Link
            href="/shop?sale=true"
            className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {saleProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Customization Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/40 p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative">
              <Palette className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Your colour. Your idea.{' '}
                <span className="text-primary">Your creation.</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                Love a product but want it in a different colour? Looking for
                something completely unique? Every creation can be customized to
                your vision.
              </p>
              <Link
                href="/custom-orders"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <Sparkles className="w-4 h-4" />
                Request a Custom Creation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dimple_KreativeArts */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
            Why {siteConfig.name}?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: 'Handcrafted Creations',
              desc: 'Every piece is handmade with love and attention to detail.',
            },
            {
              icon: Palette,
              title: 'Customizable Designs',
              desc: 'Choose your colours, patterns and styles for a personal touch.',
            },
            {
              icon: MessageCircle,
              title: 'Personalized Ordering',
              desc: 'Order directly through WhatsApp for a personal, easy experience.',
            },
            {
              icon: Gift,
              title: 'Perfect for Gifting',
              desc: 'Thoughtful handmade gifts for every occasion and celebration.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
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

      {/* Gift Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/29753251/pexels-photo-29753251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Handmade crochet gift bouquets"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Gift className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-balance">
                Looking for a cute handmade gift?
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Whether it's a birthday, anniversary, or just because — a handmade
                crochet gift shows you care. From adorable keychains to beautiful
                flower bouquets, find something special for your loved ones.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Personalized with their favourite colours',
                  'Unique — no two pieces are exactly alike',
                  'Made with love, given with love',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/shop?category=Gifts"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Browse Gifts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Have something specific in mind?
            </h2>
            <p className="text-background/70 mt-4 max-w-2xl mx-auto">
              Let's create it together. Message us on WhatsApp and we'll bring your
              idea to life.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
