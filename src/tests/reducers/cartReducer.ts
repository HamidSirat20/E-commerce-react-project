import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import { Category } from "@mui/icons-material";

interface CartProduct {
  quantity: number;
  totalPrice:number
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}
interface Cart {
  cartIsVisible: boolean;
  products: CartProduct[];
}
const initialState: Cart = {
  cartIsVisible: false,
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
      const existingProduct = state.products.find(
        (c) => c.id === newProduct.id
      );
      if (!existingProduct) {
        state.products.push({
          quantity: 0,
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          description: newProduct.description,
          images: newProduct.images,
          totalPrice:newProduct.price
        });
      } else {
        existingProduct.quantity++
        existingProduct.totalPrice=existingProduct.price + newProduct.price
      }
    },
    removeProductFromCart:(state,action) => {
        const id = action.payload
        const existingProduct = state.products.find( c => c.id===id);
        if(existingProduct?.quantity===1){
            state.products = state.products.filter(product=>product.id !==id)
        }else if(existingProduct?.quantity !==undefined){
           existingProduct.quantity--
        }
    }
  },
});

const cartReducer = cartSlice.reducer;
const { toggleShoppingCart } = cartSlice.actions;
export default cartReducer;
