import React from "react";
import "../styles/BannerStyles.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-left">
          <h2>SUMMER 2020</h2>
          <h1>NEW COLLECTION</h1>
          <p>
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
        <div className="banner-right">
          <div className="circle_2"></div>
        </div>
      </div>
      <div className="circle_1"></div>
      <div className="circle_3"></div>
    </>
  );
};

export default Banner;
