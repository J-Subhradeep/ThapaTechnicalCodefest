import React from "react";
import { Services } from "../Static/Js/Datas";
import { ServicesWrapper } from "../Styles/UpperBodyStyles/OurServices.styled";

const OurServices = () => {
  return (
    <ServicesWrapper>
      <b>Our Services Include:</b>
      <div className="services-all-main-container">
        {Services.map((data, index) => {
          return (
            <div className="single-service-element" key={index}>
              <img height="42px" width="42px" src={data.icon} alt="" />
              <p className="single-service-description">{data.data}</p>
            </div>
          );
        })}
      </div>
    </ServicesWrapper>
  );
};

export default OurServices;
