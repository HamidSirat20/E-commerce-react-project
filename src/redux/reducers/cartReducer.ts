import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";

export interface CartItem {
  quantity: number;
  product: Product;
  totalPrice: number;
}

const initialState: {
  cartItems: CartItem[];
} = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice =
        cartItem.totalPrice + action.payload.product.price;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {

      try {
        const existingProduct = state.cartItems.find(
          (product) => product.product.id === action.payload.product.id
        );
       if(existingProduct?.quantity===1){
        const newProducts = state.cartItems.filter(
          (product) => product.product.id !== action.payload.product.id
        );
        state.cartItems = newProducts


       }
      } catch (e) {}

    },
  },
});

export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
