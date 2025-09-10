/**
 * COUNTRY_DATA
 * Structured showcase of region‑specific trending Essilor eyewear products.
 * Each country code maps to an array of curated items containing localized
 * naming, pricing, imagery, and lightweight popularity scoring.
 */
export const COUNTRY_DATA = {
	/** Short human readable summary suitable for tooltips or intro copy */
	description:
		"Region‑by‑region snapshot of what eyewear styles are resonating right now—updated for a global audience.",
	/** Catchy CTA style phrase you can surface near the Learn More button */
	tagline: "See what the world is wearing—discover your next pair.",
	trending_eyewear: {
		PH: {
			items: [
				{
					id: "ph-001",
					name: "Essilor Clarity Lens",
					description:
						"High-precision, lightweight lens for digital eye strain.",
					price: 3200,
					currency: "PHP",
					imageUrl: "/images/philippines/clarity.jpg",
					popularityScore: 9.3,
					frameColors: ["Black", "Clear", "Gunmetal"],
				},
				{
					id: "ph-002",
					name: "Essilor BlueCut Pro",
					description: "Blue light filter and anti-reflective coating.",
					price: 3500,
					currency: "PHP",
					imageUrl: "/images/philippines/bluecut_pro.jpg",
					popularityScore: 8.8,
					frameColors: ["Matte Black", "Champagne"],
				},
			],
		},
		SG: {
			items: [
				{
					id: "sg-001",
					name: "Essilor SmartVision",
					description: "Adaptive lenses for everyday comfort and clarity.",
					price: 210.0,
					currency: "SGD",
					imageUrl: "/images/singapore/smartvision.jpg",
					popularityScore: 9.0,
					frameColors: ["Gray", "Gold"],
				},
				{
					id: "sg-002",
					name: "Essilor UltraLite Pro",
					description: "Lightweight, anti-glare lenses for screen use.",
					price: 245.0,
					currency: "SGD",
					imageUrl: "/images/singapore/ultralite_pro.jpg",
					popularityScore: 8.7,
					frameColors: ["Black", "Silver"],
				},
			],
		},
		US: {
			items: [
				{
					id: "us-001",
					name: "Essilor UltraLite Pro",
					description:
						"Lightweight lenses with anti-glare coating and blue light protection.",
					price: 249.99,
					currency: "USD",
					imageUrl: "/images/us/ultralite_pro.jpg",
					popularityScore: 9.5,
					frameColors: ["Black", "Tortoise", "Silver"],
				},
				{
					id: "us-002",
					name: "Essilor SmartVision",
					description:
						"Adaptive lenses that adjust to lighting, great for everyday wear.",
					price: 199.99,
					currency: "USD",
					imageUrl: "/images/us/smartvision.jpg",
					popularityScore: 8.9,
					frameColors: ["Gray", "Gold"],
				},
			],
		},
		FR: {
			items: [
				{
					id: "fr-001",
					name: "Essilor Lumiere",
					description: "Lightweight lenses with optimal UV protection.",
					price: 229.0,
					currency: "EUR",
					imageUrl: "/images/france/lumiere.jpg",
					popularityScore: 9.3,
					frameColors: ["Blue", "Black", "Silver"],
				},
				{
					id: "fr-002",
					name: "Essilor Reflex Vision",
					description: "Modern design with superior clarity for professionals.",
					price: 259.0,
					currency: "EUR",
					imageUrl: "/images/france/reflex_vision.jpg",
					popularityScore: 9.0,
					frameColors: ["Gray", "Bordeaux"],
				},
			],
		},
		IT: {
			items: [
				{
					id: "it-001",
					name: "Essilor BellaVista",
					description: "Elegant frames with premium Italian lens technology.",
					price: 239.0,
					currency: "EUR",
					imageUrl: "/images/italy/bellavista.jpg",
					popularityScore: 9.2,
					frameColors: ["Black", "Gold", "Tortoise"],
				},
				{
					id: "it-002",
					name: "Essilor ModaVision",
					description: "Fashion-forward eyewear for everyday style.",
					price: 215.0,
					currency: "EUR",
					imageUrl: "/images/italy/modavision.jpg",
					popularityScore: 8.8,
					frameColors: ["Blue", "Silver"],
				},
			],
		},
	},
} as const;
