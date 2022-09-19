import React from "react";
import LowerMain from "../Body/LowerBody/LowerMain";
import Main from "../Body/Main";
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
        <LowerMain />
      </div>
    </>
  );
};

export default Landing;
