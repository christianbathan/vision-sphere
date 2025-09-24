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

    if (pathname !== "/") {
      element.style.transform = "scaleX(0)";
      element.style.opacity = "0";
      return;
    }

    let lastRatio = 0;

    const getScrollableRoot = () =>
      (document.scrollingElement || document.documentElement) as HTMLElement;

    const computeRatio = () => {
      const root = getScrollableRoot();
      const maxScroll = root.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return 0;
      return Math.min(1, Math.max(0, root.scrollTop / maxScroll));
    };

    const updateProgress = () => {
      const newRatio = computeRatio();

      if (Math.abs(newRatio - lastRatio) < 0.001) return;

      element.style.transform = `scaleX(${newRatio})`;
      element.style.opacity = newRatio > 0.01 ? "1" : "0.6";

      lastRatio = newRatio;
    };

    const handleScroll = () => requestAnimationFrame(updateProgress);

    const mo = new MutationObserver(() => updateProgress());
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("load", handleScroll);
      mo.disconnect();
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
