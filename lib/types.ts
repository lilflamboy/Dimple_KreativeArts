export type Category =
  | 'Hair Accessories'
  | 'Keychains & Charms'
  | 'Crochet Flowers'
  | 'Bouquets'
  | 'Home & Car Décor'
  | 'Character & Cute Creations'
  | 'Customized Creations'
  | 'Gifts';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  description: string;
  shortDetail: string;
  image: string;
  images?: string[];
  featured: boolean;
  customizable: boolean;
  variants: string[];
  availability: 'in-stock' | 'made-to-order' | 'custom';
  keywords: string[];
  pack?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customization?: {
    color?: string;
    notes?: string;
  };
}

export interface CategoryInfo {
  name: Category;
  slug: string;
  description: string;
  image: string;
  icon: string;
}
