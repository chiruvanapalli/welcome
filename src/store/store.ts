import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer, // use reducer here
  },
});

// Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
