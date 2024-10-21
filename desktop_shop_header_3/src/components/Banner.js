/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../styles/BannerStyles.css";
import img1 from "../assets/header-3.png";
import img2 from "../assets/img2.png";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const setSlide = (index) => {
    setCurrentImage(index);
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
      }}
    >
      <button onClick={prevImage} className="banner-arrow left">
        <FaAngleLeft />
      </button>
      <div className="banner-content">
        <h1>GROSERIES DELIVERY</h1>

        <p>
          We know how large objects will act, but things on a <br />
          small scale just do not act that way.
        </p>
        <button className="start-now-btn">START NOW</button>
      </div>
      <button onClick={nextImage} className="banner-arrow right">
        <FaChevronRight />
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentImage === index ? "active" : ""}`}
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
