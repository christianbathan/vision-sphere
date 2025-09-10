import React from "react";
import styles from "./styles/index.module.scss";

const Footer: React.FC = () => {
	const year = new Date().getFullYear();
	return (
		<footer className={styles.footer} role="contentinfo">
			<div className={styles.inner}>
				<span className={styles.brand}>VisionSphere</span>
				<span className={styles.credit}>
					© {year} • Built with Globe.GL & Next.js
				</span>
				<a
					href="https://www.essilor.com/"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					Essilor.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
