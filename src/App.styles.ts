import styled from "styled-components";
import media from "styled-media-query";

export const ContentWrapper = styled.div`
  max-width: 100%;

  ${media.between("medium", "large")`
      max-width: 768px ;
      margin: auto;
  `}
  ${media.greaterThan("large")`
      max-width: 1440px ;
      margin: auto;
  `}
`;
