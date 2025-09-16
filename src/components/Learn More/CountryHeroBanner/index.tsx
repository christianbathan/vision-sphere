import styles from "./styles/index.module.scss";
import Image from "next/image";

interface TCountryHeroBanner {
	countryId: string;
}

const CountryHeroBanner = ({ countryId }: TCountryHeroBanner) => {
	return (
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
				<div className={styles.frontVideo}>
					<video
						src="/Videos/banner.mp4"
						muted
						className={styles.bgVideo}
						loop
						playsInline
						autoPlay
					/>
				</div>

				<div className={styles.content}>
					<div className={styles.contentInner}>
						<h2 className={styles.first}>Eyewear Trends in United States</h2>
						<h2 className={styles.second}>
							Capture the Essence of Style and Vision
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CountryHeroBanner;
