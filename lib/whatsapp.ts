import type { CartItem } from './types';
import { formatINR, siteConfig, getWhatsAppLink } from './config';

export function generateOrderMessage(
  items: CartItem[],
  subtotal: number,
  customizationNotes?: string
): string {
  let message = `Hello ${siteConfig.name}! 👋\n\nI would like to order:\n\n`;

  items.forEach((item, index) => {
    const priceText = item.product.price > 0 ? formatINR(item.product.price * item.quantity) : 'Price on request';
    message += `${index + 1}. ${item.product.name}`;
    if (item.customization?.color) {
      message += ` (${item.customization.color})`;
    }
    message += ` × ${item.quantity} — ${priceText}\n`;
  });

  message += `\nSubtotal: ${subtotal > 0 ? formatINR(subtotal) : 'To be discussed'}\n`;

  const customNotes: string[] = [];
  items.forEach((item) => {
    if (item.customization?.color || item.customization?.notes) {
      const parts: string[] = [];
      if (item.customization.color) parts.push(`Colour: ${item.customization.color}`);
      if (item.customization.notes) parts.push(item.customization.notes);
      customNotes.push(`${item.product.name} — ${parts.join(', ')}`);
    }
  });

  if (customizationNotes) {
    customNotes.push(customizationNotes);
  }

  if (customNotes.length > 0) {
    message += `\nCustomization:\n${customNotes.map((n) => `• ${n}`).join('\n')}\n`;
  }

  message += `\nPlease confirm availability and delivery details.\n\nThank you! ❤️`;

  return message;
}

export function generateCustomOrderMessage(data: {
  what: string;
  color: string;
  occasion: string;
  budget: string;
  message: string;
}): string {
  let msg = `Hello ${siteConfig.name}! 👋\n\nI would like to discuss a custom creation:\n\n`;
  msg += `What I'd like: ${data.what}\n`;
  if (data.color) msg += `Preferred colour: ${data.color}\n`;
  if (data.occasion) msg += `Occasion: ${data.occasion}\n`;
  if (data.budget) msg += `Approximate budget: ${data.budget}\n`;
  if (data.message) msg += `Additional details: ${data.message}\n`;
  msg += `\nLooking forward to hearing from you! ❤️`;
  return msg;
}

export function generateProductInquiryMessage(
  productName: string,
  customization?: { color?: string; notes?: string },
  quantity?: number
): string {
  let msg = `Hello ${siteConfig.name}! 👋\n\nI'm interested in:\n\n${productName}`;
  if (quantity) msg += ` × ${quantity}`;
  msg += '\n';
  if (customization?.color) msg += `\nPreferred colour: ${customization.color}\n`;
  if (customization?.notes) msg += `\nNotes: ${customization.notes}\n`;
  msg += `\nPlease share more details. Thank you! ❤️`;
  return msg;
}

export { getWhatsAppLink };
