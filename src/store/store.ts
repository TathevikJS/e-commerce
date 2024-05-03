import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./slices/bagSlice";
import productReducer from "./slices/productSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        bag: bagReducer,
        products: productReducer,
        user: userSlice
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch