import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            console.log(action.payload)
        },
        removeformCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToCart ,removeformCart} = addToCartSlice.actions;
export default addToCartSlice.reducer;