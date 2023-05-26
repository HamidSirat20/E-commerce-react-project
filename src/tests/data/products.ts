import { NewProduct } from "../../types/NewProduct"
import Product from "../../types/Product"
import { categoryA, categoryB, categoryC } from "./category"

const product1: Product = {
    title: "product 1",
    price: 100,
    description: "this is product 1",
    images: [""],
    id: 1,
    category: categoryA
}
const product2:Product={
    title: "product 2",
    price: 200,
    description: "this is product 2",
    images: [""],
    id: 2,
    category: categoryB
}
const product3:Product={
    title: "product 3",
    price: 300,
    description: "this is product 3",
    images: [""],
    id: 3,
    category: categoryC
}
const product4:Product={
    title: "product 4",
    price: 400,
    description: "this is product 4",
    images: [""],
    id: 4,
    category: categoryA
}
const newProduct: NewProduct={
    title: "New Product",
    price: 100,
    description: "This is a new product",
    categoryId: 3,
    images: [""]
}
const newProduct1: NewProduct={
    title: "New Product 1",
    price: 100,
    description: "This is a new product 1",
    categoryId: 1,
    images: [""]
}
const newProduct2: NewProduct={
    title: "New Product 2",
    price: 200,
    description: "This is a new product 2",
    categoryId: 2,
    images: [""]
}
const newProduct3: NewProduct={
    title: "New Product 3",
    price:50,
    description: "This is a new product 3",
    categoryId: 3,
    images: [""]
}
const newProduct4: NewProduct={
    title: "New Product 4",
    price: 400,
    description: "This is a new product 4",
    categoryId: 4,
    images: [""]
}

export {product1,product2,product3,product4,newProduct,newProduct1,newProduct2,newProduct3,newProduct4}