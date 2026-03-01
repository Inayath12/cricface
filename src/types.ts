export interface Product {
  id: number;
  name: string;
  price_inr: number;
  price_usd: number;
  price_eur: number;
  original_price_inr?: number | null;
  original_price_usd?: number | null;
  original_price_eur?: number | null;
  grade: string;
  willow_type: string;
  weight: string;
  style: string;
  description: string;
  images: string[];
  video?: string | null;
  specifications: Record<string, string>;
  featured?: number | boolean;
  created_at: string;
}

export interface Inquiry {
  id: number;
  name: string;
  contact: string;
  email?: string;
  product_name?: string;
  message: string;
  created_at: string;
}
