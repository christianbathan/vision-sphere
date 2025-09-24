"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CountryModal from "@/components/CountryModal";
import { COUNTRY_PINS } from "@/constants/pins";
import countryContent from "@/constants/country-content";
import type { Pin } from "@/components/Globe/types";
import type {
  EyewearModalProps,
  CountryCode,
  CountryData,
} from "@/components/CountryModal/types";

const GlobeComponent = dynamic(() => import("@/components/Globe"), {
  ssr: false,
});

const pins: Pin[] = COUNTRY_PINS;

const Home = () => {
  const [selected, setSelected] = useState<EyewearModalProps | null>(null);
  const [shouldLoadGlobe, setShouldLoadGlobe] = useState(false);
  const globeSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (shouldLoadGlobe) return;
    const el = globeSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
          setShouldLoadGlobe(true);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.15, 0.3, 0.6] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoadGlobe]);

  const handlePinClick = (target: Pin) => {
    const country = pins.find((location) => location.id === target.id);
    if (!country) return;
    const code = country.id as CountryCode;
    const data = countryContent[code] as CountryData;
    setSelected({ country, products: data?.items ?? [] });
  };

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
        {shouldLoadGlobe && (
          <GlobeComponent pins={pins} onPinClick={handlePinClick} />
        )}
        <CountryModal
          country={selected?.country ?? null}
          products={selected?.products ?? []}
          onClose={() => setSelected(null)}
        />
      </section>
    </div>
  );
};

export default Home;
