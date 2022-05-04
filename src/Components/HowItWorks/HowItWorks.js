import React from "react";
import Step from "./Step";
import "./styles/HowItWorks.css";
// import Step01 from "./Step01";
// import Step02 from "./Step02";
// import Step03 from "./Step03";

const HowItWorks = () => {
  return (
    <div>
      <section className="section-how" id="how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            Your daily dose of health in 3 simple steps
          </h2>
        </div>
        <div className="container">
          {/* <Step01 />
          <Step02 />
          <Step03 /> */}
          <Step />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
