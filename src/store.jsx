import { configureStore } from "@reduxjs/toolkit";
import cartData from "./addToCartSlice";
const store = configureStore({
    reducer:{
        cartData
    }
})

export default store;