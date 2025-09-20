"use client";

import { useEffect } from "react";

export default function ProgressAnimator() {
	useEffect(() => {
		const elements = Array.from(
			document.querySelectorAll<HTMLElement>("[data-progress]")
		);

		if (elements.length === 0) return;

		const supportsIntersectionObserver =
			typeof window !== "undefined" && "IntersectionObserver" in window;

		// Initialize elements to 0%
		elements.forEach((el) => {
			const type = el.dataset.progress;
			if (type === "scale") {
				el.style.setProperty("--p", "0");
			} else if (type === "width") {
				el.style.width = "0%";
			}
		});

		// Fallback for unsupported browsers
		if (!supportsIntersectionObserver) {
			elements.forEach((el) => {
				const progress = Math.max(0, Math.min(100, Number(el.dataset.p || 0)));
				const type = el.dataset.progress;
				if (type === "scale") {
					el.style.setProperty("--p", String(progress / 100));
				} else if (type === "width") {
					el.style.width = `${progress}%`;
				}
			});
			return;
		}

		// Use IntersectionObserver to animate on scroll
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;
					const progress = Math.max(
						0,
						Math.min(100, Number(el.dataset.p || 0))
					);
					const type = el.dataset.progress;

					if (entry.isIntersecting) {
						// Animate to target value
						void el.offsetWidth; // force reflow
						if (type === "scale") {
							el.style.setProperty("--p", String(progress / 100));
						} else if (type === "width") {
							el.style.width = "0%"; // reset
							void el.offsetWidth;
							el.style.width = `${progress}%`;
						}
					} else {
						// Reset when out of view
						if (type === "scale") {
							el.style.setProperty("--p", "0");
						} else if (type === "width") {
							el.style.width = "0%";
						}
					}
				});
			},
			{ threshold: 0.4 }
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return null;
}
