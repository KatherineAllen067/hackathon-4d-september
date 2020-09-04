import React from "react";
import "./App.scss";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Intro from "./components/Intro.js";
import Program from "./components/Program.js";
import Data from "./components/Data.js";
import Mobile from "./components/Mobile";

function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Program />
      <Mobile />
      <Data />
    </>
  );
}

export default App;
