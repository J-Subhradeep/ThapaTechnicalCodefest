import styled from "styled-components";

export const SingleImgCompWrapper = styled.section`
  .main-container {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 35vw;
    margin: 40px 50px;
    padding-right: 100px;
  }
  .image-data {
    width: 50vw;
    height: auto;
  }
  .desp-header {
    font-size: 21px;
    font-weight: 800px;
    color: #271c6a;
    padding: 10px 10px;
  }
  .description-main {
    padding: 0px 10px;
    color: #727586;
  }
  .main-container img {
    padding: 5px 10px;
  }
  @media (max-width: 800px) {
    .main-container {
      text-align: center;
      width: 80vw;
    }
  }
  @media (max-width: 600px) {
    .main-container {
      text-align: center;
      width: 100vw;
      justify-content: center;
      padding: 10px;
    }
  }
`;
