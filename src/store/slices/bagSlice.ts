import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";



const initialState: { bagProducts: Product[] } = {
    bagProducts: [],
};

export const bagSlice = createSlice({
    name: "bag",
    initialState,
    reducers: {
        addToBag: (state, action) => {
            const product = action.payload;
            state.bagProducts.push(product);

        },
        removeFromBag: (state, action) => {
            const product = action.payload;
            state.bagProducts = state.bagProducts.filter((item: Product) => item.id !== product.id);
        },
        emptyBag: state => {
            state.bagProducts = [];
        },
    },
});

export const { addToBag, removeFromBag, emptyBag } = bagSlice.actions;

export default bagSlice.reducer;
