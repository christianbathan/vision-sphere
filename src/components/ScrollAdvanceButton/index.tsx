"use client";
import React, { useCallback } from "react";
import styles from "./styles/index.module.scss";

interface ScrollAdvanceButtonProps {
	/** Pixels to scroll (fallback) if no section snapping logic */
	stepPx?: number;
	/** Optional selector to cycle through sections */
	sectionSelector?: string;
}

const ScrollAdvanceButton = ({
	stepPx = typeof window !== "undefined" ? window.innerHeight * 0.85 : 700,
	sectionSelector = "section",
}: ScrollAdvanceButtonProps) => {
	const handleClick = useCallback(() => {
		try {
			const sections = Array.from(
				document.querySelectorAll<HTMLElement>(sectionSelector)
			);
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const viewportH = window.innerHeight;
			// Find the next section whose top is greater than current scroll
			const next = sections.find((sec) => sec.offsetTop > scrollTop + 10);
			if (next) {
				next.scrollIntoView({ behavior: "smooth", block: "start" });
				return;
			}
			// If none, just scroll down a fixed step (or wrap to top)
			if (scrollTop + viewportH < document.documentElement.scrollHeight - 5) {
				window.scrollTo({ top: scrollTop + stepPx, behavior: "smooth" });
			} else {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		} catch {
			window.scrollBy({ top: stepPx, behavior: "smooth" });
		}
	}, [stepPx, sectionSelector]);

	return (
		<button
			type="button"
			aria-label="Scroll down"
			className={styles.fab}
			onClick={handleClick}
		>
			See what the world is wearing
		</button>
	);
};

export default ScrollAdvanceButton;
