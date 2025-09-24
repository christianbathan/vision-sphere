"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./styles/index.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

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

      element.style.transform = `scaleX(${newRatio})`;
      element.style.opacity = newRatio > 0.01 ? "1" : "0.6";

      lastRatio = newRatio;
    };

    const handleScroll = () => requestAnimationFrame(updateProgress);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, [pathname]);

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
