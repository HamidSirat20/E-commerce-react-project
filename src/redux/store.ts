import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import usersReducers from "./reducers/usersReducer";

const store = configureStore({
    reducer:{
        productsReducer,
        usersReducers
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store