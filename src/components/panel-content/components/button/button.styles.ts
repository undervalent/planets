import styled from "styled-components";

interface PlanetButtonProps {
  planetColor: string;
}

export const PlanetButton = styled.button<PlanetButtonProps>`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  color: white;
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  padding: 12px 28px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: ${({ planetColor }) => planetColor};
  width: 100%;
  height: 48px;
  text-align: left;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  cursor: pointer;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .planet-button__displayNumber {
    font-size: 12px;
    line-height: 25px;
    color: white;
    opacity: 0.5;
    padding-right: 26px;
  }
  &:hover {
    background: #38384f;
    border-color: #38384f;
  }
`;
