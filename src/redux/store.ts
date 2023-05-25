import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import usersReducers from "./reducers/usersReducer";
import cartReducer from "./reducers/cartReducer";
import sliderReducer from "./reducers/sliderReducer";
import categoryReducer from "./reducers/categoryReducer";
import testCartReducer from "./reducers/cartReducer";
import drawerReducer from "./reducers/drawerReducer";

const store = configureStore({
  reducer: {
    productsReducer,
    usersReducers,
    cartReducer,
    sliderReducer,
    categoryReducer,
    drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
