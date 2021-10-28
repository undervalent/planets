import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  background: transparent;
  width: 100%;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  justify-content: space-around;
  height: 46px;

  ${media.greaterThan("medium")`
  display: none ;
`}
`;

export const MenuButton = styled.button<{
  isActive: boolean;
  planetColor: string;
}>`
  display: inline-block;
  border: none;
  padding: 0.25em 0.5em;
  margin: 0;
  border-bottom: 4px solid transparent;
  border-bottom-color: ${({ isActive, color }) =>
    isActive ? color : "transparent"};
  background: none;
  color: ${({ isActive }) => (isActive ? "white" : "rgba(255,255,255,.5)")};
  font: inherit;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-transform: uppercase;
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.92857px;
`;
