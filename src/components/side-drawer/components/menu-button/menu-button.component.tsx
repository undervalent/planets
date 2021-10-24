import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./menu-button.styles.css";

import { IPlanet } from "../../../../lib/types";

interface Props {
  planet: IPlanet;
}

export const MenuButton: React.FC<Props> = ({ planet }) => {
  const iconColor = "rgba(255, 255, 255, 0.5)";
  return (
    <div className="menu-button">
      <span
        className="menu-button__icon"
        style={{ background: planet.color }}
      ></span>
      {planet.name}
      <div className="spacer" />
      <FaChevronRight color={iconColor} />
    </div>
  );
};
