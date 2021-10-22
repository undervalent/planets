import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  ${media.greaterThan("medium")`
  display: none;
`}

  .toggle-button:focus {
    outline: none;
  }

  .toggle-button__line {
    width: 30px;
    height: 2px;
    background: white;
  }
`;
