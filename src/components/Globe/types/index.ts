export interface Pin {
  id: string;
  lat: number;
  lng: number;
  name: string;
  color: string;
}

export interface GlobeProps {
  pins: Pin[];
  onPinClick: (pin: Pin) => void;
  backgroundColor?: string;
}

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
