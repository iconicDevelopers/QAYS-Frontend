import React from "react";
import NavBar from "./Components/Header/NavBar";
import Home from "./Pages/Home";
import Service from "./Pages/Service/Service";
import Project from "./Pages/Projects/Project";
import Features from "./Pages/Features/Features";
import OurProjects from "./Pages/Projects/OurProjects";
import FaqSection from "./Pages/FAQ/FaqSection";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Service />
      <Features />
      <OurProjects />
      <Project />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;
