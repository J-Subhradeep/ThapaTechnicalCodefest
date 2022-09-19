import styled from "styled-components";
export const SingleVideoCompWrapper = styled.section`
  .main-container,
  .main-container2 {
    padding: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin: 50px;
    text-align: justify;
  }
  .description-of-videos {
    width: 40vw;
    padding: 0px 50px;
  }
  .video-data {
    width: 50vw;
    height: auto;
    padding: 0px 30px;
  }
  .light-header {
    opacity: 0.6;
    font-weight: 700;
    font-size: 14px;
    color: #727586;
    letter-spacing: 1.3pt;
    padding: 5px 0px;
  }
  .desp-header {
    color: #271c6a;
    font-size: 34px;
    font-weight: 900px;
    margin: 15px 0px 20px;
  }

  .description-main {
    font-size: 15px;
    line-height: 20px;
    color: #727586;
  }
  @media (max-width: 820px) {
    .main-container {
      flex-direction: column;
      text-align: center;
      margin-bottom: 0px;
    }
    .main-container2 {
      flex-direction: column-reverse;
      text-align: center;
      margin-bottom: 0px;
    }
    .description-of-videos,
    .video-data {
      width: 70vw;
    }
  }
  @media (max-width: 700px) {
    .description-of-videos,
    .video-data {
      width: 85vw;
    }
  }
  @media (max-width: 600px) {
    .description-of-videos,
    .video-data {
      margin: 20px 20px;
      width: 100vw;
    }
  }
`;
