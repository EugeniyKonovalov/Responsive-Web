import React from "react";

const FeaturedIn = () => {
  return (
    <div>
      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src="./img/logos/techcrunch.png" alt="Techcrunch logo" />
            <img
              src="./img/logos/business-insider.png"
              alt="Business Insider logo"
            />
            <img
              src="./img/logos/the-new-york-times.png"
              alt="The New York Times logo"
            />
            <img src="./img/logos/forbes.png" alt="Forbes logo" />
            <img src="./img/logos/usa-today.png" alt="USA Today logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedIn;
