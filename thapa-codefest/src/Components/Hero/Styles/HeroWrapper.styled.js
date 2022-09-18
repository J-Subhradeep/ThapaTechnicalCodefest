import styled from "styled-components";
export const HeroSectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    145deg,
    #0000ffb5 0%,
    rgba(103, 61, 230, 1) 20%,
    rgba(77, 29, 223, 1) 70%,
    rgba(0, 1, 255, 1) 100%
  );
  .hero-grid-main {
    width: 100%;
    height: 100%;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: auto auto;
    .hero-left-main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .left-heading {
        position: absolute;
        width: 500px;
        font-size: 20px;
        /* text-align: center; */
        text-transform: capitalize;
        color: white;
      }
      .count-up {
        /* margin-top: 300px; */
        padding-top: 30px;
        color: #e2f893;
        /* position: absolute; */
      }
      .get-started {
        background-color: white;
        border-radius: 30px;
        width: 250px;
		height: 50px;
		margin-top: 30px;
      }
    }
  }
`;
