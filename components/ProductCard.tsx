'use client';

import Link from 'next/link';
import { Plus, Sparkles, Tag } from 'lucide-react';
import type { Product } from '@/lib/types';
import { formatINR } from '@/lib/config';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

interface Props {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: Props) {
  const { addItem } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
      style={{ animationDelay: `${Math.min(index * 0.05, 0.4)}s`, opacity: 0 }}
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {discount > 0 && (
              <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
                {discount}% OFF
              </span>
            )}
            {product.customizable && (
              <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                CUSTOMIZABLE
              </span>
            )}
          </div>

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 1);
            }}
            className="absolute bottom-3 right-3 w-10 h-10 bg-card shadow-md rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </Link>

      <div className="p-3 sm:p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
          {product.shortDetail}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-sm sm:text-base">
            {product.price > 0 ? formatINR(product.price) : 'On Request'}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatINR(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
