import React from "react";
import Banner1 from "../assets/images/breakfast.jpg";
import Banner2 from "../assets/images/lunch.jpg";
import Banner3 from "../assets/images/dinner.jpg";

import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";


const Banner = () => {
  const images = [
    {
      id: 1,
      image: Banner1,
      btn: "Find out more",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      interval: 1000,
    },
    {
      id: 2,
      image: Banner2,
      btn: "Find out more",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      interval: 2000,
    },
    {
      id: 3,
      image: Banner3,
      btn: "Find out more",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      interval: 3000,
    },
  ];
  return (
    <Container className="banner">
    <Carousel id="top" nextLabel="" prevLabel="">
      {images.map((data) => {
        const { id, image, btn, description, interval } = data;
        return (
          <Carousel.Item interval={interval} key={id}>
            <img className="banner-img" src={image} alt="First slide" />

            <Carousel.Caption>
              <div className="w-50 ms-5 carousel-text-box text-center mt-3">
                <div>
                  <button className="btn btn-primary text-end p-2">
                    {btn}
                  </button>
                </div>

                <p className=" m-5 carousel-desc-text fs-5">
                  {description}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
    </Container>
  );
};

export default Banner;