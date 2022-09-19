import React from "react";
import SingleVideoComp from "./SingleVideoComp";
import { Videodata } from "../Static/Js/videos";
import { Imagedata } from "../Static/Js/images";
import SingleImageComp from "./SingleImageComp";
import ThirtyDayReturn from "./ThirtyDayReturn";
import styled from "styled-components";

const LowerMain = () => {
  const LowerDivWrapper = styled.section`
    .img-div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100vw;
    }
    .img-left {
      width: 50vw;
      height: 100%;
    }
    @media (max-width: 800px) {
      .img-div{
        flex-direction: column-reverse;
        text-align: center;
      }
    }
  `;
  return (
    <>
      <LowerDivWrapper>
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
                link={data.link}
              />
            );
          })}
        </div>
        <p style={{ textAlign: "center", fontSize: "34px", color: "#271C6A" }}>
          <b>User-Friendly Control Panel</b>
        </p>
        <div
          className="img-div"
          // style={{
          //   display: "flex",
          //   justifyContent: "space-around",
          //   alignItems: "center",
          //   width: "100vw",
          // }}
        >
          <div className="img-left">
            <video
              className="d-block d-md-none lazy-load-image lazy-loaded-srcset"
              width="100%"
              height="auto"
              muted
              loop
              autoPlay
            >
              <source
                src="https://assets.hostinger.com/videos/homepage2020/user-friendly-cp-2020-7ab2c70b24.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            {Imagedata.map((data, index) => {
              return (
                <SingleImageComp
                  darkHeader={data.darkHeader}
                  image={data.image}
                  desc={data.desc}
                />
              );
            })}
          </div>
        </div>
        <ThirtyDayReturn />
      </LowerDivWrapper>
    </>
  );
};

export default LowerMain;
