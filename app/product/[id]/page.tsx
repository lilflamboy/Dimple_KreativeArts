'use client';

import { useState, use } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag, MessageCircle, Sparkles, ChevronRight, Heart, Palette } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/lib/products';
import { formatINR, getWhatsAppLink } from '@/lib/config';
import { useCart } from '@/lib/cart-context';
import { generateProductInquiryMessage } from '@/lib/whatsapp';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = getProductById(params.id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [customNotes, setCustomNotes] = useState('');

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4 text-center min-h-[60vh]">
        <h1 className="font-serif text-3xl font-bold mb-4">Product not found</h1>
        <p className="text-muted-foreground mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    const customization = product.customizable
      ? { color: selectedColor || undefined, notes: customNotes || undefined }
      : undefined;
    addItem(product, quantity, customization);
  };

  const waMessage = generateProductInquiryMessage(
    product.name,
    { color: selectedColor, notes: customNotes },
    quantity
  );
  const waLink = getWhatsAppLink(waMessage);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-primary transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground/80 line-clamp-1">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-secondary aspect-square shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded-full">
                  {discount}% OFF
                </span>
              )}
            </div>
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden bg-secondary aspect-square cursor-pointer border-2 border-transparent hover:border-primary/30 transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`${product.name} ${i + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="space-y-5">
            <div>
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mt-1">
                {product.name}
              </h1>
              {product.pack && (
                <p className="text-muted-foreground mt-2 text-sm font-medium">
                  {product.pack}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold font-serif">
                {product.price > 0 ? formatINR(product.price) : 'Price on Request'}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">
                  Save {formatINR(product.originalPrice! - product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-foreground/70 leading-relaxed">
              {product.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.customizable && (
                <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent-foreground text-sm font-medium px-3 py-1.5 rounded-full">
                  <Sparkles className="w-4 h-4" />
                  Customizable
                </span>
              )}
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full',
                  product.availability === 'in-stock'
                    ? 'bg-green-100 text-green-700'
                    : product.availability === 'made-to-order'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-blue-100 text-blue-700'
                )}
              >
                {product.availability === 'in-stock'
                  ? 'In Stock'
                  : product.availability === 'made-to-order'
                  ? 'Made to Order'
                  : 'Custom Made'}
              </span>
            </div>

            {/* Customization options */}
            {product.customizable && product.variants.length > 0 && (
              <div className="bg-secondary/50 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">
                    {product.variants[0].length === 1 && product.variants[0] <= 'Z'
                      ? 'Choose Your Letter'
                      : 'Choose Your Colour'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedColor(variant)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium border transition-all',
                        selectedColor === variant
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-card border-border hover:border-primary/30'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Want a different colour? Tell us on WhatsApp.
                </p>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Additional customization notes (optional)..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                  rows={2}
                />
              </div>
            )}

            {/* Quantity selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center border border-border rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-secondary rounded-l-full transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-secondary rounded-r-full transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-full font-medium hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              {[
                { icon: Heart, label: 'Handmade' },
                { icon: Palette, label: 'Customizable' },
                { icon: MessageCircle, label: 'WhatsApp Support' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product details section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-secondary/30 rounded-2xl p-6">
            <h2 className="font-serif font-bold text-xl mb-4">Product Details</h2>
            <dl className="space-y-3">
              <div className="flex justify-between text-sm">
                <dt className="text-muted-foreground">Category</dt>
                <dd className="font-medium">{product.category}</dd>
              </div>
              {product.pack && (
                <div className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">Pack</dt>
                  <dd className="font-medium">{product.pack}</dd>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <dt className="text-muted-foreground">Customizable</dt>
                <dd className="font-medium">{product.customizable ? 'Yes' : 'No'}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-muted-foreground">Availability</dt>
                <dd className="font-medium capitalize">{product.availability.replace('-', ' ')}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-muted-foreground">Material</dt>
                <dd className="font-medium">Crochet / Yarn</dd>
              </div>
            </dl>
          </div>

          <div className="bg-secondary/30 rounded-2xl p-6">
            <h2 className="font-serif font-bold text-xl mb-4">Customization Info</h2>
            {product.customizable ? (
              <div className="space-y-3 text-sm text-foreground/70">
                <p>
                  This product can be customized to your preference. Choose from
                  available colours or request a specific shade.
                </p>
                <p>
                  Custom orders are made specially for you — please allow time
                  for creation. Final price and timeline will be confirmed on
                  WhatsApp.
                </p>
                <p className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Want something completely unique? Message us on WhatsApp with
                  your idea!
                </p>
              </div>
            ) : (
              <p className="text-sm text-foreground/70">
                This product comes as shown. If you'd like a different colour or
                variation, feel free to message us on WhatsApp — we may be able to
                accommodate your request!
              </p>
            )}
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
