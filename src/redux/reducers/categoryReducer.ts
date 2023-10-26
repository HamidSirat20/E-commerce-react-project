import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import Product, { Category } from "../../types/Product";

export const fetchAllCategories = createAsyncThunk(
  "fetchAllCategories",
  async () => {
    try {
      const result = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      return result.data;
    } catch (e) {
      const error = e as AxiosError;
    }
  }
);
export const fetchCatProducts = createAsyncThunk(
  "fetchCatProducts",
  async (catId: number) => {
    try {
      const fetchProducts = axios.get(
        `https://api.escuelajs.co/api/v1/categories/${catId}/products`
      );
      return (await fetchProducts).data;
    } catch (e) {
      const error = e as AxiosError;
    }
  }
);

const initialState: {
  categoryProducts: Product[] | null;
  categories: Category[] | null;
  error: string;
  loading: boolean;
  success: boolean;
} = {
  categoryProducts: [],
  categories: [],
  error: "",
  loading: false,
  success: false,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchAllCategories.pending, (state) => {
        state.error = "";
        state.loading = true;
        state.categories = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError) {
          return state;
        } else {
          state.categories = action.payload;
        }
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        if (action.payload instanceof AxiosError) {
          state.error = action.payload.message;
        } else {
          state.categories = null;
        }
      })
      .addCase(fetchCatProducts.fulfilled, (state, action) => {
        if (action.payload instanceof AxiosError) {
          return state;
        } else {
          state.categoryProducts = action.payload;
          state.success = true;
        }
      });
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
