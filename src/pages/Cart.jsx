import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Cart = () => {
    const Data = useSelector((state)=>state.addToCart.cart);
    console.log(Data)
  return (
    <>
    </>
  )
}

export default Cart
