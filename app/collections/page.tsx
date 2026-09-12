'use client';

import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/lib/products';

export default function CollectionsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <div className="bg-secondary/30 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">
            Our Collections
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Explore each handcrafted collection from Dimple_KreativeArts
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
