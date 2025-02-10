import React from "react";
import HeroSection from "./components/HeroSection";
import AboutBox from "./components/AboutBox";
import FullStack from "./components/FullStack";
import FrontEnd from "./components/FrontEnd";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutBox/>
      <FullStack/>
      <FrontEnd/>
    </div>
  );
}

export default App;
