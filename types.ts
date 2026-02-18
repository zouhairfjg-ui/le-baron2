
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'Ceintures' | 'Porte-cartes' | 'Bracelets' | 'Boxers';
  image: string;
  images?: string[];
  description?: string;
  variants?: string[];
  variantPrices?: Record<string, number>;
}

export interface NavItem {
  label: string;
  href: string;
}