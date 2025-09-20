export interface EyewearItem {
	id: string;
	name: string;
	description?: string;
	price?: number;
	currency?: string;
	imageUrl?: string;
	metrics?: {
		searchInterest?: number;
		price?: number;
		currency?: string;
	};
}

export interface Country {
	id: string;
	name: string;
	flagUrl?: string;
}

export interface EyewearModalProps {
	country: Country | null;
	items: EyewearItem[];
	onClose?: () => void;
}
