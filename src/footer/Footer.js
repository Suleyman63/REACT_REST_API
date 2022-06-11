import React from "react";
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom";
import "./Footer.css"


const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#414141", marginTop:20 }}
    >
      <div className="container p-4 pb-0">
        <section className="footer">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <img src={logo} alt="logo" style={{ height: 80, width:250 }} />
              <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">LINKS</h6>
              <p>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </p>
              <p>
                <Link to="/location" className="footer-link">
                  Location
                </Link>
              </p>
              <p>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3"></i> Müllerstrasse 143 13353 Berlin
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i> info@mango.com
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i> 030 234 56 88
              </p>
              <p>
                <i className="fa fa-print mr-3"></i> 030 234 56 89
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-1 mx-auto mt-3 d-grid">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Follow us
              </h6>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                role="button"
                href="https://www.facebook.com"
              >
                <i className="fa fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                role="button"
                href="https://www.twitter.com"
              >
                <i className="fa fa-twitter"></i>
              </a>
 
              <a
                className="btn btn-danger btn-floating m-1" 
                style={{ backgroundColor: "##93291E" }}              
                role="button"
                href="https://www.instagram.com"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {(new Date().getFullYear())} Copyright :
        <a className="text-white" href="https://google.com/">
           Mangorestaurant.com
        </a>
      </div>
    </footer>
  );
};


export default Footer;