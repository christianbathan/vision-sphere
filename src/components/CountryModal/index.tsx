"use client";

import React, { useRef, useEffect } from "react";
import styles from "./styles/index.module.scss";
import type { EyewearModalProps } from "./types";

const CountryModal = ({ country, items, onClose }: EyewearModalProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const closeBtnRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		if (!country) return;
		ref.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 300,
			fill: "forwards",
		});
		// Focus the close button for accessibility
		closeBtnRef.current?.focus();
	}, [country]);

	// Close on Escape key
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.preventDefault();
				handleClose();
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	});

	const handleClose = () => {
		const animation = ref.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 200,
			fill: "forwards",
		});
		if (animation) {
			animation.onfinish = () => {
				if (onClose) onClose();
			};
		}
	};

	if (!country) return null;

	return (
		<div
			className={styles.modalWrapper}
			onClick={handleClose}
			aria-label="Close modal overlay"
		>
			<div
				className={styles.modal}
				ref={ref}
				role="dialog"
				aria-modal="true"
				aria-labelledby="country-modal-title"
				onClick={(e) => e.stopPropagation()}
			>
				{/* <div className={styles.accentBar} aria-hidden="true" /> */}
				<button
					ref={closeBtnRef}
					type="button"
					className={styles.closeButton}
					onClick={handleClose}
					aria-label="Close modal"
				>
					<span className={styles.closeIcon} aria-hidden="true" />
				</button>

				<div className={styles.headerRow}>
					<div className={styles.countryBadge} aria-hidden="true">
						<div className={styles.countryBadgeInner}>
							<img
								src={country.flagUrl}
								alt={`${country.name} flag`}
								width={32}
								height={24}
								className={styles.flagIcon}
							/>
						</div>
					</div>
					<div className={styles.titleBlock}>
						<h3 id="country-modal-title" className={styles.title}>
							{country.name}
						</h3>
						<p className={styles.subtitle}>Top eyewear picks & trends</p>
					</div>
				</div>
				<div className={styles.body}>
					{items.length > 0 ? (
						<div className={styles.itemList}>
							{items.map((item, i) => {
								const priceStr = item.price
									? new Intl.NumberFormat(undefined, {
											style: "currency",
											currency: item.currency || "USD",
									  }).format(item.price)
									: null;
								return (
									<div
										key={item.id}
										className={`${styles.itemCard} ${styles.itemCardEnter}`}
										style={{ animationDelay: `${i * 55}ms` }}
									>
										<div
											className={styles.itemThumb}
											style={
												item.imageUrl
													? { backgroundImage: `url(${item.imageUrl})` }
													: undefined
											}
											aria-label={item.name}
											role="img"
										>
											{!item.imageUrl && (
												<span className={styles.thumbFallback}>👓</span>
											)}
										</div>
										<div className={styles.itemBody}>
											<div className={styles.itemHeaderRow}>
												<strong className={styles.itemName}>{item.name}</strong>
												{priceStr && (
													<span className={styles.itemPrice}>{priceStr}</span>
												)}
											</div>
											{item.description && (
												<p className={styles.itemDesc}>{item.description}</p>
											)}
											<div className={styles.itemMeta}>
												{item.frameColors?.slice(0, 4).map((c) => (
													<span key={c} className={styles.colorTag} title={c}>
														<span
															style={{ background: c }}
															className={styles.colorSwatch}
														/>
														{c}
													</span>
												))}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					) : (
						<div className={styles.emptyState}>
							<p>No trending eyewear data for this country yet.</p>
						</div>
					)}
				</div>
				<div className={styles.footerRow}>
					<a
						href={`/countries/${country.id}`}
						className={styles.primaryButton}
						tabIndex={0}
					>
						Learn More
					</a>
				</div>
			</div>
		</div>
	);
};

export default CountryModal;
