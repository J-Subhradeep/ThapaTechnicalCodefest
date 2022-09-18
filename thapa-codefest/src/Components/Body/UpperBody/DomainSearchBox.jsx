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
        <div class="search-container">
          <input type="text" placeholder="Search.." name="search" className="search-bar"/>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </DomainSearchBoxWrapper>
    </>
  );
};

export default DomainSearchBox;
