export type Metrics = {
	searchInterest: number;
	marketShare: number;
	avgPrice: number;
	currency: string;
};

export type FlashcardItem = {
	product: string;
	blurb: string;
	metrics: Metrics;
	image: string;
	url: string; // official essilor.com page
};

export type CountryContent = {
	hero: { id: string; name: string };
	flashcards: FlashcardItem[];
	brands: string[];
};

export type CountryContentMap = Record<string, CountryContent>;

export const COUNTRY_CONTENT: CountryContentMap = {
	PH: {
		hero: { id: "PH", name: "Philippines" },
		flashcards: [
			{
				product: "Crizal Anti-Reflective Coatings",
				blurb:
					"Popular for daily commuters and screen-heavy users thanks to glare reduction and smudge resistance.",
				metrics: {
					searchInterest: 82,
					marketShare: 34,
					avgPrice: 3500,
					currency: "PHP",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/crizal/",
			},
			{
				product: "Eyezen Single-Vision",
				blurb:
					"Favored by young professionals to ease digital eye strain across mobile and desktop.",
				metrics: {
					searchInterest: 76,
					marketShare: 29,
					avgPrice: 3200,
					currency: "PHP",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/eyezen/",
			},
			{
				product: "Transitions Light Intelligent Lenses",
				blurb:
					"Strong tropical light drives interest in fast-activating photochromic lenses.",
				metrics: {
					searchInterest: 70,
					marketShare: 23,
					avgPrice: 5200,
					currency: "PHP",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/transitions/",
			},
		],
		brands: [
			"Varilux",
			"Crizal",
			"Eyezen",
			"Transitions",
			"Stellest",
			"Xperio Polarized",
		],
	},
	SG: {
		hero: { id: "SG", name: "Singapore" },
		flashcards: [
			{
				product: "Eyezen Single-Vision",
				blurb:
					"High screen-time market; blue-light and near-task comfort are key.",
				metrics: {
					searchInterest: 79,
					marketShare: 31,
					avgPrice: 240,
					currency: "SGD",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/eyezen/",
			},
			{
				product: "Crizal Anti-Reflective Coatings",
				blurb:
					"Urban lighting and frequent night driving increase demand for AR and clarity.",
				metrics: {
					searchInterest: 74,
					marketShare: 28,
					avgPrice: 210,
					currency: "SGD",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/crizal/",
			},
			{
				product: "Stellest Myopia Management",
				blurb:
					"Growing pediatric myopia awareness drives adoption of evidence-based designs.",
				metrics: {
					searchInterest: 67,
					marketShare: 19,
					avgPrice: 520,
					currency: "SGD",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/innovation/stellest-lens/",
			},
		],
		brands: [
			"Varilux",
			"Crizal",
			"Eyezen",
			"Transitions",
			"Stellest",
			"Xperio Polarized",
		],
	},
	US: {
		hero: { id: "US", name: "United States" },
		flashcards: [
			{
				product: "Varilux Progressive Lenses",
				blurb:
					"Top choice for presbyopes seeking smooth distance-to-near transitions.",
				metrics: {
					searchInterest: 85,
					marketShare: 36,
					avgPrice: 299,
					currency: "USD",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/varilux/",
			},
			{
				product: "Crizal Anti-Reflective Coatings",
				blurb: "Reduces glare and halos for drivers and screen users alike.",
				metrics: {
					searchInterest: 80,
					marketShare: 33,
					avgPrice: 179,
					currency: "USD",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/crizal/",
			},
			{
				product: "Transitions Light Intelligent Lenses",
				blurb: "Photochromic convenience for mixed indoor/outdoor lifestyles.",
				metrics: {
					searchInterest: 73,
					marketShare: 25,
					avgPrice: 229,
					currency: "USD",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/transitions/",
			},
		],
		brands: [
			"Varilux",
			"Crizal",
			"Eyezen",
			"Transitions",
			"Stellest",
			"Xperio Polarized",
		],
	},
	FR: {
		hero: { id: "FR", name: "France" },
		flashcards: [
			{
				product: "Varilux Progressive Lenses",
				blurb:
					"Strong heritage market with preference for premium progressives.",
				metrics: {
					searchInterest: 83,
					marketShare: 35,
					avgPrice: 279,
					currency: "EUR",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/varilux/",
			},
			{
				product: "Crizal Anti-Reflective Coatings",
				blurb:
					"AR + smudge resistance popular for metro commuting and office work.",
				metrics: {
					searchInterest: 77,
					marketShare: 30,
					avgPrice: 159,
					currency: "EUR",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/crizal/",
			},
			{
				product: "Eyezen Single-Vision",
				blurb: "Digital eye strain relief for younger cohorts.",
				metrics: {
					searchInterest: 69,
					marketShare: 22,
					avgPrice: 179,
					currency: "EUR",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/eyezen/",
			},
		],
		brands: [
			"Varilux",
			"Crizal",
			"Eyezen",
			"Transitions",
			"Stellest",
			"Xperio Polarized",
		],
	},
	IT: {
		hero: { id: "IT", name: "Italy" },
		flashcards: [
			{
				product: "Varilux Progressive Lenses",
				blurb:
					"Premium progressive adoption pairs well with fashion-forward frames.",
				metrics: {
					searchInterest: 81,
					marketShare: 33,
					avgPrice: 269,
					currency: "EUR",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/varilux/",
			},
			{
				product: "Transitions Light Intelligent Lenses",
				blurb: "Sun-rich lifestyle favors on-the-go tint changes.",
				metrics: {
					searchInterest: 72,
					marketShare: 24,
					avgPrice: 219,
					currency: "EUR",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/transitions/",
			},
			{
				product: "Crizal Anti-Reflective Coatings",
				blurb:
					"Clean aesthetics and clarity complement Italy’s design sensibilities.",
				metrics: {
					searchInterest: 74,
					marketShare: 26,
					avgPrice: 159,
					currency: "EUR",
				},
				image: "/Icons/sunglasses.svg",
				url: "https://www.essilor.com/en/brands/crizal/",
			},
		],
		brands: [
			"Varilux",
			"Crizal",
			"Eyezen",
			"Transitions",
			"Stellest",
			"Xperio Polarized",
		],
	},
};

const BRAND_LINKS: Record<string, string> = {
	VARILUX: "https://www.essilor.com/en/brands/varilux/",
	CRIZAL: "https://www.essilor.com/en/brands/crizal/",
	EYEZEN: "https://www.essilor.com/en/brands/eyezen/",
	TRANSITIONS: "https://www.essilor.com/en/brands/transitions/",
	STELLEST: "https://www.essilor.com/en/innovation/stellest-lens/",
	XPERIO: "https://www.essilor.com/en/brands/xperio/",
};

export function getBrandUrl(name: string): string {
	const upper = name.toUpperCase();
	for (const key of Object.keys(BRAND_LINKS)) {
		if (upper.includes(key)) return BRAND_LINKS[key];
	}
	return "https://www.essilor.com/en/";
}
