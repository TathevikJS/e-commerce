import { createSlice } from "@reduxjs/toolkit";
import data from '../../api/data.json';
import { Product } from "../../types/types";

interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    showFilterModal: boolean;
    selectedFilterOption: string;
}

const initialState: ProductState = {
    products: data.products,
    filteredProducts: data.products,
    showFilterModal: false,
    selectedFilterOption: "",
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        applyFilters: (state, action) => {
            const { productType } = action.payload;
            state.filteredProducts = state.products.filter(
                (product: Product) => product.product_type === productType
            );
        },
        removeFilters: (state) => {
            state.filteredProducts = state.products;
        },
        searchProduct: (state, action) => {
            const { query } = action.payload;
            state.filteredProducts = state.selectedFilterOption ? state.filteredProducts.filter((product: Product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            ) : state.products.filter((product: Product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            )
        },
        toggleModal: (state) => {
            state.showFilterModal = !state.showFilterModal;
        },
        setSelectedFilterOption: (state, action) => {
            state.selectedFilterOption = action.payload;
        }
    },
});

export const { applyFilters, removeFilters, searchProduct, toggleModal, setSelectedFilterOption } = productSlice.actions;

export default productSlice.reducer;
