import styles from "./styles/index.module.scss";
import Image from "next/image";
import countryContent from "@/constants/country-content";

type CountryCode = "PH" | "SG" | "US" | "FR" | "IT";

interface LearnMoreProps {
	params: { countryId: string };
}

export default function CountryLearnMorePage({ params }: LearnMoreProps) {
	const countryId = params.countryId.toUpperCase();
	const allBrands = countryContent.brands;
	const code = countryId as CountryCode;
	const content = countryContent[code];

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
							{content.items.map((item, idx: number) => (
								<div className={styles.card} key={idx}>
									<div className={styles.cardInner}>
										<div className={styles.left}>
											<h3>{item.name}</h3>
											{item.description && <p>{item.description}</p>}
											<p>
												<strong>Signals:</strong> Interest{" "}
												{item.metrics?.searchInterest ?? "—"}% · Market{" "}
												{item.metrics?.marketShare ?? "—"}% · Avg Price{" "}
												{item.metrics?.avgPrice ?? "—"}{" "}
												{item.metrics?.currency ?? ""}
											</p>
											<a
												href={item.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more on essilor.com
											</a>
										</div>
										<div className={styles.right}>
											<Image
												src={item.imageUrl ?? "/Icons/sunglasses.svg"}
												alt={item.name}
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
					{allBrands.map((brand, i: number) => (
						<div className={styles.brandCard} key={i}>
							<h3>{brand.name}</h3>
							<p>
								Explore {brand.name} products available in {content.hero.name}.
							</p>
							<a href={brand.url} target="_blank" rel="noopener noreferrer">
								Learn more on essilor.com
							</a>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
