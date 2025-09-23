"use client";

import { useEffect } from "react";

const ProgressAnimator = () => {
  useEffect(() => {
    const progressElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-progress]")
    );
    if (progressElements.length === 0) return;

    // Set progress elements to zero
    progressElements.forEach((element) => {
      if (element.dataset.progress === "scale") {
        element.style.setProperty("--p", "0");
      } else {
        element.style.width = "0%";
      }
    });

    const handleIntersections = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ target, isIntersecting }) => {
        const element = target as HTMLElement;
        const progressValue = Math.min(
          100,
          Math.max(0, Number(element.dataset.p) || 0)
        );

        if (isIntersecting) {
          void element.offsetWidth;
          if (element.dataset.progress === "scale") {
            element.style.setProperty("--p", String(progressValue / 100));
          } else {
            element.style.width = "0%";
            void element.offsetWidth;
            element.style.width = `${progressValue}%`;
          }
        } else {
          // Reset when not in view
          if (element.dataset.progress === "scale") {
            element.style.setProperty("--p", "0");
          } else {
            element.style.width = "0%";
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersections, {
      threshold: 0.4,
    });

    progressElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ProgressAnimator;
