import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;

  ${media.greaterThan("medium")`
    display: none ;
`}
`;
