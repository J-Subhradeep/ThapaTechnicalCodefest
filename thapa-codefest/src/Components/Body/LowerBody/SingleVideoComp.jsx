import React from "react";
import { SingleVideoCompWrapper } from "../Styles/LowerBodyStyles/SingleVideoCompWrapper";
const SingleVideoComp = (props) => {
  return (
    <SingleVideoCompWrapper>
      {props.val % 2 == 0 ? (
        <div className="main-container">
          <div className="description-of-videos">
            <p className="light-header">{props.lightHeader}</p>
            <p className="desp-header">{props.darkHeader}</p>
            <p className="description-main">{props.desc}</p>
            <p className="link">{props.link}</p>
          </div>
          <div className="video-elements">
            <video muted loop autoPlay className="video-data ">
              <source src={props.video} type="video/mp4" />{" "}
            </video>
          </div>
        </div>
      ) : (
        <div className="main-container2">
          <div className="video-elements">
            <video muted loop autoPlay className="video-data">
              <source src={props.video} type="video/mp4" />{" "}
            </video>
          </div>
          <div className="description-of-videos">
            <p className="light-header">{props.lightHeader}</p>
            <p className="desp-header">{props.darkHeader}</p>
            <p className="description-main">{props.desc}</p>
          </div>
        </div>
      )}
    </SingleVideoCompWrapper>
  );
};

export default SingleVideoComp;
