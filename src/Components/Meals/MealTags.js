import React from "react";

const MealTags = ({ item }) => {
  return (
    <>
      {item.category.map((tag) => (
        <span
          key={tag}
          className={
            tag === "Vegan"
              ? "tag tag--vegan"
              : tag === "Paleo"
              ? "tag tag--paleo"
              : tag === "Vegeterian"
              ? "tag tag--vegeterian"
              : ""
          }
        >
          {tag}
        </span>
      ))}
    </>
  );
};

export default MealTags;
