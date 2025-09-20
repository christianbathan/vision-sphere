import styles from "./styles/index.module.scss";
import Image from "next/image";
import type { CSSProperties } from "react";
import countryContent from "@/constants/country-content";
import ProgressAnimator from "@/components/ProgressAnimator";

type CountryCode = "PH" | "SG" | "US";
type CountriesMap = Pick<typeof countryContent, CountryCode>;
type CountryItem = CountriesMap[CountryCode]["items"][number];

interface LearnMoreProps {
	params: { countryId: string };
}

export default function CountryLearnMorePage({ params }: LearnMoreProps) {
	const countryId = params.countryId.toUpperCase();
	const isCode = (x: string): x is CountryCode =>
		["PH", "SG", "US"].includes(x);
	const allBrands = countryContent.brands;
	const code: CountryCode = isCode(countryId) ? countryId : "US";
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
									width={70}
									height={70}
								/>
							</div>
							<h2 className={styles.heroCaption}>Eyewear Trends in</h2>
							<h1 className={styles.heroCountry}>{content.hero.name}</h1>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.flashcards}>
				<div className={styles.cardContent}>
					<h2>Top 3 Essilor Products</h2>

					<div className={styles.cards}>
						<div className={styles.cardsGrid}>
							{content.items.map((item: CountryItem, idx: number) => (
								<div className={styles.card} key={idx}>
									<div className={styles.cardInner}>
										<div className={styles.left}>
											<h3>{item.name}</h3>
											<p>{item.description}</p>
											<div className={styles.signals}>
												<div className={styles.signalItem}>
													<span className={styles.signalLabel}>Interest</span>
													<span className={styles.signalValue}>
														{item.metrics?.searchInterest ?? "—"}%
													</span>
												</div>
												<div className={styles.signalItem}>
													<span className={styles.signalLabel}>Market</span>
													<span className={styles.signalValue}>
														{item.metrics?.marketShare ?? "—"}%
													</span>
												</div>
												<div className={styles.signalItem}>
													<span className={styles.signalLabel}>Price</span>
													<span className={styles.signalValue}>
														{item.metrics?.price != null
															? item.metrics.price.toLocaleString()
															: "—"}{" "}
														{item.metrics?.currency ?? ""}
													</span>
												</div>
											</div>

											{(() => {
												const popularity = item.metrics?.searchInterest;

												return (
													<div className={styles.metrics}>
														<div className={styles.popularityRow}>
															<span>Popularity</span>
															<span>{popularity}%</span>
														</div>
														<ProgressAnimator />
														<div
															className={styles.progressTrack}
															role="progressbar"
															aria-label="Popularity"
															aria-valuemin={0}
															aria-valuemax={100}
															aria-valuenow={popularity}
														>
															<div
																className={styles.progressFill}
																data-progress="scale"
																data-p={popularity}
																style={
																	{
																		["--p"]: String(popularity / 100),
																	} as CSSProperties & Record<"--p", string>
																}
															/>
														</div>
														<div className={styles.stars}>
															<span className={styles.ratingsLabel}>
																Ratings:
															</span>
															<br />

															{Array.from({ length: 5 }).map((_, i) => (
																<span
																	key={i}
																	className={`${styles.star} ${
																		i < Math.round(item.metrics?.ratings ?? 0)
																			? styles.filled
																			: ""
																	}`}
																>
																	★
																</span>
															))}
														</div>
													</div>
												);
											})()}

											<a
												className={styles.cardCta}
												href={item.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												Discover
											</a>
										</div>
										<div className={styles.right}>
											<div className={styles.rightMedia}>
												<Image
													src={item.imageUrl ?? "/Icons/sunglasses.svg"}
													alt={item.name}
													fill
													sizes="(max-width: 768px) 80vw, 40vw"
													className={styles.mediaImg}
													priority={false}
												/>
											</div>
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
							<div className={styles.brandImageBox}>
								<Image
									src={`/Images/brands/${brand.name
										.toLowerCase()
										.replace(/\s+/g, "")}.jpg`}
									alt={`${brand.name} logo`}
									width={100}
									height={120}
									className={styles.brandImage}
									loading="lazy"
									priority={false}
								/>
							</div>
							<h3>{brand.name}</h3>
							<p>{brand.description}.</p>
							<div className={styles.brandCtaContainer}>
								<a
									className={styles.brandCta}
									href={brand.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									Discover
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
