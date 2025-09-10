import React from "react";
import styles from "./about.module.scss";

const About = () => (
	<main className={styles.aboutWrapper}>
		<section className={styles.aboutSection}>
			<div className={styles.aboutContent}>
				<div className={styles.textBlock}>
					<h1>About Vision Sphere</h1>
					<p>
						Vision Sphere is a global eyewear trends explorer. We showcase the
						latest and most popular Essilor eyewear styles from around the
						world, making it easy for you to discover what people are wearing in
						different countries.
					</p>
					<p>
						Our mission is to help you find your next favorite pair by providing
						region-specific insights, curated product highlights, and a seamless
						browsing experience.
					</p>
					<p>
						Whether you&apos;re looking for innovation, style, or comfort,
						Vision Sphere brings the world of eyewear to your fingertips.
					</p>
				</div>
				<div className={styles.imageBlock}>
					<img
						src="/Images/about-us.jpg"
						alt="Vision Sphere Globe"
						className={styles.aboutImage}
						width={180}
						height={180}
					/>
				</div>
			</div>
		</section>
	</main>
);

export default About;
