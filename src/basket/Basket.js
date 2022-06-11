import {useHistory} from 'react-router-dom'
import "./Basket.css"
import {useEffect} from 'react';

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/cartSlice";



const Basket = () => {
const cart = useSelector((state) => state.cart);



const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());

  }, [cart, dispatch]);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };



  const history = useHistory();
  const handleLoginClick = () => {
    history.push(`login`);
  };


  const handleProceedClick = () => {
    history.push(`/`);
  };


    return (
        <div className="container">
        <div className="container-fluid mt-5">
            <div className="row text-center">
            <div className="basket-header">
                  <div>
                  <h4 className="text-center">BASKET ITEM</h4>
                  <h5 style={{float:"right"}}>Total Basket Price : {cart.cartTotalAmount}</h5> 
                  </div>

            <div className="basket-btn d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn mt-2" onClick={handleLoginClick}>BUY NOW</button>
            <button className="btn mt-2" onClick={handleProceedClick}>PROCEED TO CHECK</button>
            <button className="btn mt-2" onClick={()=> handleClearCart()}>Delete All</button>                 
            </div> 
            </div> 
            
            {cart.cartItems && cart.cartItems.map((cartItem) => {
             const { image, id, title, category, overview, price} = cartItem;
                
                return (
                    <div key={id} className="basket-item">
                    <img src={image} alt={title} className="image" />
                    <div className="item-info">
                      <header>
                        <h5>{title}</h5>
                        <h5 className="price">{price} €</h5>
                      </header>
                      <h6>{category}</h6>
                      <p className="item-text">{overview} </p>
                      <p className="item-text">Count : {cartItem.cartQuantity} </p>
                      <p className="item-text">Price : {cartItem.price * cartItem.cartQuantity}</p>
                  
                            <div className="d-flex justify-content-center align-items-center">
                                <button 
                                onClick={()=> handleDecreaseCart(cartItem)} 
                                type="button" 
                                className="btn btn-md m-2"
                                >-</button>
                              
                                <button 
                                onClick={()=> handleAddToCart(cartItem)} 
                                type="button" 
                                className="btn btn-md m-2"
                                >+</button>
                                <button 
                                onClick={()=> handleRemoveFromCart(cartItem)} 
                                type="button" 
                                className="btn btn-md m-2"
                                >Delete <i className="fa fa-trash mr-3"></i></button>
                                  
                           </div>
                        </div>
                    </div>
        );
      })}
               
        </div>
         </div>
         </div>
    )
}


export default Basket;
