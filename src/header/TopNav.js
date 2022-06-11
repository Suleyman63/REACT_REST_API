import { Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Header.css"
import { useSelector , useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import {getTotals} from "../redux/cartSlice";


const TopBar = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());

  }, [cart, dispatch]);



  const [basketCount, setBasketCount] = useState(0)

  useEffect(() => {
    let basketCount=0;

    cart.cartItems.forEach((item) => {
      basketCount += item.count  
    });
   setBasketCount(basketCount)
  }, [cart, basketCount])




  const history = useHistory();
  const handleNavClick = (eventKey) => {
    history.push(`/${eventKey}`);
  };

  return (
    <Container className="nav-top">
    <Nav 
        variant="tabs" 
        defaultActiveKey="cards" 
        onSelect={handleNavClick}>
      <Nav.Item>
        <Nav.Link className="nav-top-link" eventKey="basket"><i className="fa fa-shopping-cart mr-3 fs-3"></i>
        <span className="basket-length">{cartTotalQuantity}</span>
        </Nav.Link>
      </Nav.Item>
        <Nav.Item>
        <Nav.Link className="nav-top-link" eventKey="login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-top-link" eventKey="register">Register</Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
  );
};



export default TopBar
