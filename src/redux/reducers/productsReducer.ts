import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import axios, { AxiosError } from "axios";
import { access } from "fs";

const initialProducts: Product[] = [{
  id: 4,
  title: "Handmade Fresh Table",
  price: 687,
  description: "Andy shoes are designed to keeping in...",
  category: {
    id: 5,
    name: "Others",
    image: "https://placeimg.com/640/480/any?r=0.591926261873231"
  },
  images: [
    "https://placeimg.com/640/480/any?r=0.9178516507833767",
    "https://placeimg.com/640/480/any?r=0.9300320592588625",
    "https://placeimg.com/640/480/any?r=0.8807778235430017"
  ]
}]//it has an initial value for test puspose. 

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const fetchProducts = axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      return (await fetchProducts).data
    } catch (e) {
      const error = e as AxiosError
      console.log(error.message)
    }
  }
)
const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    createNewProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    },
    updateProduct: (state, action: PayloadAction<Product[]>) => {
      return action.payload
    }
  },
  extraReducers: (build) => {
    build.addCase(fetchAllProducts.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload
      }
    })
  }

})

const productsReducer = productsSlice.reducer
export default productsReducer