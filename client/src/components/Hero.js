import React from "react";
import "../styles/Hero.scss";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="hero-wrap">
      <Header />
      <div className="hero-wrap__header">Local Reimagined</div>
      <div className="hero-wrap__body">Skip the Dishes, not your local</div>
      <button className="hero-wrap__order">ORDER NOW</button>
    </div>
  );
}
