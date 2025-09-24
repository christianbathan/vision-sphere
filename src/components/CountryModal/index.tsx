"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/index.module.scss";
import type { EyewearModalProps } from "./types";
import ProgressAnimator from "@/components/ProgressAnimator";
import Ripple from "../Ripple/Ripple";

const CountryModal = ({ country, products, onClose }: EyewearModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!country) return;

    modalRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
    });
  }, [country]);

  const handleClose = () => {
    const animation = modalRef.current?.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      {
        duration: 200,
        fill: "forwards",
      }
    );

    if (animation) {
      animation.onfinish = onClose ?? null;
    } else {
      onClose?.();
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
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="country-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <ProgressAnimator />

        <button
          ref={closeButtonRef}
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
          {products.length > 0 ? (
            <div className={styles.itemList}>
              {products.map((item, i) => {
                const { name, imageUrl, description, id, metrics } = item;
                const price = metrics?.price
                  ? new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: metrics.currency || "USD",
                    }).format(metrics.price)
                  : null;

                const interest = metrics?.searchInterest ?? 0;

                return (
                  <div
                    key={id}
                    className={`${styles.itemCard} ${styles.itemCardEnter}`}
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <div
                      className={styles.itemThumb}
                      aria-label={name}
                      role="img"
                    >
                      <Image
                        src={imageUrl || "/Images/about-us.jpg"}
                        alt={name}
                        fill
                        sizes="(max-width: 540px) 90px, 120px"
                        className={styles.itemImg}
                      />
                    </div>

                    <div className={styles.itemBody}>
                      <div className={styles.itemHeaderRow}>
                        <strong className={styles.itemName}>{name}</strong>
                        {price && (
                          <span className={styles.itemPrice}>{price}</span>
                        )}
                      </div>

                      {description && (
                        <p className={styles.itemDesc}>{description}</p>
                      )}

                      <div className={styles.popularityRow}>
                        <div
                          className={styles.popularityBar}
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={interest}
                          aria-label="Popularity"
                        >
                          <span
                            className={styles.popularityFill}
                            data-progress="width"
                            data-p={interest}
                          />
                        </div>
                        <span className={styles.popularityValue}>
                          {interest}%
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

        {products.length > 0 && (
          <div className={styles.footerRow}>
            <Ripple className={styles.rippleWrapper}>
              <a
                href={`/countries/${country.id}`}
                className={styles.primaryButton}
                tabIndex={0}
              >
                Learn More
              </a>
            </Ripple>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryModal;
