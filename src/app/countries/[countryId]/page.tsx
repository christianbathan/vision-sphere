import styles from "./styles/index.module.scss";
import Image from "next/image";
import countryContent from "@/constants/country-content.json";
import { notFound } from "next/navigation";

type Metrics = {
	searchInterest: number;
	marketShare: number;
	avgPrice: number;
	currency: string;
};
type FlashcardItem = {
	product: string;
	blurb: string;
	metrics: Metrics;
	image: string;
	url?: string;
};
type CountryContent = {
	hero: { id: string; name: string };
	flashcards: FlashcardItem[];
};

const BRAND_LINKS: Record<string, string> = {
	VARILUX: "https://www.essilor.com/en/brands/varilux/",
	CRIZAL: "https://www.essilor.com/en/brands/crizal/",
	EYEZEN: "https://www.essilor.com/en/brands/eyezen/",
	TRANSITIONS: "https://www.essilor.com/en/brands/transitions/",
	STELLEST: "https://www.essilor.com/en/innovation/stellest-lens/",
	XPERIO: "https://www.essilor.com/en/brands/xperio/",
};
function getBrandUrl(name: string): string {
	const upper = name.toUpperCase();
	for (const key of Object.keys(BRAND_LINKS))
		if (upper.includes(key)) return BRAND_LINKS[key];
	return "https://www.essilor.com/en/";
}

interface LearnMoreProps {
	params: { countryId: string };
}

export default function CountryLearnMorePage({ params }: LearnMoreProps) {
	const countryId = params.countryId.toUpperCase();
	// Read top-level brands and selected country content safely
	const allBrands = (countryContent as { brands?: string[] }).brands ?? [];
	const contentUnknown = (countryContent as Record<string, unknown>)[countryId];
	if (!contentUnknown || typeof contentUnknown !== "object") {
		return notFound();
	}
	const content = contentUnknown as CountryContent;
	if (!content?.hero || !content?.flashcards) {
		return notFound();
	}

	return (
		<main>
			<section className={styles.bannerContainer}>
				<div className={styles.bannerWrapper}>
					<div className={styles.backVideo}>
						<video
							className={styles.bgVideo}
							src="/Videos/banner.mp4"
							muted
							loop
							playsInline
							autoPlay
						/>
					</div>

					<div className={styles.content}>
						<div className={styles.contentInner}>
							<div className={styles.contentIcon}>
								<Image
									src={`/Icons/flags/${countryId.toLowerCase()}.svg`}
									alt={`${countryId} Flag`}
									width={40}
									height={40}
								/>
							</div>
							<h2 className={styles.heroCaption}>Eyewear Trends in</h2>
							<h1 className={styles.heroCountry}>{content.hero.name}</h1>
						</div>

						<div className={styles.contentImage}>
							<Image
								src={`/Images/about-us.jpg`}
								alt={`${countryId} Country`}
								width={400}
								height={180}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.flashcards}>
				<div className={styles.cardContent}>
					<h2>Top 3 Essilor Products</h2>

					<div className={styles.cards}>
						<div className={styles.cardsGrid}>
							{content.flashcards.map((item: FlashcardItem, idx: number) => (
								<div className={styles.card} key={idx}>
									<div className={styles.cardInner}>
										<div className={styles.left}>
											<h3>{item.product}</h3>
											<p>{item.blurb}</p>
											<p>
												<strong>Signals:</strong> Interest{" "}
												{item.metrics.searchInterest}% · Market{" "}
												{item.metrics.marketShare}% · Avg Price{" "}
												{item.metrics.avgPrice} {item.metrics.currency}
											</p>
											<a
												href={item.url ?? getBrandUrl(item.product)}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more on essilor.com
											</a>
										</div>
										<div className={styles.right}>
											<Image
												src={item.image}
												alt={item.product}
												width={100}
												height={100}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={styles.brands}>
				<h2 className={styles.brandsTitle}>Essilor Brands</h2>

				<div className={styles.brandsContainer}>
					{(allBrands as string[]).map((name: string, i: number) => (
						<div className={styles.brandCard} key={i}>
							<h3>{name}</h3>
							<p>
								Explore {name} products available in {content.hero.name}.
							</p>
							<a
								href={getBrandUrl(name)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn more on essilor.com
							</a>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
