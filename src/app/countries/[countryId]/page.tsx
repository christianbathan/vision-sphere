"use client";

import styles from "./styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import React from "react";
import countryContent from "@/constants/country-content";
import ProgressAnimator from "@/components/ProgressAnimator";
import Ripple from "@/components/Ripple/Ripple";
import type { CountryCode } from "@/components/CountryModal/types";

interface countryProps {
  params: Promise<{ countryId: CountryCode }>;
}

const CountryLearnMorePage = ({ params }: countryProps) => {
  const { countryId } = React.use(params);
  const code = countryId.toUpperCase() as CountryCode;

  const { hero, items } = countryContent[code];
  const allBrands = countryContent.brands;

  return (
    <main className={styles.pageContainer}>
      <section className={styles.bannerContainer}>
        <div className={styles.bannerWrapper}>
          <div className={styles.backVideo}>
            <video
              className={styles.bgVideo}
              src="/Videos/banner.mp4"
              muted
              loop
              playsInline
              autoPlay
            />
          </div>
          <div className={styles.content}>
            <div className={styles.contentInner}>
              <div className={styles.contentIcon}>
                <Image
                  src={`/Icons/flags/${code.toLowerCase()}.svg`}
                  alt={`${countryId} Flag`}
                  width={70}
                  height={70}
                />
              </div>
              <h2 className={styles.heroCaption}>Eyewear Trends in</h2>
              <h1 className={styles.heroCountry}>{hero.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.flashcards}>
        <div className={styles.cardContent}>
          <h2>Top 3 Essilor Products</h2>
          <div className={styles.cards}>
            <div className={styles.cardsGrid}>
              {items.map((item, index) => {
                const { name, description, metrics, imageUrl, url } = item;
                const popularity = metrics?.searchInterest ?? 0;
                const rating = Math.round(metrics?.ratings ?? 0);

                return (
                  <div className={styles.card} key={index}>
                    <div className={styles.cardInner}>
                      <div className={styles.chartDeco} />

                      <div className={styles.left}>
                        <h3>{name}</h3>
                        <p>{description}</p>

                        <div className={styles.signals}>
                          <div className={styles.signalItem}>
                            <span className={styles.signalLabel}>Interest</span>
                            <span className={styles.signalValue}>
                              {metrics?.searchInterest ?? "—"}%
                            </span>
                          </div>
                          <div className={styles.signalItem}>
                            <span className={styles.signalLabel}>Market</span>
                            <span className={styles.signalValue}>
                              {metrics?.marketShare ?? "—"}%
                            </span>
                          </div>
                          <div className={styles.signalItem}>
                            <span className={styles.signalLabel}>Price</span>
                            <span className={styles.signalValue}>
                              {metrics?.price?.toLocaleString() ?? "—"}{" "}
                              {metrics?.currency ?? ""}
                            </span>
                          </div>
                        </div>

                        <div className={styles.metrics}>
                          <div className={styles.popularityRow}>
                            <span>Popularity</span>
                            <span>{popularity}%</span>
                          </div>
                          <ProgressAnimator />
                          <div
                            className={styles.progressTrack}
                            role="progressbar"
                            aria-label="Popularity"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={popularity}
                          >
                            <div
                              className={styles.progressFill}
                              data-progress="scale"
                              data-p={popularity}
                              style={
                                {
                                  "--progress-scale": String(popularity / 100),
                                } as CSSProperties &
                                  Record<"--progress-scale", string>
                              }
                            />
                          </div>

                          <div className={styles.stars}>
                            <span className={styles.ratingsLabel}>
                              Ratings:
                            </span>
                            <br />
                            {Array.from({ length: 5 }).map((_, index) => (
                              <span
                                key={index}
                                className={`${styles.star} ${
                                  index < rating ? styles.filled : ""
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>

                        <Ripple className={styles.rippleWrapper}>
                          <Link
                            className={styles.cardCta}
                            href={url}
                            target="_blank"
                          >
                            Discover
                          </Link>
                        </Ripple>
                      </div>

                      <div className={styles.right}>
                        <div className={styles.rightMedia}>
                          <Image
                            src={imageUrl ?? "/Icons/sunglasses.svg"}
                            alt={name}
                            fill
                            className={styles.mediaImg}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.brands}>
        <h2 className={styles.brandsTitle}>Essilor Brands</h2>
        <div className={styles.brandsContainer}>
          {allBrands.map((brand, index) => (
            <div className={styles.brandCard} key={index}>
              <div className={styles.brandImageBox}>
                <Image
                  src={`/Images/brands/${brand.name.toLowerCase()}.jpg`}
                  alt={`${brand.name}-Logo`}
                  width={100}
                  height={120}
                  className={styles.brandImage}
                  unoptimized
                />
              </div>
              <h3>{brand.name}</h3>
              <p>{brand.description}.</p>

              <div className={styles.brandCtaContainer}>
                <Ripple className={styles.rippleWrapper}>
                  <Link
                    className={styles.brandCta}
                    href={brand.url}
                    target="_blank"
                  >
                    Discover
                  </Link>
                </Ripple>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CountryLearnMorePage;
