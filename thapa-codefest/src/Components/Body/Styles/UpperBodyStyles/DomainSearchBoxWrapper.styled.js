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
  .search-container{
    width:600px; 
  }
  .search-container .search-bar{
    width: 500px;
    padding: 10px;
  }
  .search-container .submit-btn{
    width: 100px;
    padding: 10px;

  }
`;
