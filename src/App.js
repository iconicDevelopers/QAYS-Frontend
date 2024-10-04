import React from "react";
import NavBar from "./Components/Header/NavBar";
import Service from "./Pages/Service/Service";

import FaqSection from "./Pages/FAQ/FaqSection";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Testimonial from "./Pages/Testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Service />
      <Testimonial />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;
