'use client';

import { MessageCircle, Mail, Instagram, Phone, MapPin } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export default function ContactPage() {
  const waLink = getWhatsAppLink(`Hello ${siteConfig.name}! 👋 I'd love to get in touch.`);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            We'd love to hear from you! Whether it's a question, a custom request,
            or just to say hello — reach out anytime.
          </p>
        </div>
      </div>

      {/* Contact methods */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl p-6 border border-border/50 hover:border-[#25D366]/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <h3 className="font-serif font-bold text-lg mb-1">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.whatsappDisplay}</p>
            <p className="text-xs text-primary mt-2 group-hover:underline">Chat now →</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-lg mb-1">Email</h3>
            <p className="text-sm text-muted-foreground break-all">{siteConfig.email}</p>
            <p className="text-xs text-primary mt-2 group-hover:underline">Send email →</p>
          </a>

          {/* Instagram */}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Instagram className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif font-bold text-lg mb-1">Instagram</h3>
            <p className="text-sm text-muted-foreground">@{siteConfig.instagramHandle}</p>
            <p className="text-xs text-primary mt-2 group-hover:underline">Follow us →</p>
          </a>
        </div>
      </section>

      {/* Quick message */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm text-center">
          <h2 className="font-serif text-2xl font-bold mb-2">Quick Message</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            The fastest way to reach us is through WhatsApp. Send us a message and
            we'll get back to you as soon as possible!
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1da851] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
