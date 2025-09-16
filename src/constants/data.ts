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
					name: "Crizal Anti-Reflective Coatings",
					description:
						"Popular for daily commuters and screen-heavy users thanks to glare reduction and smudge resistance.",
					price: 3500,
					currency: "PHP",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 8.2,
					frameColors: ["Black", "Clear", "Silver"],
				},
				{
					id: "ph-002",
					name: "Eyezen Single-Vision",
					description:
						"Favored by young professionals to ease digital eye strain across mobile and desktop.",
					price: 3200,
					currency: "PHP",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.6,
					frameColors: ["Matte Black", "Champagne"],
				},
				{
					id: "ph-003",
					name: "Transitions Light Intelligent Lenses",
					description:
						"Strong tropical light drives interest in fast-activating photochromic lenses.",
					price: 5200,
					currency: "PHP",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.0,
					frameColors: ["Gray", "Brown"],
				},
			],
		},
		SG: {
			items: [
				{
					id: "sg-001",
					name: "Eyezen Single-Vision",
					description:
						"High screen-time market; blue-light and near-task comfort are key.",
					price: 240,
					currency: "SGD",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.9,
					frameColors: ["Gray", "Gold"],
				},
				{
					id: "sg-002",
					name: "Crizal Anti-Reflective Coatings",
					description:
						"Urban lighting and frequent night driving increase demand for AR and clarity.",
					price: 210,
					currency: "SGD",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.4,
					frameColors: ["Black", "Silver"],
				},
				{
					id: "sg-003",
					name: "Stellest Myopia Management",
					description:
						"Growing pediatric myopia awareness drives adoption of evidence-based designs.",
					price: 520,
					currency: "SGD",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 6.7,
					frameColors: ["Clear", "Black"],
				},
			],
		},
		US: {
			items: [
				{
					id: "us-001",
					name: "Varilux Progressive Lenses",
					description:
						"Top choice for presbyopes seeking smooth distance-to-near transitions.",
					price: 299,
					currency: "USD",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 8.5,
					frameColors: ["Black", "Tortoise", "Silver"],
				},
				{
					id: "us-002",
					name: "Crizal Anti-Reflective Coatings",
					description:
						"Reduces glare and halos for drivers and screen users alike.",
					price: 179,
					currency: "USD",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 8.0,
					frameColors: ["Gray", "Clear"],
				},
				{
					id: "us-003",
					name: "Transitions Light Intelligent Lenses",
					description:
						"Photochromic convenience for mixed indoor/outdoor lifestyles.",
					price: 229,
					currency: "USD",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.3,
					frameColors: ["Gray", "Brown"],
				},
			],
		},
		FR: {
			items: [
				{
					id: "fr-001",
					name: "Varilux Progressive Lenses",
					description:
						"Strong heritage market with preference for premium progressives.",
					price: 279,
					currency: "EUR",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 8.3,
					frameColors: ["Blue", "Black", "Silver"],
				},
				{
					id: "fr-002",
					name: "Crizal Anti-Reflective Coatings",
					description:
						"AR + smudge resistance popular for metro commuting and office work.",
					price: 159,
					currency: "EUR",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.7,
					frameColors: ["Gray", "Clear"],
				},
				{
					id: "fr-003",
					name: "Eyezen Single-Vision",
					description: "Digital eye strain relief for younger cohorts.",
					price: 179,
					currency: "EUR",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 6.9,
					frameColors: ["Black", "Silver"],
				},
			],
		},
		IT: {
			items: [
				{
					id: "it-001",
					name: "Varilux Progressive Lenses",
					description:
						"Premium progressive adoption pairs well with fashion-forward frames.",
					price: 269,
					currency: "EUR",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 8.1,
					frameColors: ["Black", "Gold", "Tortoise"],
				},
				{
					id: "it-002",
					name: "Transitions Light Intelligent Lenses",
					description: "Sun-rich lifestyle favors on-the-go tint changes.",
					price: 219,
					currency: "EUR",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.2,
					frameColors: ["Gray", "Brown"],
				},
				{
					id: "it-003",
					name: "Crizal Anti-Reflective Coatings",
					description:
						"Clean aesthetics and clarity complement Italy’s design sensibilities.",
					price: 159,
					currency: "EUR",
					imageUrl: "/Icons/sunglasses.svg",
					popularityScore: 7.4,
					frameColors: ["Black", "Clear"],
				},
			],
		},
	},
} as const;
