"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./about.module.scss";

const About = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animations: Animation[] = [];

    if (textRef.current) {
      animations.push(
        textRef.current.animate(
          [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 600,
            easing: "cubic-bezier(0.33, 1, 0.68, 1)", // easeOutCubic
            fill: "forwards",
          }
        )
      );
    }

    if (imageRef.current) {
      animations.push(
        imageRef.current.animate(
          [
            { opacity: 0, transform: "scale(0.95)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          {
            duration: 700,
            easing: "cubic-bezier(0.33, 1, 0.68, 1)",
            fill: "forwards",
            delay: 100,
          }
        )
      );
    }

    return () => animations.forEach((a) => a.cancel());
  }, []);

  return (
    <main className={styles.aboutWrapper}>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.textBlock} ref={textRef}>
            <h1>About VisionSphere</h1>
            <p>
              <b>VisionSphere</b> is a global eyewear trends explorer.
            </p>
            <p>
              We showcase the latest and most popular Essilor eyewear styles
              from around the world, making it easy for you to discover what
              people are wearing in different countries.
            </p>
            <p>
              Our mission is to help you find your next favorite pair by
              providing region-specific insights, curated product highlights,
              and a seamless browsing experience.
            </p>
          </div>
          <div className={styles.imageBlock} ref={imageRef}>
            <Image
              src="/Images/about-us.jpg"
              alt="about-us-image"
              className={styles.aboutImage}
              width={180}
              height={180}
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
