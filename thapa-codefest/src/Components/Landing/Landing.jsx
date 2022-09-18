import React from "react";
import UpperMain from "../Body/UpperBody/UpperMain";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Landing = () => {
  return (
    <>
      <div
        className="main-page"
        onScroll={() => {
          console.log("scroll");
        }}
      >
        <Navbar />
        <Hero />
        <UpperMain />
      </div>
    </>
  );
};

export default Landing;
