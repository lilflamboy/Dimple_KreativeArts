'use client';

import { useState } from 'react';
import { Sparkles, Palette, MessageCircle, Heart, Gift } from 'lucide-react';
import { getWhatsAppLink, siteConfig } from '@/lib/config';
import { generateCustomOrderMessage } from '@/lib/whatsapp';

export default function CustomOrdersPage() {
  const [form, setForm] = useState({
    what: '',
    color: '',
    occasion: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateCustomOrderMessage(form);
    const link = getWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Custom <span className="text-primary">Creations</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Have something special in mind? Your colour, your idea, your creation —
            let's bring it to life together.
          </p>
        </div>
      </div>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              step: '1',
              title: 'Tell Us Your Idea',
              desc: 'Share what you have in mind — colours, design, occasion, anything!',
            },
            {
              icon: Heart,
              step: '2',
              title: 'We Craft It',
              desc: 'Each piece is handmade with love, tailored to your request.',
            },
            {
              icon: Gift,
              step: '3',
              title: 'Receive Your Creation',
              desc: 'Your unique handmade piece is ready — arranged via WhatsApp.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-3xl font-serif font-bold text-primary/20">
                    {item.step}
                  </span>
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

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm">
          <h2 className="font-serif text-2xl font-bold mb-2">Request a Custom Creation</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Fill in the details below and we'll discuss your idea on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                What would you like? <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                value={form.what}
                onChange={(e) => setForm({ ...form, what: e.target.value })}
                placeholder="e.g. A crochet bouquet in pastel colours"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred colour
              </label>
              <input
                type="text"
                value={form.color}
                onChange={(e) => setForm({ ...form, color: e.target.value })}
                placeholder="e.g. Pink, lavender, yellow..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Occasion
              </label>
              <input
                type="text"
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                placeholder="e.g. Birthday gift, wedding, anniversary..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Approximate budget
              </label>
              <input
                type="text"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                placeholder="e.g. ₹500 - ₹1000"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Additional message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Any other details you'd like to share..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-4 rounded-full font-medium hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Discuss on WhatsApp
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            This will open WhatsApp with your request pre-filled. No payment needed
            — we'll discuss everything there!
          </p>
        </div>
      </section>

      {/* Examples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            What Can Be Customized?
          </h2>
          <p className="text-muted-foreground mt-2">
            Almost anything! Here are some popular requests:
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Custom colour hair accessories',
            'Personalized alphabet keychains',
            'Themed crochet bouquets',
            'Character dolls & amigurumi',
            'Car & home décor in your colours',
            'Wedding & gift bouquets',
            'Resin keychains with initials',
            'Special occasion gifts',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-secondary/40 rounded-xl p-4 text-center text-sm font-medium hover:bg-secondary transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
