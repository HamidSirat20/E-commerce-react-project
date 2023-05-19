import Product from "./Product";

export interface UpdateSingleProduct {
    id:number
    update:{
        title: string
        price: number
    }
}
