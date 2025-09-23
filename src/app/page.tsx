"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CountryModal from "@/components/CountryModal";
import { COUNTRY_PINS } from "@/constants/pins";
import countryContent from "@/constants/country-content";

import type { Pin } from "@/components/Globe/types";
import type { EyewearModalProps } from "@/components/CountryModal/types";
type CountriesMap = Omit<typeof countryContent, "brands">;
type CountryCode = keyof CountriesMap;

const GlobeComponent = dynamic(() => import("@/components/Globe"), {
  ssr: false,
});

const pins: Pin[] = COUNTRY_PINS;

const Home: React.FC = () => {
  const [selected, setSelected] = useState<EyewearModalProps | null>(null);
  const [shouldLoadGlobe, setShouldLoadGlobe] = useState(false);
  const globeSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (shouldLoadGlobe) return;
    const el = globeSectionRef.current;
    if (!el) return;

    const thresholds = [0.25, 0.5, 0.75, 0.9, 0.95, 1];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setShouldLoadGlobe(true);
            observer.disconnect();
          }
        });
      },
      { threshold: thresholds }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoadGlobe]);

  return (
    <div style={{ position: "relative" }}>
      <Hero />
      <section
        id="globe"
        ref={globeSectionRef}
        style={{
          minHeight: "100vh",
          position: "relative",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {shouldLoadGlobe ? (
          <GlobeComponent
            pins={pins}
            onPinClick={(pt) => {
              const country = pins.find((p) => p.id === pt.id);
              if (country) {
                const code = country.id as CountryCode;
                const raw = (countryContent as CountriesMap)[code];
                const items = raw?.items ?? [];
                setSelected({ country, items });
              }
            }}
          />
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "var(--muted)",
              fontSize: "1.1rem",
              opacity: 0.8,
              padding: "1rem",
            }}
          ></div>
        )}
        <CountryModal
          country={selected?.country ?? null}
          items={selected?.items ?? []}
          onClose={() => setSelected(null)}
        />
      </section>
    </div>
  );
};

export default Home;
