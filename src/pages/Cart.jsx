import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import {removeformCart} from "../addToCartSlice";
import {qtyplus,qtyminus} from "../addToCartSlice";
import"./Cart.css";
const Cart = (e) => {
    const dispatch = useDispatch();
    const remove =(id)=>{
        console.log(id);
        dispatch(removeformCart(id))
  
      }
      const qnty =(id)=>{
        dispatch(qtyplus(id))
      }
      const qntyDec =(id)=>{
        dispatch(qtyminus(id))
      }
    // Access the cart data from the Redux store
    const cartItems = useSelector((state) => state.cart.cart);

    let sno = 0; 
    let sum = 0;
    const ans = cartItems.map((item, idx,e) => {
     
      
        sno = idx + 1; // idx + 1 will give you the correct sno
        sum = sum + item.price;
        return (
            <tr key={item.id}>
              <td>{sno}</td>
              <td>{item.name}
                
              </td>
              <td>{item.price}</td>
              <td><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>
                <button onClick={() => qnty(item.id)}>
                   <span style={{width:"10px"}}>+</span> 
                   <br />{item.qnty}</button>
                    
                <button style={{marginLeft:"75px",marginTop:"5px"}}onClick={() => remove(item.id)} className="btn btn-danger">Remove</button>
                <button style={{marginLeft:"25px"}}
                onClick={() => qntyDec(item.id)}>
                    <span>-</span><br />{item.qnty}</button>
                </td>
               
                <td>
                    {item.price * item.qnty}
                </td>
            </tr>
        );
    });

    return (
        <div id="cart-container">
          <div className="inn">
          <h2 >Cart Page</h2>
            <h2 >Total Items In Cart: {sno}</h2>
            <h2 >Total Amount: {sum}</h2>
          </div>
            <Table striped bordered hover style={{width:"1000px" , height:"auto",marginLeft:"auto",marginRight:"auto"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name
                            
                        </th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
           
        </div>
    );
};

export default Cart;
