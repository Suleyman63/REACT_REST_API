import React from 'react'
import "./About.css"
import About1 from "../assets/images/about2.jfif"
import About2 from "../assets/images/about1.jfif"

const About = () => {
    return (
        <div class="about">
        <div class="container mt-5">
        <h1 class="subtitle">About The Mango Restaurant</h1>
        <div class="row">
        <div class="col-lg-5 col-md-8 align-self-center">
        <img class="about-img" src={About2}  alt="img" />
        <h4 class="title text-center mt-3">You can taste delicious food with us</h4>
        <p className="mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
        Lorem Ipsum.
          </p>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="about-us-details">
              <div class="section-title">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </div>
              <div class="media media-1">
                <div class="media-body">
                  <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div class="media media-1">
                <div class="media-left">
                  <img src={About1}  alt="img" className="about-img"/>
                </div>
              </div>
              <button class="btn mt-3" >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About
