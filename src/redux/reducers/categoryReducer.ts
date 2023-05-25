import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Product, { Category } from "../../types/Product";

// export const fetchAllProductsCateg = createAsyncThunk(
//     "fetchAllProductsCateg",
//     async (categ:Category) => {
//       try {
//         const fetchProducts = axios.get<Product[]>(
//           `https://api.escuelajs.co/api/v1/products`
//         );
//         const filterCat= (await fetchProducts).data.filter(cat=>cat.category.name===categ.name)
//         return await filterCat;
//       } catch (e) {
//         const error = e as AxiosError;
//         return error.message;
//       }
//     }
//   );
export const fetchAllCategories = createAsyncThunk('fetchAllCategories',
async () => {
    try {
        const result = await axios.get('https://api.escuelajs.co/api/v1/categories');
        return result.data
    } catch (e) {
        const error = e as AxiosError
    }
})
const initialState:Category[] =[]
export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    return state
                } else {
                    return action.payload
                }
            })

    },
})

const categoryReducer = categorySlice.reducer
export default categoryReducer
