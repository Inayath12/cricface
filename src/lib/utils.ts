import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "919705646297";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateProductInquiryMessage(productName: string, price: string) {
  return `Hi Cricface Team,
I am interested in the following product:
Product Name: ${productName}
Price: ${price}
Please share more details.`;
}

export function generateGeneralInquiryMessage(data: { name: string; contact: string; email?: string; product?: string; message: string }) {
  return `Hi Cricface Team,
Name: ${data.name}
Contact: ${data.contact}
Email: ${data.email || 'N/A'}
Interested in: ${data.product || 'N/A'}
Message: ${data.message}
Looking forward to your reply.`;
}
