import Product from "./Product"

export interface UpdateSingleProduct{
    id: number
    update: Omit<Product,"id">
}