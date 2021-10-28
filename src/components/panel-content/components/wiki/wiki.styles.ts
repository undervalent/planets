import styled from "styled-components";
import media from "styled-media-query";
export const WikiWrapper = styled.div`
  max-width: 140px;
  margin: 10px auto 16px auto;
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

  ${media.greaterThan("medium")`
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 27px
`}
`;
