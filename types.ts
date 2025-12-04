export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'prompt' | 'service' | 'assistant' | 'course';
  features: string[];
  imageUrl?: string;
  ctaText: string;
}

export enum PricingTier {
  Basic = 'Basic',
  Pro = 'Pro',
  Enterprise = 'Enterprise'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarUrl: string;
}
