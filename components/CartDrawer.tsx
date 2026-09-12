'use client';

import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatINR, getWhatsAppLink } from '@/lib/config';
import { generateOrderMessage } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  const orderMessage = generateOrderMessage(items, subtotal);
  const waLink = getWhatsAppLink(orderMessage);

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-serif font-bold">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Browse our handmade collection and add your favourites.
                </p>
              </div>
              <Link
                href="/shop"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Shop Collection
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id + (item.customization?.color || '')}
                className="flex gap-3 pb-4 border-b border-border/50 last:border-0"
              >
                <Link
                  href={`/product/${item.product.id}`}
                  onClick={() => setIsOpen(false)}
                  className="shrink-0"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-secondary">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${item.product.id}`}
                    onClick={() => setIsOpen(false)}
                    className="font-medium text-sm hover:text-primary transition-colors line-clamp-1"
                  >
                    {item.product.name}
                  </Link>
                  {item.customization?.color && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Colour: {item.customization.color}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-primary mt-1">
                    {item.product.price > 0
                      ? formatINR(item.product.price)
                      : 'Price on request'}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-border rounded-full">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-secondary rounded-l-full transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-secondary rounded-r-full transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-sm font-bold">
                    {item.product.price > 0
                      ? formatINR(item.product.price * item.quantity)
                      : '—'}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-xl font-bold font-serif">
                {subtotal > 0 ? formatINR(subtotal) : 'To be discussed'}
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Final price confirmed on WhatsApp. No online payment required.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3.5 rounded-full font-medium hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors block"
            >
              View full cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
