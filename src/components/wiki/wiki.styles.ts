import styled from "styled-components";

export const WikiWrapper = styled.section`
  max-width: 140px;
  margin: 43px auto 27px auto;
  display: flex;
  .wiki-source {
    font-size: 12px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.5);
    font-family: "Spartan", sans-serif;
    font-weight: 400;
  }
  .wikipedia-link {
    display: flex;
    margin-left: 5px;
    align-items: center;
    text-decoration: underline;
    font-size: 12px;
    line-height: 25px;
    font-family: "Spartan", sans-serif;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
  }
  .wikipedia-text {
    margin-right: 5px;
  }
`;
