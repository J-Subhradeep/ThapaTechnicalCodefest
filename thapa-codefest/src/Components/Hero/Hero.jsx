import React from "react";
import { HeroSectionWrapper } from "./Styles/HeroWrapper.styled";
import CountUp from "react-countup";
import { Button } from "@mui/material";
const Hero = () => {
  return (
    <HeroSectionWrapper>
      <div className="hero-grid-main">
        <div className="hero-left-main">
          <div className="left-heading">
            <h1>Everything you need to create your website</h1>
            <div className="count-up">
              <span>
                Join{" "}
                <CountUp
                  start={1000000}
                  end={1278620}
                  duration={2}
                  separator=","
                />{" "}
                website owners who are building their businesses online.
              </span>
            </div>
            <div>
              <Button className="get-started">Get Started</Button>
            </div>
          </div>
        </div>
        <div className="hero-right-main"></div>
      </div>
    </HeroSectionWrapper>
  );
};

export default Hero;
