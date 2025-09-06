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
}
