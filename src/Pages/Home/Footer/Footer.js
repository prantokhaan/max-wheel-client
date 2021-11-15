import React from "react";
import './Footer.css'

const Footer = () => {
  
  return (
    <div>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>
              Max Wheel exists to create a world where shopping for a car is uplifting.
              Our digital automotive marketplace helps car shoppers consider
              choices from every angle—all with a clear view of what’s a great
              deal.
            </p>
            
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Dhaka, Bangladesh</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+8801800000000</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">contact@maxwheel.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required />
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">
            Created By <a href="https://www.facebook.com/praan.too/">Pranto Khan</a>{" "}
            |{" "}
          </span>
          <span className="far fa-copyright"></span>
          <span> 2021 All rights reserved.</span>
        </center>
      </div>
    </div>
  );
};

export default Footer;
