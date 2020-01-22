export interface FilterHotels {
  destination: string;
  checkin: string;
  checkout: string;
  guests: number;
  page?: number;
}

export interface HotelResponse {
  hotels: Hotel[];
  meta: MetaData;
}

export interface Hotel {
  id: number;
  name: string;
  location: Location;
  subtotal: string;
  checkin: string;
  checkout: string;
  promotions: any;
  feature: Feature;
  amenities: any;
  nights: number;
  position: number;
  id90: string;
  displayable_id: string;
  star_rating: number;
  review_rating: number;
  display_rate: number;
  display_rate_with_promo: any;
  total: number;
  image: string;
  description: string;
  location_description: string;
  discount_promotion: any;
  accommodation_type: any;
  neighborhood_ids: number[];
  retail_rate: any;
  savings_amount: any;
  other_sites_prices: any;
  distance: number;
  distance_to_airport: any;
  distance_to_airports: any;
  number_of_rooms: number;
  total_discount_amount: any;
  surcharges: any;
  taxes_and_fees: any;
  payment_date: any;
  token_store: any;
  supplier_special_rate_type: any;
  experiment_variation: any;
}

export interface Location {
  city: string;
  country: string;
  state: string;
  region: string;
  latitude: number;
  longitude: number;
  description: string;
}

export interface Feature {
  booking_count: number;
  latest_booking_date: string;
  viewing_count: number;
  latest_viewing_date: string;
  ranking_score: number;
  revenue_score: number;
}

export interface MetaData {
  trip_reason: string;
  auto_dates: string;
  page: number;
  start_date: string;
  end_date: string;
  test_groups: string;
  experiment_variation: string;
  total_pages: number;
}
