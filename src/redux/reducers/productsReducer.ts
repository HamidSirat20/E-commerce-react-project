import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import Product from "../../types/Product";
import { NewProduct } from "../../types/NewProduct";
import { UpdateSingleProduct } from "../../types/UpdateSingleProduct";

interface RetrieveProducts {
  loading: boolean;
  error: string;
  products: Product[];
}
const initialState: RetrieveProducts = {
  loading: true,
  error: "",
  products: [],
};
interface Pagination {
  offset: number
  limit: number
}
export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async ({offset,limit}:Pagination) => {
    try {
      const fetchProducts = axios.get<Product[]>(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      return (await fetchProducts).data;
    } catch (e) {
      const error = e as AxiosError;
      return error.message;
    }
  }
);
export const createNewProducts = createAsyncThunk(
  "createNewProducts",
  async (product: NewProduct) => {
    try {
      const result = await axios.post(
        "https://api.escuelajs.co/api/v1/products/",
        product
      );
      return result.data;
    } catch (e) {
      const error = e as AxiosError;
      return error.message;
    }
  }
);
export const updateSingleProduct = createAsyncThunk(
  "updateSingleProduct",
  async (updateProduct: UpdateSingleProduct) => {
    const { id, update } = updateProduct;
    try {
      const result = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        update
      );
      return result.data;
    } catch (e) {
      const error = e as AxiosError;
      return error.message;
    }
  }
);
export const deleteSignleProduct = createAsyncThunk(
  "deleteSigleProduct",
  async (id: number) => {
    try {
      const result = await axios.delete(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      return result.data;
    } catch (e) {
      const error = e as AxiosError;
      return error.message;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    emptyProductList: (state) => {
      return initialState;
    },
    sortPrice: (state, action: PayloadAction<"asc" | "desc">) => {
      if (action.payload === "asc") {
        state.products.sort((a, b) => a.price - b.price);
      } else {
        state.products.sort((a, b) => b.price - a.price);
      }
    },
    sortByCategory: (state, action: PayloadAction<"asc" | "desc">) => {
      if (action.payload === "asc") {
        state.products.sort((a, b) =>
          a.category.name.localeCompare(b.category.name)
        );
      } else {
        state.products.sort((a, b) =>
          b.category.name.localeCompare(a.category.name)
        );
      }
    },
  },
  extraReducers: (build) => {
    build
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = "Cannot fetch this time, try later";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.products = action.payload;
        }
      })
      .addCase(createNewProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createNewProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = "Cannot create new product, try later";
      })
      .addCase(createNewProducts.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.products.push(action.payload);
        }
        state.loading = false;
      })
      .addCase(updateSingleProduct.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(updateSingleProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = "Cannot update the product now, try later";
      })
      .addCase(updateSingleProduct.fulfilled, (state, action) => {
        state.products.map((product) => {
          if (product.id === action.payload.id) {
              return action.payload
          }
          return product
      })
      })
      .addCase(deleteSignleProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteSignleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = "Cannot delete the product now, try later";
      })
      .addCase(deleteSignleProduct.fulfilled, (state, action) => {
        const newProducts = state.products.filter(product=> product.id !== action.payload.id)
        state.products=newProducts
        state.loading=false
      })
  },
});

const productsReducer = productsSlice.reducer;
export const { sortPrice, sortByCategory, emptyProductList } =
  productsSlice.actions
export default productsReducer;
