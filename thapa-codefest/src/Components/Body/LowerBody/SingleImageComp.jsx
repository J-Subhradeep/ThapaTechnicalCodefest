import React from "react";
import { SingleImgCompWrapper } from "../Styles/LowerBodyStyles/SingleImgCompWrapper";

const SingleImageComp = (props) => {
  return (
    <SingleImgCompWrapper>
      <div className="main-container">
        <div className="description-of-videos">
          <img src={props.image} />
          <p className="desp-header">{props.darkHeader}</p>
          <p className="description-main">{props.desc}</p>
        </div>
      </div>
    </SingleImgCompWrapper>
  );
};

export default SingleImageComp;
