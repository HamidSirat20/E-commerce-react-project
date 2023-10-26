export interface UpdateSingleProduct {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  images?: string[];
  categoryId?: number;
}
