import React from "react";
import { PlanetButton } from "./button.styles";
import { SubSection } from "../../../../lib/types";
interface Props {
  color?: string;
  displayNumber?: string;
  section: SubSection;
  clickHandler(section: SubSection): void;
}

export const Button: React.FC<Props> = ({
  children,
  color,
  displayNumber,
  clickHandler,
  section,
}) => {
  const numberDisplay = displayNumber && (
    <span className="planet-button__displayNumber">{displayNumber}</span>
  );
  const activeColor = color || "transparent";

  const handleClick = () => clickHandler(section);

  return (
    <PlanetButton planetColor={activeColor} onClick={handleClick}>
      {numberDisplay} {children}
    </PlanetButton>
  );
};

export default Button;
