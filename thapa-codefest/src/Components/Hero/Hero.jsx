import React from "react";
import { HeroSectionWrapper } from "./Styles/HeroWrapper.styled";
import CountUp from "react-countup";
import { Button } from "@mui/material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
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
              <Button className="get-started" sx={{ color: "#3dbfe6" }}>
                Get Started
              </Button>
            </div>
            <div className="money-back">
              <PriceCheckIcon
                style={{ paddingRight: "5px", fontSize: "28px" }}
              />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
        <div className="hero-right-main"></div>
      </div>
    </HeroSectionWrapper>
  );
};

export default Hero;
