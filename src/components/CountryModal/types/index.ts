export interface ProductMetrics {
  searchInterest: number;
  marketShare: number;
  ratings: number;
  price: number;
  currency: "USD" | "PHP" | "SGD" | string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  metrics: ProductMetrics;
}

export interface CountryHero {
  id: string;
  name: string;
}

export interface CountryData {
  hero: CountryHero;
  items: ProductItem[];
}

export interface Brand {
  name: string;
  url: string;
  description: string;
}

export interface CountryContent {
  brands: Brand[];
  PH: CountryData;
  SG: CountryData;
  US: CountryData;
}

export type CountryCode = keyof Omit<CountryContent, "brands">;

export interface Country {
  id: string;
  name: string;
  flagUrl?: string;
}

export interface EyewearModalProps {
  country: Country | null;
  products: ProductItem[];
  onClose?: () => void;
}
