import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import { Category } from "@mui/icons-material";

export interface CartProduct {
  quantity: number;
  cartIsVisible: boolean;
  products: Product[];
  totalQuantity:number
}

const initialState: CartProduct = {
  cartIsVisible: false,
  totalQuantity:0,
  products: [],
  quantity:0,

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
      const existingProduct = state.products.find(
        (item) => item.id === newProduct.id
      );
      state.totalQuantity++;
      if (!existingProduct) {
        const newItem = {...action.payload,quantity:1}
        state.products.push(newItem)
        console.log(newItem)
      }
      // else {
      //   existingProduct.quantity =;
      //   existingProduct.totalPrice = existingProduct.price + newProduct.price;
      // }
    },
    removeProductFromCart: (state, action) => {
      const id = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === id
      );
      state.totalQuantity--;
      if (existingProduct?.price === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else if (existingProduct?.price !== undefined) {
        existingProduct.price--;
        existingProduct.price =
          existingProduct.price - existingProduct.price;
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
