import React from "react";
import logo from "../assets/logo.jpg"
import clock from "../assets/clock.png"
import phone from "../assets/phone.png"
import { Container, Nav } from "react-bootstrap";
import "./Header.css"



const MiddleNav = () => {
  return (
    <Container className="middle-navbar">
      <Nav>
           <div>
                <img className="logo" src={logo} alt="logo" />
                <span className="middle-navbar-header mt-4" >MANGO</span>  
           </div>

           <div className="d-flex justify-content-end align-items-center mx-5">
                <img src={phone} alt="phone" className="img-phone"/>
                <p className="m-2">Call To Us:</p>
                <p className="m-2">030 255 25 25</p>
                <img src={clock} alt="clock" className="img-clock"/>
                <p className="m-2">Open Time:</p>
                <p className="m-2">Mon-Sat (10 AM - 23 PM)</p>
          </div>
      </Nav> 
    </Container>
  );
};

export default MiddleNav;
