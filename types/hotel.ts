export interface Hotel {
  id: string;
  name: string;
  price: number;
  latitude: number | null;
  longitude: number | null;
  category: string;
  rating: number;
  location: string;
  image: string | null;
  description?: string;
  address?: string | null;
  phone?: string | null;
}