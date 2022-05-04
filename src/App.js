import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Meals from "./Components/Meals/Meals";
import Pricing from "./Components/Pricing/Pricing";
import TestimonialBlock from "./Components/TestimonialsBlock.js/TestimonialBlock";
import "./queries.css";
function App() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <Meals />
      <TestimonialBlock />
      <Pricing />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
