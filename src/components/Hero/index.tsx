"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/index.module.scss";

const Hero = () => {
  const iconRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const ringSmallRef = useRef<HTMLDivElement | null>(null);
  const ringLargeRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const ringSmallInnerRef = useRef<HTMLDivElement | null>(null);
  const ringLargeInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animations: Animation[] = [];

    if (iconRef.current) {
      animations.push(
        iconRef.current.animate(
          [
            {
              transform: "scale(.6) rotate(-8deg)",
              opacity: 0,
              filter: "blur(6px)",
            },
            {
              transform: "scale(1) rotate(0deg)",
              opacity: 1,
              filter: "blur(0)",
            },
          ],
          {
            duration: 700,
            easing: "cubic-bezier(.33,.86,.43,.99)",
            fill: "forwards",
          }
        )
      );
    }

    if (imgRef.current) {
      animations.push(
        imgRef.current.animate(
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
        )
      );
    }

    if (titleRef.current) {
      animations.push(
        titleRef.current.animate(
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
        )
      );
    }

    if (textRef.current) {
      animations.push(
        textRef.current.animate(
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
        )
      );
    }

    if (arrowRef.current) {
      animations.push(
        arrowRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 600,
          easing: "cubic-bezier(.33,.66,.4,1)",
          fill: "forwards" as FillMode,
          delay: 500,
        })
      );
    }

    const decoFade = [
      { opacity: 0, transform: "translateY(10px)" },
      { opacity: 0.18, transform: "translateY(0)" },
    ];

    const decoTiming = {
      duration: 700,
      easing: "cubic-bezier(.33,.66,.4,1)",
      fill: "forwards" as FillMode,
      delay: 260,
    };

    if (ringSmallRef.current)
      animations.push(ringSmallRef.current.animate(decoFade, decoTiming));

    if (ringLargeRef.current)
      animations.push(ringLargeRef.current.animate(decoFade, decoTiming));

    if (chartRef.current) {
      animations.push(
        chartRef.current.animate(
          [
            { opacity: 0, transform: "translateY(12px)" },
            { opacity: 0.12, transform: "translateY(0)" },
          ],
          { ...decoTiming, delay: 320 }
        )
      );

      animations.push(
        chartRef.current.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(20px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 12000,
            iterations: Infinity,
            easing: "ease-in-out",
            delay: 1000,
          }
        )
      );
    }

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
    <section className={styles.hero} style={{ position: "relative" }}>
      <div className={styles.glow} />
      <div ref={ringSmallRef} className={`${styles.deco} ${styles.ringSmall}`}>
        <div ref={ringSmallInnerRef} className={styles.ringSmallInner} />
      </div>
      <div ref={ringLargeRef} className={`${styles.deco} ${styles.ringLarge}`}>
        <div ref={ringLargeInnerRef} className={styles.ringLargeInner} />
      </div>
      <div ref={chartRef} className={`${styles.deco} ${styles.chartAccent}`} />
      <div ref={iconRef} className={styles.iconWrap}>
        <Image
          src="/Images/image 9.png"
          alt="glasses"
          className={styles.glassesSvg}
          width={200}
          height={120}
          priority={true}
          ref={imgRef}
        />
      </div>
      <div className={styles.heroContents}>
        <h1 ref={titleRef} className={styles.title}>
          Explore the World <span>Through Style</span>
        </h1>
        <p ref={textRef}>
          Discover trending Essilor eyewear from around the globe.
        </p>
        <a
          href="#globe"
          className={styles.scrollButton}
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("globe");
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          See what the world is wearing
        </a>
        <div ref={arrowRef} className={styles.scrollDown}>
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
