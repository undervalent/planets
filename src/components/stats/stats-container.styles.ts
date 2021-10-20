import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  padding: 0 24px;
  display: block;
  ${media.greaterThan("small")`
    background: flex;
  `}
`;
