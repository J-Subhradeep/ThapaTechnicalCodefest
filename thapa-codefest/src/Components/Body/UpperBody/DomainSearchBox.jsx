import React from "react";
import { DomainSearchBoxWrapper } from "../Styles/UpperBodyStyles/DomainSearchBoxWrapper.styled";

const DomainSearchBox = () => {
  return (
    <>
      <DomainSearchBoxWrapper>
        <b>Find the perfect domain name</b>
        <p>
          Enter domain name of your choice and pick any extension name on the
          next step (choose between .in, .com, .online, .live, .store, .info and
          many more
        </p>
        
      </DomainSearchBoxWrapper>
    </>
  );
};

export default DomainSearchBox;
