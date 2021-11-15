import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <div className="newsletter section">
        <div className="newsletter-bg">
          <div className="newsletter-container container">
            <h2 className="section-title newsletter-title">
              {" "}
              Subscribe to Our Newsletter
            </h2>
            <p className="newsletter-description">
              Subscribe to our newsletter and get a special 30% discount.
            </p>

            <form action="" className="newsletter-form">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="newsletter-input"
              />

              <button className="subscribe-button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
