import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge Tailwind classes safely — use instead of template literals */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format ₹ currency */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style:    'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

/** Build WhatsApp URL with pre-filled message */
export function waUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/** Build WhatsApp message with name + email */
export function buildWaMessage(name: string, email: string, topic: string): string {
  return `Hi! ${name} this side. I am willing to discuss about ${topic}.\n\nFor future communication, my email ID is ${email}.`
}
