import React from "react";
import styles from "./styles/index.module.scss";

const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.inner}>
				<span className={styles.brand}>VisionSphere</span>
				<span className={styles.credit}>
					© 2025 • Built with Globe.gl & Next.js
				</span>
				<a
					href="https://www.essilor.com/"
					target="_blank"
					className={styles.link}
				>
					Essilor.com
				</a>
			</div>
		</section>
	);
};

export default Footer;
