"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/index.module.scss";
import type { EyewearModalProps } from "./types";
import ProgressAnimator from "@/components/ProgressAnimator";
import Ripple from "../Ripple/Ripple";

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
        {/* shared progress animator for width/scale animations */}
        <ProgressAnimator />
        <button
          ref={closeBtnRef}
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close modal"
        >
          <Image
            src="/Icons/close.png"
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            className={styles.closeIconImg}
          />
        </button>

        <div className={styles.headerRow}>
          <div className={styles.countryBadge} aria-hidden="true">
            <Image
              src={country.flagUrl || "/Icons/flags/us.svg"}
              alt={`${country.name} flag`}
              width={90}
              height={60}
              className={styles.flagIcon}
            />
          </div>
          <div className={styles.titleBlock}>
            <h3 id="country-modal-title" className={styles.title}>
              {country.name}
            </h3>
            <p className={styles.subtitle}>Top eyewear picks & trends</p>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.body}>
          {items.length > 0 ? (
            <div className={styles.itemList}>
              {items.map((item, i) => {
                const priceStr = item.metrics?.price
                  ? new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: item.metrics?.currency || "USD",
                    }).format(item.metrics?.price)
                  : null;
                return (
                  <div
                    key={item.id}
                    className={`${styles.itemCard} ${styles.itemCardEnter}`}
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <div
                      className={styles.itemThumb}
                      aria-label={item.name}
                      role="img"
                    >
                      <Image
                        src={item.imageUrl || "/Images/about-us.jpg"}
                        alt={item.name}
                        fill
                        sizes="(max-width: 540px) 90px, 120px"
                        className={styles.itemImg}
                      />
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
                      <div className={styles.popularityRow}>
                        <div
                          className={styles.popularityBar}
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={item.metrics?.searchInterest}
                          aria-label="Popularity"
                        >
                          <span
                            className={styles.popularityFill}
                            data-progress="width"
                            data-p={item.metrics?.searchInterest}
                          />
                        </div>
                        <span className={styles.popularityValue}>
                          {item.metrics?.searchInterest}%
                        </span>
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

        {items.length > 0 ? (
          <div className={styles.footerRow}>
            <Ripple
              className={styles.rippleWrapper}
              duration={0.3}
              opacity={0.25}
              size={4}
              color={"rgba(255,255,255,0.6)"}
              centerOnly
            >
              <a
                href={`/countries/${country.id}`}
                className={styles.primaryButton}
                tabIndex={0}
              >
                Learn More
              </a>
            </Ripple>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CountryModal;
