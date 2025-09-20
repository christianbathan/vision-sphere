export interface Pin {
	id: string;
	lat: number;
	lng: number;
	name: string;
	color: string;
	/** Optional custom icon path (public URL). If provided and using HTML markers, overrides default SVG. */
	iconUrl?: string;
}

export interface GlobeProps {
	pins: Pin[];
	onPinClick: (pin: Pin) => void;
	/** Optional background color for the globe scene (CSS color string). */
	backgroundColor?: string;
}

// Minimal interface for the Globe.js instance we use (method subset)
export interface GlobeInstance {
	globeImageUrl: (url: string) => GlobeInstance;
	backgroundColor: (color: string) => GlobeInstance;
	controls: () => { enableZoom: boolean };
	htmlElementsData: (data: Pin[]) => GlobeInstance;
	htmlLat: (fn: (d: Pin) => number) => GlobeInstance;
	htmlLng: (fn: (d: Pin) => number) => GlobeInstance;
	htmlElement: (fn: (d: Pin) => HTMLElement) => GlobeInstance;
	htmlElementVisibilityModifier?: (
		fn: (el: HTMLDivElement, isVisible: boolean) => void
	) => GlobeInstance;
}
