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
            alert("Item added to cart")
        },
        removeformCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        qtyplus:(state,action)=>{
            for(let i = 0; i < state.cart.length; i++){
                if(state.cart[i].id === action.payload){
                state.cart[i].qnty += 1;
                }
            }
            alert("+++")
        },
        qtyminus:(state,action)=>{
            for(let i =0 ; i <state.cart.length;i++){
                if(state.cart[i].id === action.payload){
                    if(state.cart[i].qnty > 1){
                        state.cart[i].qnty -= 1;
                    }
                }
            }
        }
    },
});

export const { addToCart ,removeformCart,qtyplus,qtyminus} = addToCartSlice.actions;
export default addToCartSlice.reducer;