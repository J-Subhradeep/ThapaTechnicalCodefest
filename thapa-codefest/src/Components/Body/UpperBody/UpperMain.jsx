import React from "react";
import DomainSearchBox from "./DomainSearchBox";
import OurServices from "./OurServices";
import Svgs from "./Svgs";
import Webplan from "./Webplan";

const UpperMain = () => {
  return (
    <div>
      <Svgs />
      <Webplan />
      <OurServices />
      <DomainSearchBox />
    </div>
  );
};

export default UpperMain;
