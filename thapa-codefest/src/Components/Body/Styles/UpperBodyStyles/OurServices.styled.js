import styled from "styled-components";

export const ServicesWrapper = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  b {
    font-size: 34px;
    padding-bottom: 20px;
    color: #2f1c6a;
  }
  .single-service-element {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 330px;
    padding: 10px 5px;
  }
  .single-service-element p {
    font-size: 21px;
    color: #2f1c6a;
    font-weight: 800;
    padding: 10px;
  }
  .services-all-main-container {
    width: 85vw;
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    /* justify-content: ; */
  }

  @media (max-width: 900px) {
    .single-service-element {
      width: 270px;
    }
  }
  @media (max-width: 700px) {
    .single-service-element {
      width: 245px;
    }
  }
  @media (max-width: 600px) {
    .single-service-element {
      width: 100%;
    }
    .services-all-main-container {
      justify-content: flex-start;
    }
  }
`;
