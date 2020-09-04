import React from 'react';
import './App.scss';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Intro from './components/Intro.js';
import Program from './components/Program.js';
import Data from './components/Data.js';
// import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* katherine */}
    <Header />
    {/* Mesbah */}
    <Hero />
    {/* Mesbah */}
    <Intro />
    {/* katherine */}
    <Program />
    {/* TBD */}
    <Data />
    </>
  );
}

export default App;
