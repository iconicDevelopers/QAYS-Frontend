import React, { useState } from "react";
import NavBar from "./Components/Header/NavBar";
import Service from "./Pages/Service/Service";
import FaqSection from "./Pages/FAQ/FaqSection";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Testimonial from "./Pages/Testimonial/Testimonial";
import AboutUs from "./Pages/Aboutus/AboutUs";
import "./App.css"; 

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app-container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
      <Service theme={theme} />
      <Testimonial theme={theme} />
      <AboutUs theme={theme} />
      <FaqSection theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
