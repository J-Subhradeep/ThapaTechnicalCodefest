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
  contain: content;
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
        text-transform: capitalize;
        color: white;
      }
      .count-up {
        /* margin-top: 300px; */
        padding-top: 30px;
        font-size: 15px;
        font-weight: 600;
        color: #ffffff;
        /* position: absolute; */
      }
      .get-started {
        background-color: red;
        background-image: linear-gradient(
          145deg,
          #3faae7 0%,
          #468ef1 2%,
          rgba(255, 0, 202, 1) 100%
        );
        border-radius: 30px;
        width: 250px;
        height: 50px;
        margin-top: 30px;
        background-size: 300%;
        transition: all 0.5s;
        background-position: center;
        color: white;
        &:hover {
          background-position-x: -40px;
          color: #00e1ff;
          text-shadow: 1px 1px 2px #00e1ff;
          box-shadow: 3px 0 3px #00e1ff, 0 -3px 3px #00e1ff, -3px 0 3px #00e1ff,
            0 3px 3px #00e1ff;
          width: 260px;

          transition: all 0.5s;
        }
      }
      .money-back {
        position: absolute;
        margin-top: 10px;
        font-size: 13px;

        display: flex;
        align-items: center;
        /* left: ; */
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .hero-grid-main {
      .hero-left-main {
        /* text-align: center; */
        .left-heading {
          font-size: 18px;
          /* color: green; */
          width: 400px;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .hero-grid-main {
      .hero-left-main {
        /* text-align: center; */
        .left-heading {
          font-size: 18px;
          /* color: green; */
          width: 300px;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .hero-grid-main {
      display: flex;
      .hero-left-main {
        /* text-align: center; */
        .left-heading {
          font-size: 20px;
          /* color: green; */
          width: 450px;
        }
        .get-started {
          margin-top: 45px;
        }
        .money-back {
          margin-top: 20px;
          font-size: 15px;
        }
      }
    }
  }
`;
