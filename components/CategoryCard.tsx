'use client';

import Link from 'next/link';
import type { CategoryInfo } from '@/lib/types';

interface Props {
  category: CategoryInfo;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: Props) {
  return (
    <Link
      href={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-serif font-bold text-lg group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-white/80 mt-1 line-clamp-2 group-hover:line-clamp-none transition-all">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
