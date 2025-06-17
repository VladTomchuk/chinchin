export interface Service {
  id: string;
  title: string;
  created_at: Date;
  min_group: number;
  max_group: number;
  price: number;
  price_condition: string;
  description: string;
  images: string[];
  slug: string;
}
