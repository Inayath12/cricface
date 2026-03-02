// export interface Product {
//   id: number;
//   name: string;
//   price_inr: number;
//   price_usd: number;
//   price_eur: number;
//   original_price_inr?: number | null;
//   original_price_usd?: number | null;
//   original_price_eur?: number | null;
//   grade: string;
//   willow_type: string;
//   weight: string;
//   style: string;
//   description: string;
//   images: string[];
//   video?: string | null;
//   specifications: Record<string, string>;
//   featured?: number | boolean;
//   created_at: string;
// }

// export interface Inquiry {
//   id: number;
//   name: string;
//   contact: string;
//   email?: string;
//   product_name?: string;
//   message: string;
//   created_at: string;
// }


// --- 02-03-2026

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
  // Size-based pricing: JSON string stored in DB, parsed to array
  size_prices?: SizePrice[] | null;
}

export interface SizePrice {
  size: string;    // e.g. "Size 3", "Size 4", "Harrow"
  price_inr: number;
  price_usd: number;
  price_eur: number;
}

export interface OrderCustomization {
  size: string;
  weight: string;
  handle_shape: string;
  profile: string;
  laser_engraving: string;   // text or empty string
  threading: boolean;
  extra_grip: boolean;
}

export interface Order {
  id: number;
  product_id: number;
  product_name: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  delivery_address: string;
  customization: OrderCustomization;
  base_price_inr: number;
  addon_price_inr: number;
  total_price_inr: number;
  razorpay_order_id: string;
  razorpay_payment_id?: string;
  payment_status: "pending" | "paid" | "failed";
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