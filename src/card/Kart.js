import React from "react";
import "./Kart.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useGetAllProductsQuery } from "../redux/productsApi";

const Kart = (props) => {
 
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();


  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    
  };
  

  return (
    <div className="container">
       {status === "success" ? (
        <div className="card-group m-2">
      {data && data?.filter((product) => 
        product.title.toLowerCase()
        .includes(props.search.toLowerCase())).map((product) => {
         const { image, id, title, category, overview, price, count} = product;
        return (
          <div key={id} className="cart-item">
            <img src={image} alt={title} className="image" />
            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <h5 className="price">{price} €</h5>
              </header>
              <h5>{category}</h5>
              <p className="item-text">{overview}</p>
              <p className="item-text">{count}</p>
              <div className="d-flex justify-content-center align-items-center">
              <button 
                    onClick={()=> handleAddToCart(product)} 
                    type="button" 
                    className="btn btn-primary mt-3">Add to Basket <i className="fa fa-shopping-cart mr-3"></i> </button>              
            </div>
            </div>
          </div>
        );
      })}
      </div>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected {error}</p>
      )}
    </div>

  );
};

  
  export default Kart;