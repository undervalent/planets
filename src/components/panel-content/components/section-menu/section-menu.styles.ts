import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.aside`
  display: none;

  ${media.greaterThan("medium")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
`}
`;
