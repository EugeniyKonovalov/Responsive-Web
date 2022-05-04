import React from "react";

const DeliveredMeals = () => {
  return (
    <div>
      <div className="delivered-meals">
        <div className="delivered-imgs">
          <img src="./img/customers/customer-1.jpg" alt="Customer photo" />
          <img src="./img/customers/customer-2.jpg" alt="Customer photo" />
          <img src="./img/customers/customer-3.jpg" alt="Customer photo" />
          <img src="./img/customers/customer-4.jpg" alt="Customer photo" />
          <img src="./img/customers/customer-5.jpg" alt="Customer photo" />
          <img src="./img/customers/customer-6.jpg" alt="Customer photo" />
        </div>
        <p className="delivered-text">
          <span>250,000+</span> meals delivered last year!
        </p>
      </div>
    </div>
  );
};

export default DeliveredMeals;
