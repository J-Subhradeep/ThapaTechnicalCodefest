import { border } from "@mui/system";
import React, { useState } from "react";
import { DomainSearchBoxWrapper } from "../Styles/UpperBodyStyles/DomainSearchBoxWrapper.styled";
import { Button } from "@mui/material";
const DomainSearchBox = () => {
  const [value, setvalue] = useState("");
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
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="search-bar"
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            style={
              value != ""
                ? { border: "0.5px solid #2f1c6a", }
                : { border: "0.2px solid #72757645" }
            }
          />
          <Button variant="contained" className="submit-btn" sx={
              value != ""
                ? { background:"#673DE6","&:hover":{background:"#5230b8",boxShadow:"0px 0px 5px #673de649",} }
                : { background: "#727576","&:hover":{background:"#727576",boxShadow:"0px 0px 5px #72757649",}}
            }>
            Submit
          </Button>
        </div>
      </DomainSearchBoxWrapper>
    </>
  );
};

export default DomainSearchBox;
