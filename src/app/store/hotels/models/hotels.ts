export interface FilterHotels {
  destination: string;
  checkin: string;
  checkout: string;
  guests: number;
}

export interface Hotel {
  id: number;
  lat: number;
  lng: number;
  name: string;
  image: string;
  description: string;
}
