import React from "react";
import { PlanetButton } from "./button.styles";

interface Props {
  color?: string;
  displayNumber?: string;
}

export const Button: React.FC<Props> = ({ children, color, displayNumber }) => {
  const numberDisplay = displayNumber && (
    <span className="planet-button__displayNumber">{displayNumber}</span>
  );
  const activeColor = color || "transparent";
  return (
    <PlanetButton color={activeColor}>
      {numberDisplay} {children}
    </PlanetButton>
  );
};

export default Button;
