import Product from "./Product";

export interface UpdateSingleProduct {
  id: number;
  update?: {
    title?: string;
    price?: number;
    description?: string;
    images?: string[];
    category?: {
      id?: number;
      name?: string;
      image?: string;
    }
  };
}
