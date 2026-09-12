import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { MobileBottomNav } from '@/components/MobileNav';
import { siteConfig } from '@/lib/config';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Handmade Crochet & Customized Creations`,
  description: siteConfig.description,
  keywords: [
    'crochet',
    'handmade',
    'hair accessories',
    'keychains',
    'crochet flowers',
    'bouquets',
    'customized gifts',
    'Dimple KreativeArts',
  ],
  openGraph: {
    title: `${siteConfig.name} | Handmade Crochet & Customized Creations`,
    description: siteConfig.description,
    type: 'website',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Handmade Crochet & Customized Creations`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
