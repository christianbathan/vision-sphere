"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles/index.module.scss";

const Header: React.FC = () => {
	const progressRef = useRef<HTMLDivElement | null>(null);
	const router = useRouter();

	useEffect(() => {
		const el = progressRef.current;
		if (!el) return;
		const update = () => {
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;
			const scrollHeight =
				(document.documentElement.scrollHeight || document.body.scrollHeight) -
				window.innerHeight;
			const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
			el.style.transform = `scaleX(${ratio})`;
			el.style.opacity = ratio > 0.01 ? "1" : "0.6";
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);

	return (
		<header className={styles.header} role="banner">
			<div className={styles.progressContainer} aria-hidden="true">
				<div ref={progressRef} className={styles.progressBar} />
			</div>
			<div className={styles.inner}>
				<Link href="/" className={styles.brand} aria-label="VisionSphere Home">
					VisionSphere
				</Link>
				<nav aria-label="Primary Navigation" className={styles.nav}>
					<a
						href="/about"
						className={styles.navLink}
						onClick={(e) => {
							e.preventDefault();
							if ("startViewTransition" in document) {
								document.startViewTransition(() => {
									// Optionally fade out content here
									router.push("/about");
								});
							} else {
								router.push("/about");
							}
						}}
					>
						About Us
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
