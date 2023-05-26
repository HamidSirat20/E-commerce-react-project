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
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (cartItem) {
        state.cartItems = state.cartItems.filter(
          (product) => product.product.id !== action.payload.product.id
        );
      }
      return state;
    },
    decreaseAmount: (state, action: PayloadAction<CartItem>) => {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (product) => product.product.id !== action.payload.product.id
        );
      } else if (cartItem?.quantity) {
        cartItem.quantity--;
        cartItem.totalPrice -= action.payload.product.price;
      }
      return state;
    },
    increaseAmount: (state, action: PayloadAction<CartItem>) => {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice += action.payload.product.price;
      }
      return state;
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
});

export const { addToCart, removeFromCart, increaseAmount, decreaseAmount,clearCart} =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
