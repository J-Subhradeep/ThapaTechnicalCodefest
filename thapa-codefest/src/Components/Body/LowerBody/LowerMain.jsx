import React from "react";
import SingleVideoComp from "./SingleVideoComp";
import { Videodata } from "../Static/Js/videos";
import { Imagedata } from "../Static/Js/images";
import SingleImageComp from "./SingleImageComp";

const LowerMain = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Videodata.map((data, index) => {
          return (
            <SingleVideoComp
              val={index}
              lightHeader={data.lightHeader}
              darkHeader={data.darkHeader}
              video={data.video}
              desc={data.desc}
            />
          );
        })}
      </div>
      <div>
        {Imagedata.map((data, index) => {
          return (
            <SingleImageComp
              val={index}
              lightHeader={data.lightHeader}
              darkHeader={data.darkHeader}
              image={data.Image}
              desc={data.desc}
            />
          );
        })}
      </div>
    </>
  );
};

export default LowerMain;
