import React from "react";
import HeroSection from "./components/HeroSection";
import AboutBox from "./components/AboutBox";
import FullStack from "./components/FullStack";
import FullStack2 from "./components/FullStack2";
import FrontEnd from "./components/Frontend";
import Mobile from "./components/Mobile";
import Research from "./components/Research";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="App">
      <HeroSection/>
      <AboutBox/>
      <FullStack/>
      <FullStack2/>
      <FrontEnd/>
      <Mobile/>
      <Research/>
      <Contact/>
    </div>
  );
}

export default App;
