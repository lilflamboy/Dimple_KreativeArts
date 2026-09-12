export const siteConfig = {
  name: 'Dimple_KreativeArts',
  tagline: 'Handmade with love, made just for you.',
  description:
    'Discover handmade crochet accessories, keychains, flowers, bouquets, cute gifts and customized creations from Dimple_KreativeArts.',
  whatsappNumber: '917559303864',
  whatsappDisplay: '+91 75593 03864',
  instagramHandle: 'dimple_kreativearts',
  instagramUrl: 'https://www.instagram.com/dimple_kreativearts',
  email: 'dimple.kreativearts@gmail.com',
  brandIntro:
    'A creative space where art, learning & customized creations come together.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Custom Orders', href: '/custom-orders' },
    { label: 'Contact', href: '/contact' },
  ],
  mobileNav: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Search', href: '/shop?search=true' },
    { label: 'Cart', href: '/cart' },
    { label: 'WhatsApp', href: '/contact' },
  ],
};

export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
