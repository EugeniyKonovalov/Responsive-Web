import React from "react";
import { features } from "../../content";

const Features = () => {
  return (
    <>
      {features.map((item) => (
        <div className="feature" key={item.title}>
          <ion-icon name={item.iconName}></ion-icon>
          <p className="feature-title">{item.title}</p>
          <p className="feature-text">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default Features;
