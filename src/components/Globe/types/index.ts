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
