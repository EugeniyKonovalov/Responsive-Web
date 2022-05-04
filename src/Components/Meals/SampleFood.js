import React from "react";
import MealTags from "./MealTags";
import { food } from "../../content";

const SampleFood = () => {
  return (
    <>
      {food.map((item) => (
        <div key={item.title} className="meal">
          <img className="meal-img" src={item.imgUrl} alt={item.title} />
          <div className="meal-content">
            <div className="meal-tags">
              <MealTags item={item} />
            </div>
            <p className="meal-title">{item.title}</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon name="flame-outline"></ion-icon>
                <span>
                  <strong>{item.calories}</strong> calories
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon name="restaurant-outline"></ion-icon>
                <span>
                  NutriScore &reg; <strong>{item.nutriScore}</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>{item.rating}</strong> rating ({item.reviews})
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default SampleFood;
