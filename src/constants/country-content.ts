const data = {
  brands: [
    {
      name: "Eyezen",
      slug: "eyezen",
      description: "The new generation of single vision lenses",
    },
    {
      name: "Varilux",
      slug: "varilux",
      description: "Mastering sharpness instantly",
    },
    {
      name: "Xperio",
      slug: "xperio",
      description: "Goes beyond protection",
    },
    {
      name: "Transitions",
      slug: "transitions",
      description: "Light intelligent technology",
    },
    {
      name: "Crizal",
      slug: "crizal",
      description: "Your lenses' invisible shield",
    },
  ],
  PH: {
    hero: { id: "PH", name: "Philippines" },
    items: [
      {
        id: "ph-001",
        name: "Varilux XR Series",
        description:
          "AI-powered progressive lens that understands natural eye movement, delivering instant sharpness while in motion and smooth transitions between near and far vision.",
        url: "https://www.essilor.com/ph-en/products/varilux/varilux-xr-series/",
        imageUrl: "/Images/products/varilux-xr-series.webp",
        metrics: {
          searchInterest: 82,
          marketShare: 34,
          ratings: 4.5,
          price: 3500,
          currency: "PHP",
        },
      },
      {
        id: "ph-002",
        name: "Eyezen Start",
        description:
          "Technology that optimizes the entire lens surface based on both distance and near vision reference points, adjusting for object distance and gaze direction.",
        url: "https://www.essilor.com/ph-en/products/eyezen/eyezen-start/",
        imageUrl: "/Images/products/eyezen-start.webp",
        metrics: {
          searchInterest: 76,
          marketShare: 29,
          ratings: 4.2,
          price: 3200,
          currency: "PHP",
        },
      },
      {
        id: "ph-003",
        name: "Transitions Gen S",
        description:
          "Advanced everyday lenses that quickly adapt to light, offer vibrant color options, and HD vision to enhance both your glasses and your lifestyle.",
        url: "https://www.essilor.com/ph-en/products/transitions/transitions-gen-s/",
        imageUrl: "/Images/products/transitions-gen-s.webp",
        metrics: {
          searchInterest: 70,
          marketShare: 23,
          ratings: 4.0,
          price: 5200,
          currency: "PHP",
        },
      },
    ],
  },
  SG: {
    hero: { id: "SG", name: "Singapore" },
    items: [
      {
        id: "sg-001",
        name: "Transitions Gen S",
        description:
          "Advanced everyday lenses that quickly adapt to light, offer vibrant color options, and HD vision to enhance both your glasses and your lifestyle.",
        url: "https://www.essilor.com/sg-en/products/transitions/transitions-gen-s/",
        imageUrl: "/Images/products/transitions-gen-s.webp",
        metrics: {
          searchInterest: 90,
          marketShare: 47,
          ratings: 5.0,
          price: 300,
          currency: "SGD",
        },
      },
      {
        id: "sg-002",
        name: "Varilux Comfort Max",
        description:
          "Enhanced with innovative Flex Optim™ technology, these lenses offer a wider range of gaze directions and postures, delivering all-day vision comfort for modern, active lifestyles.",
        url: "https://www.essilor.com/sg-en/products/varilux/varilux-comfort-max/",
        imageUrl: "/Images/products/comfort-max.png",
        metrics: {
          searchInterest: 87,
          marketShare: 40,
          ratings: 4.6,
          price: 210,
          currency: "SGD",
        },
      },
      {
        id: "sg-003",
        name: "Xperio Polarized",
        description:
          "Reduce glare for clearer vision and faster reaction time that is ideal for bright, high-glare conditions.",
        url: "https://www.essilor.com/sg-en/products/xperio/xperio-polarized/",
        imageUrl: "/Images/products/xperio-polarized.png",
        metrics: {
          searchInterest: 77,
          marketShare: 32,
          ratings: 4.7,
          price: 520,
          currency: "SGD",
        },
      },
    ],
  },
  US: {
    hero: { id: "US", name: "United States" },
    items: [
      {
        id: "us-001",
        name: "Crizal Sapphire HR",
        description:
          "Offers durable protection against light pollution, scratches, and daily environmental challenges.",
        url: "https://www.essilor.com/us-en/products/crizal/crizal-sapphire-hr/",
        imageUrl: "/Images/products/crizal.png",
        metrics: {
          searchInterest: 92,
          marketShare: 87,
          ratings: 5.0,
          price: 299,
          currency: "USD",
        },
      },
      {
        id: "us-002",
        name: "Varilux XR Series",
        description:
          "AI-powered progressive lens that understands natural eye movement, delivering instant sharpness while in motion and smooth transitions between near and far vision.",
        url: "https://www.essilor.com/us-en/products/varilux/varilux-xr-series/",
        imageUrl: "/Images/products/varilux-xr-series.webp",
        metrics: {
          searchInterest: 80,
          marketShare: 33,
          ratings: 4.2,
          price: 199,
          currency: "USD",
        },
      },
      {
        id: "us-003",
        name: "Transitions Gen S",
        description:
          "Advanced everyday lenses that quickly adapt to light, offer vibrant color options, and HD vision to enhance both your glasses and your lifestyle.",
        url: "https://www.essilor.com/us-en/products/transitions/transitions-gen-s/",
        imageUrl: "/Images/products/transitions-gen-s.webp",
        metrics: {
          searchInterest: 73,
          marketShare: 25,
          ratings: 4.1,
          price: 399,
          currency: "USD",
        },
      },
    ],
  },
  // FR: {
  // 	hero: { id: "FR", name: "France" },
  // 	items: [
  // 		{
  // 			id: "fr-001",
  // 			name: "Varilux Progressive Lenses",
  // 			description:
  // 				"Strong heritage market with preference for premium progressives.",
  // 			url: "https://www.essilor.com/en/brands/varilux/",
  // 			imageUrl: "/Icons/sunglasses.svg",
  // 			price: 279,
  // 			currency: "EUR",
  // 			popularityScore: 8.3,
  // 			frameColors: ["Blue", "Black", "Silver"],
  // 			metrics: {
  // 				searchInterest: 83,
  // 				marketShare: 35,
  // 				avgPrice: 279,
  // 				currency: "EUR",
  // 			},
  // 		},
  // 		{
  // 			id: "fr-002",
  // 			name: "Crizal Anti-Reflective Coatings",
  // 			description:
  // 				"AR + smudge resistance popular for metro commuting and office work.",
  // 			url: "https://www.essilor.com/en/brands/crizal/",
  // 			imageUrl: "/Icons/sunglasses.svg",
  // 			price: 159,
  // 			currency: "EUR",
  // 			popularityScore: 7.7,
  // 			frameColors: ["Gray", "Clear"],
  // 			metrics: {
  // 				searchInterest: 77,
  // 				marketShare: 30,
  // 				avgPrice: 159,
  // 				currency: "EUR",
  // 			},
  // 		},
  // 		{
  // 			id: "fr-003",
  // 			name: "Eyezen Single-Vision",
  // 			description: "Digital eye strain relief for younger cohorts.",
  // 			url: "https://www.essilor.com/en/brands/eyezen/",
  // 			imageUrl: "/Icons/sunglasses.svg",
  // 			price: 179,
  // 			currency: "EUR",
  // 			popularityScore: 6.9,
  // 			frameColors: ["Black", "Silver"],
  // 			metrics: {
  // 				searchInterest: 69,
  // 				marketShare: 22,
  // 				avgPrice: 179,
  // 				currency: "EUR",
  // 			},
  // 		},
  // 	],
  // },
  // IT: {
  // 	hero: { id: "IT", name: "Italy" },
  // 	items: [
  // 		{
  // 			id: "it-001",
  // 			name: "Varilux Progressive Lenses",
  // 			description:
  // 				"Premium progressive adoption pairs well with fashion-forward frames.",
  // 			url: "https://www.essilor.com/en/brands/varilux/",
  // 			imageUrl: "/Icons/sunglasses.svg",
  // 			price: 269,
  // 			currency: "EUR",
  // 			popularityScore: 8.1,
  // 			frameColors: ["Black", "Gold", "Tortoise"],
  // 			metrics: {
  // 				searchInterest: 81,
  // 				marketShare: 33,
  // 				avgPrice: 269,
  // 				currency: "EUR",
  // 			},
  // 		},
  // 		{
  // 			id: "it-002",
  // 			name: "Transitions Light Intelligent Lenses",
  // 			description: "Sun-rich lifestyle favors on-the-go tint changes.",
  // 			url: "https://www.essilor.com/en/brands/transitions/",
  // 			imageUrl: "/Icons/sunglasses.svg",
  // 			price: 219,
  // 			currency: "EUR",
  // 			popularityScore: 7.2,
  // 			frameColors: ["Gray", "Brown"],
  // 			metrics: {
  // 				searchInterest: 72,
  // 				marketShare: 24,
  // 				avgPrice: 219,
  // 				currency: "EUR",
  // 			},
  // 		},
  // 		{
  // 			id: "it-003",
  // 			name: "Crizal Anti-Reflective Coatings",
  // 			description:
  // 				"Clean aesthetics and clarity complement Italy’s design sensibilities.",
  // 			url: "https://www.essilor.com/en/brands/crizal/",
  // 			imageUrl: "/Icons/sunglasses.svg",
  // 			price: 159,
  // 			currency: "EUR",
  // 			popularityScore: 7.4,
  // 			frameColors: ["Black", "Clear"],
  // 			metrics: {
  // 				searchInterest: 74,
  // 				marketShare: 26,
  // 				avgPrice: 159,
  // 				currency: "EUR",
  // 			},
  // 		},
  // 	],
  // },
};

export default data;
