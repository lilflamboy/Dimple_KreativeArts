'use client';

import Link from 'next/link';
import { Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatINR, getWhatsAppLink } from '@/lib/config';
import { generateOrderMessage } from '@/lib/whatsapp';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems, clearCart } = useCart();

  const orderMessage = generateOrderMessage(items, subtotal);
  const waLink = getWhatsAppLink(orderMessage);

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
          Your Cart
        </h1>
        <p className="text-muted-foreground mb-8">
          {totalItems > 0
            ? `${totalItems} ${totalItems === 1 ? 'item' : 'items'} in your cart`
            : 'Your cart is currently empty'}
        </p>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <div>
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                Browse our handmade collection and add your favourite pieces.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id + (item.customization?.color || '')}
                  className="flex gap-4 bg-card rounded-2xl p-4 border border-border/50"
                >
                  <Link href={`/product/${item.product.id}`} className="shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-secondary">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.product.id}`}>
                      <h3 className="font-medium hover:text-primary transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    {item.customization?.color && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Colour: {item.customization.color}
                      </p>
                    )}
                    {item.customization?.notes && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Notes: {item.customization.notes}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.product.shortDetail}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-secondary rounded-l-full transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-4 text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-secondary rounded-r-full transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-bold">
                          {item.product.price > 0
                            ? formatINR(item.product.price * item.quantity)
                            : 'On Request'}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/shop"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear cart
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border/50 sticky top-24">
                <h2 className="font-serif font-bold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  {items.map((item) => (
                    <div
                      key={item.product.id + (item.customization?.color || '')}
                      className="flex justify-between"
                    >
                      <span className="text-muted-foreground line-clamp-1 pr-2">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="font-medium shrink-0">
                        {item.product.price > 0
                          ? formatINR(item.product.price * item.quantity)
                          : '—'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border mt-4 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-2xl font-bold font-serif">
                      {subtotal > 0 ? formatINR(subtotal) : 'To be discussed'}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  No online payment needed. Final price and delivery confirmed on WhatsApp.
                </p>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 bg-[#25D366] text-white py-4 rounded-full font-medium hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
