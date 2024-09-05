import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./addToCartSlice";
 const store = configureStore({
    reducer: {
        cart: addToCartReducer
    }
})
export default store