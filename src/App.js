import React from "react";
import NavBar from "./Components/Header/NavBar";
import Service from "./Pages/Service/Service";

import FaqSection from "./Pages/FAQ/FaqSection";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Testimonial from "./Pages/Testimonial/Testimonial";
import ContactUs from "./Pages/Conatctus/ContactUs";
import AboutUs from "./Pages/Aboutus/AboutUs";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />

      <Service />
      <Testimonial />
      <AboutUs />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;
