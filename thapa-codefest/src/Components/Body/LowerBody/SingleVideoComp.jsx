import React from "react";
import { SingleVideoCompWrapper } from "../Styles/LowerBodyStyles/SingleVideoCompWrapper";
const SingleVideoComp = () => {
  return (
  <SingleVideoCompWrapper>
    <div className="description-of-videos">
        <b className="light-header"></b>
        <b className="desp-header"></b>
        <p className="description-main"></p>
    </div>
    <div className="video-elements">
    <video className="video-data" muted="muted" preload="metadata" width="100%" height="auto" data-poster="https://assets.hostinger.com/images/homepage2020/easy-to-setup-2039362cc2.png" poster="https://assets.hostinger.com/images/homepage2020/easy-to-setup-2039362cc2.png"><source src="https://assets.hostinger.com/videos/homepage2020/easy-to-set-up-6e4616539f.mp4" type="video/mp4"></video>
    </div>
  </SingleVideoCompWrapper>
  );
};

export default SingleVideoComp;
