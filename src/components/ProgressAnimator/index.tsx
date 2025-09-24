"use client";

import { useEffect } from "react";

const ProgressAnimator = () => {
  useEffect(() => {
    const progressElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-progress]")
    );
    if (progressElements.length === 0) return;

    const resetElement = (element: HTMLElement, type: string | undefined) => {
      if (type === "scale") {
        element.style.setProperty("--progress-scale", "0");
      } else {
        element.style.width = "0%";
      }
    };

    progressElements.forEach((element) =>
      resetElement(element, element.dataset.progress)
    );

    const handleIntersections = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ target, isIntersecting }) => {
        const element = target as HTMLElement;
        const type = element.dataset.progress;
        const targetValue = Math.min(
          100,
          Math.max(0, Number(element.dataset.p) || 0)
        );

        if (isIntersecting) {
          void element.offsetWidth;
          if (type === "scale") {
            element.style.setProperty(
              "--progress-scale",
              String(targetValue / 100)
            );
          } else {
            element.style.width = "0%";
            void element.offsetWidth;
            element.style.width = `${targetValue}%`;
          }
        } else {
          resetElement(element, type);
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
