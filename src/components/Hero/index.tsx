"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/index.module.scss";
import ScrollAdvanceButton from "@/components/ScrollAdvanceButton";

const Hero = () => {
	const sectionRef = useRef<HTMLElement | null>(null);
	const iconRef = useRef<HTMLDivElement | null>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const textRef = useRef<HTMLParagraphElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const ringSmallRef = useRef<HTMLDivElement | null>(null);
	const ringLargeRef = useRef<HTMLDivElement | null>(null);
	const chartRef = useRef<HTMLDivElement | null>(null);

	// New refs for inner rotators to avoid transform conflicts
	const ringSmallInnerRef = useRef<HTMLDivElement | null>(null);
	const ringLargeInnerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const animations: Animation[] = [];

		if (iconRef.current) {
			// Slight pop/rotate for wrapper
			const anim = iconRef.current.animate(
				[
					{
						transform: "scale(.6) rotate(-8deg)",
						opacity: 0,
						filter: "blur(6px)",
					},
					{ transform: "scale(1) rotate(0deg)", opacity: 1, filter: "blur(0)" },
				],
				{
					duration: 700,
					easing: "cubic-bezier(.33,.86,.43,.99)",
					fill: "forwards",
				}
			);
			animations.push(anim);
		}
		if (imgRef.current) {
			// Subtle lens shimmer wobble (infinite, delayed start)
			const loop = imgRef.current.animate(
				[
					{ transform: "translateY(0) rotate(0deg)" },
					{ transform: "translateY(4px) rotate(1deg)" },
					{ transform: "translateY(-2px) rotate(-1deg)" },
					{ transform: "translateY(0) rotate(0deg)" },
				],
				{
					duration: 6000,
					iterations: Infinity,
					easing: "ease-in-out",
					delay: 900,
				}
			);
			animations.push(loop);
		}
		if (titleRef.current) {
			const anim = titleRef.current.animate(
				[
					{
						transform: "translateY(24px) scale(.95)",
						letterSpacing: "-0.04em",
						opacity: 0,
					},
					{
						transform: "translateY(0) scale(1)",
						letterSpacing: "0em",
						opacity: 1,
					},
				],
				{
					duration: 650,
					easing: "cubic-bezier(.3,.7,.4,1)",
					fill: "forwards",
					delay: 120,
				}
			);
			animations.push(anim);
		}
		if (textRef.current) {
			const anim = textRef.current.animate(
				[
					{ transform: "translateY(18px)", opacity: 0 },
					{ transform: "translateY(0)", opacity: 0.85 },
				],
				{
					duration: 600,
					easing: "cubic-bezier(.33,.66,.4,1)",
					fill: "forwards",
					delay: 240,
				}
			);
			animations.push(anim);
		}
		if (arrowRef.current) {
			const anim = arrowRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
				duration: 600,
				easing: "cubic-bezier(.33,.66,.4,1)",
				fill: "forwards",
				delay: 500,
			});
			animations.push(anim);
		}

		// Coordinate entrance for decorative elements
		const decoFadeKeyframes: Keyframe[] = [
			{ opacity: 0, transform: "translateY(10px)" },
			{ opacity: 0.18, transform: "translateY(0)" },
		];
		const decoTiming: KeyframeAnimationOptions = {
			duration: 700,
			easing: "cubic-bezier(.33,.66,.4,1)",
			fill: "forwards",
			delay: 260, // starts after title/text begin
		};

		if (ringSmallRef.current) {
			animations.push(
				ringSmallRef.current.animate(decoFadeKeyframes, decoTiming)
			);
		}
		if (ringLargeRef.current) {
			animations.push(
				ringLargeRef.current.animate(decoFadeKeyframes, decoTiming)
			);
		}
		if (chartRef.current) {
			const chartTiming: KeyframeAnimationOptions = {
				...decoTiming,
				delay: 320,
			};
			// Slightly lower final opacity for chart for subtlety
			const chartKeyframes: Keyframe[] = [
				{ opacity: 0, transform: "translateY(12px)" },
				{ opacity: 0.12, transform: "translateY(0)" },
			];
			animations.push(chartRef.current.animate(chartKeyframes, chartTiming));
		}

		// Add endless rotations on inner elements to avoid transform override with CSS drift
		if (ringSmallInnerRef.current) {
			animations.push(
				ringSmallInnerRef.current.animate(
					[{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
					{ duration: 60000, iterations: Infinity, easing: "linear" }
				)
			);
		}
		if (ringLargeInnerRef.current) {
			animations.push(
				ringLargeInnerRef.current.animate(
					[{ transform: "rotate(0deg)" }, { transform: "rotate(-360deg)" }],
					{ duration: 80000, iterations: Infinity, easing: "linear" }
				)
			);
		}

		return () => animations.forEach((a) => a.cancel());
	}, []);

	return (
		<section
			ref={sectionRef}
			className={styles.hero}
			style={{ position: "relative" }}
		>
			<div className={styles.glow} />
			{/* Decorative, animated background rings */}
			<div
				ref={ringSmallRef}
				className={`${styles.deco} ${styles.ringSmall}`}
				aria-hidden="true"
			>
				<div ref={ringSmallInnerRef} className={styles.ringSmallInner} />
			</div>
			<div
				ref={ringLargeRef}
				className={`${styles.deco} ${styles.ringLarge}`}
				aria-hidden="true"
			>
				<div ref={ringLargeInnerRef} className={styles.ringLargeInner} />
			</div>
			<div
				ref={chartRef}
				className={`${styles.deco} ${styles.chartAccent}`}
				aria-hidden="true"
			/>
			<div ref={iconRef} className={styles.iconWrap} aria-hidden="true">
				<div ref={imgRef} style={{ width: "100%", height: "100%" }}>
					<Image
						src="/Icons/sunglasses.svg"
						alt="Sunglasses"
						className={styles.sunglassesSvg}
						width={120}
						height={120}
						priority={false}
					/>
				</div>
			</div>
			<div className={styles.heroContents}>
				<h1 ref={titleRef} className={styles.title}>
					Explore the World <span>Through Style</span>
				</h1>

				<p ref={textRef}>
					Discover trending Essilor eyewear from around the globe.
				</p>
				<div>
					<ScrollAdvanceButton sectionSelector="section" />
				</div>
				<div
					ref={arrowRef}
					className={styles.scrollDown}
					aria-label="Scroll down"
				>
					↓
				</div>
			</div>
		</section>
	);
};

export default Hero;
