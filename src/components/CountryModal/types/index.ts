export interface EyewearItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  currency?: string;
  imageUrl?: string;
  popularityScore?: number;
  frameColors?: string[];
}

export interface Country {
  id: string;
  name: string;
}

export interface EyewearModalProps {
  country: Country | null;
  items: EyewearItem[];
  onClose?: () => void;
}
