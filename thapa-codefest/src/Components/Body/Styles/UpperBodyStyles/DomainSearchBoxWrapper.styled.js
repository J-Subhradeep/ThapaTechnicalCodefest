import styled from "styled-components";

export const DomainSearchBoxWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: aliceblue;
  padding: 30px;
  b {
    font-size: 31px;
    color: #2f1c6a;
    padding: 10px;
  }
  p {
    width: 690px;
    text-align: center;
    color: #2f1c6a;
    padding: 10px;
  }
  .search-container {
    margin-top: 20px;
    box-shadow: 0px 0px 10px #301c6a37;
    border-radius: 30px;
  }
  .search-container .search-bar {
    width: 500px;
    padding: 12px 170px 12px 20px;
    outline: none;
    border: 0.5px solid #72757654;
    border-radius: 30px 0px 0px 30px;
    font-size: 16px;

    /* margin-left: 5px; */
  }
  .search-container .submit-btn {
    width: 170px;
    padding: 8px 15px;
    margin-top: -4px;
    border: 0.5px solid grey;
    color: white;
    /* background: ; */
    border-radius: 30px;
    margin-left: -20px;
    font-size: 16px;
    font-weight: 700px;
  }
  @media (max-width: 750px) {
    .search-container .submit-btn,
    .search-container .search-bar {
      width: 80vw;
      margin: 5px;
    }
    .search-container .search-bar {
      border-radius: 30px;
    }
    .search-container {
      width: 100vw;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 20px;
      box-shadow: 0px 0px 0px #301c6a37;
      border-radius: 30px;
    }
    p {
      width: 80vw;
      font-size: 14px;
    }
    b {
      font-size: 25px;
    }
  }
`;
