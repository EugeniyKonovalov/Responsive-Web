import React from "react";
import { diet } from "../../content";
const DietList = () => {
  return (
    <>
      <h3 className="heading-tertiary">Works with any diet:</h3>
      <ul className="list">
        {diet.map((item) => (
          <li key={item} className="list-item">
            <ion-icon name="checkmark-outline"></ion-icon>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DietList;
