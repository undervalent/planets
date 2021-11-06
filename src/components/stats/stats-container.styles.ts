import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: block;

  ${media.greaterThan("medium")`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding: 0;
    margin: 0 20px;
`}
  ${media.greaterThan("large")`
  margin-top: 20px;
`}
`;
