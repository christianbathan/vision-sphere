import React, { useRef, useEffect } from "react";
import createGlobe from "globe.gl";
import type { Pin, GlobeProps } from "./types";

const DEFAULT_MARKER_SVG = `<svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M16 0c8.284 0 15 6.492 15 14.5C31 26.2 16 40 16 40S1 26.3 1 14.5C1 6.492 7.716 0 16 0Z"/>
  <circle cx="16" cy="15" r="7" fill="#0d1117" />
</svg>`;

const GlobeComponent = ({
	pins,
	onPinClick,
	backgroundColor = "#0d1117",
}: GlobeProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const globeInstance = useRef<any>(null);

	useEffect(() => {
		if (!ref.current || globeInstance.current) return;
		const visionGlobe = (globeInstance.current = createGlobe()(
			ref.current
		) as any);

		visionGlobe
			.globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
			.backgroundColor(backgroundColor);

		visionGlobe
			.htmlElementsData(pins)
			.htmlLat((d: Pin) => d.lat)
			.htmlLng((d: Pin) => d.lng)
			.htmlElement((d: Pin) => {
				const wrapper = document.createElement("div");
				wrapper.innerHTML = DEFAULT_MARKER_SVG;
				wrapper.style.width = "25px";
				wrapper.style.cursor = "pointer";
				wrapper.style.pointerEvents = "auto";
				wrapper.style.color = d.color;
				wrapper.style.filter = "drop-shadow(0 0 4px rgba(255,255,255,0.45))";
				wrapper.style.transition = "opacity 250ms";
				wrapper.onclick = () => onPinClick(d);
				return wrapper;
			})
			.htmlElementVisibilityModifier?.(
				(wrapper: HTMLDivElement, isVisible: boolean) =>
					(wrapper.style.opacity = isVisible ? "1" : "0")
			);

		visionGlobe.controls().enableZoom = false;
	}, [backgroundColor, onPinClick, pins]);

	useEffect(() => {
		if (!globeInstance.current) return;
		globeInstance.current.htmlElementsData?.(pins);
	}, [pins]);

	return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};

export default GlobeComponent;
