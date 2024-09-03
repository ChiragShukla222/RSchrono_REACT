import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const addToCart = ({

    name:"addcart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCartData:(state,action)=>{
            const mycart = state.cart.filter((key)=>{
                if(key.id==action.payload.id){
                    return true
                }
            })
            if(mycart.length==0){
                alert("add somethingng")
            }
        }
    }
})

export default addToCart.reducer;
export const{addCartData} = addToCart.actions;
