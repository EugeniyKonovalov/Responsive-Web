import React from "react";
import DietList from "./DietList";
import "./styles/Meals.css";
import SampleFood from "./SampleFood";
const Meals = () => {
  return (
    <div>
      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>
        <div className="container grid grid--3-cols">
          <SampleFood />
          <div className="diets ">
            <DietList />
          </div>
        </div>
        <div className="container all-recipes">
          <a href="/" className="link">
            See all recipes &rarr;
          </a>
        </div>
      </section>
    </div>
  );
};

export default Meals;
