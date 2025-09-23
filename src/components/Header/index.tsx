"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./styles/index.module.scss";

const Header = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = progressRef.current;
    if (!element) return;

    let lastRatio = 0;

    const updateProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        window.innerHeight;
      const newRatio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      if (Math.abs(newRatio - lastRatio) < 0.001) return;

      element.animate(
        [
          {
            transform: `scaleX(${lastRatio})`,
            opacity: lastRatio > 0.01 ? 1 : 0.6,
          },
          {
            transform: `scaleX(${newRatio})`,
            opacity: newRatio > 0.01 ? 1 : 0.6,
          },
        ],
        {
          duration: 150,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      lastRatio = newRatio;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.progressContainer}>
        <div ref={progressRef} className={styles.progressBar} />
      </div>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          VisionSphere
        </Link>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
