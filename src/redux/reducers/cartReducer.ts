import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import { Category } from "@mui/icons-material";

export interface CartProduct {
  quantity: number;
  totalPrice: number;
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}
export interface Cart {
  cartIsVisible: boolean;
  products: CartProduct[];
  totalQuantity: number;
}
const initialState: Cart = {
  cartIsVisible: false,
  totalQuantity: 0,
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleShoppingCart: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    addProductToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find((item) => item.id === newProduct.id);
      state.totalQuantity++;
      if (!existingProduct) {
        state.products.push({
          quantity: 1,
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          description: newProduct.description,
          images: newProduct.images,
          totalPrice: newProduct.price,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice = existingProduct.price + newProduct.price;
      }
    },
    removeProductFromCart: (state, action) => {
      const id = action.payload;
      const existingProduct:CartProduct|undefined = state.products.find(item => item.id === id);
      state.totalQuantity--;
      if (existingProduct?.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      }else if (existingProduct?. quantity !== undefined){
        existingProduct.quantity--;
        existingProduct.totalPrice = existingProduct.totalPrice - existingProduct.price;
      }
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

const cartReducer = cartSlice.reducer;
export const { toggleShoppingCart, addProductToCart, removeProductFromCart } =
  cartSlice.actions;
export default cartReducer;
