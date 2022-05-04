import React from "react";
import BtnMain from "../Button/BtnMain";
import BtnOutline from "../Button/BtnOutline";
import DeliveredMeals from "./DeliveredMeals";

const Hero = () => {
  return (
    <div>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <div className="hero-btn-group">
              <BtnMain />
              <BtnOutline />
            </div>
            <DeliveredMeals />
          </div>
          <div className="hero-img-box">
            <img
              src="./img/hero.png"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
