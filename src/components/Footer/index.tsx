import React from "react";
import Link from "next/link";
import styles from "./styles/index.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>
          <Link href="/" className={styles.link}>
            VisionSphere
          </Link>
        </span>

        <span className={styles.credit}>
          © 2025 Udemy Project built with Globe.gl & Next.js
        </span>
        <a
          href="https://www.essilor.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Essilor
        </a>
      </div>
    </section>
  );
};

export default Footer;
