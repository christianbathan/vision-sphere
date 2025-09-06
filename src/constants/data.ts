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
    US: [
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
    JP: [
      {
        id: "jp-001",
        name: "エシロール クラリティレンズ",
        description: "高精度で軽量、スマートフォン疲労対策レンズ。",
        price: 28900,
        currency: "JPY",
        imageUrl: "/images/japan/clarity.jpg",
        popularityScore: 9.2,
        frameColors: ["Navy", "Clear", "Gunmetal"],
      },
      {
        id: "jp-002",
        name: "エシロール ブルーカット プロ",
        description: "ブルーライトカットと反射防止加工。",
        price: 31800,
        currency: "JPY",
        imageUrl: "/images/japan/bluecut_pro.jpg",
        popularityScore: 8.7,
        frameColors: ["Matte Black", "Champagne"],
      },
    ],
    FR: [
      {
        id: "fr-001",
        name: "Essilor Lumière",
        description: "Lentilles légères avec protection UV optimale.",
        price: 229.0,
        currency: "EUR",
        imageUrl: "/images/france/lumiere.jpg",
        popularityScore: 9.3,
        frameColors: ["Bleu", "Noir", "Argent"],
      },
      {
        id: "fr-002",
        name: "Essilor Reflex Vision",
        description:
          "Design moderne avec clarté supérieure pour les professionnels.",
        price: 259.0,
        currency: "EUR",
        imageUrl: "/images/france/reflex_vision.jpg",
        popularityScore: 9.0,
        frameColors: ["Gris", "Bordeaux"],
      },
    ],
    BR: [
      {
        id: "br-001",
        name: "Essilor SolarGuard",
        description: "Lentes leves com proteção avançada contra raios UV.",
        price: 799.0,
        currency: "BRL",
        imageUrl: "/images/brazil/solarguard.jpg",
        popularityScore: 9.1,
        frameColors: ["Preto", "Azul"],
      },
      {
        id: "br-002",
        name: "Essilor ConfortoMax",
        description: "Conforto diário para longas horas de tela.",
        price: 859.0,
        currency: "BRL",
        imageUrl: "/images/brazil/confortomax.jpg",
        popularityScore: 8.8,
        frameColors: ["Cinza", "Verde"],
      },
    ],
    AU: [
      {
        id: "au-001",
        name: "Essilor Outback Vision",
        description: "Built for high glare and outdoor performance.",
        price: 289.0,
        currency: "AUD",
        imageUrl: "/images/australia/outback_vision.jpg",
        popularityScore: 9.2,
        frameColors: ["Black", "Sand"],
      },
      {
        id: "au-002",
        name: "Essilor ClearWave",
        description: "All-condition clarity with durable coating.",
        price: 305.0,
        currency: "AUD",
        imageUrl: "/images/australia/clearwave.jpg",
        popularityScore: 8.9,
        frameColors: ["Navy", "Graphite"],
      },
    ],
  },
} as const;
