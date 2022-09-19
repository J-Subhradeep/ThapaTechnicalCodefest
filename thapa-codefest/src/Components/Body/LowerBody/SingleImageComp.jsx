import React from "react";
import { SingleImgCompWrapper } from "../Styles/LowerBodyStyles/SingleImgCompWrapper";

const SingleImageComp = (props) => {
  return (
    <SingleImgCompWrapper>
      <div className="main-container">
        <div className="description-of-videos">
          <p className="light-header">{props.lightHeader}</p>
          <p className="desp-header">{props.darkHeader}</p>
          <p className="description-main">{props.desc}</p>
        </div>
        <div className="video-elements">
          <img className="image-data" src={props.image} />
        </div>
      </div>
    </SingleImgCompWrapper>
  );
};

export default SingleImageComp;
