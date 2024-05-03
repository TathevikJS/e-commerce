import { createSlice } from "@reduxjs/toolkit";
import { Product, User } from "../../types/types";


interface UserState {
    user: User
    showProfileModal: boolean;
    shoppingHistory: Product[][];
}

const initialState: UserState = {
    user: {
        username: 'Tathevik Hayrapetyan',
        about: 'Software Engineer',
        image: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'
    },
    showProfileModal: false,
    shoppingHistory: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editProfileInfo: (state, action) => {
            const { username, about, image } = action.payload;
            state.user.username = username;
            state.user.about = about;
            state.user.image = image;
        },
        toggleModal: (state) => {
            state.showProfileModal = !state.showProfileModal;
        },
        addToShoppingHistory: (state, action) => {
            const products = action.payload;
            state.shoppingHistory.push(products);
        }
    },
});

export const { editProfileInfo, toggleModal, addToShoppingHistory } = userSlice.actions;

export default userSlice.reducer;
