import React from "react";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { FaChevronRight } from "react-icons/fa";
import "./menu-button.styles.css";

import {
  selectedPlanet,
  drawerToggleState,
  selectedSection,
} from "../../../../lib/state";
import { IPlanet } from "../../../../lib/types";

interface Props {
  planet: IPlanet;
}

export const MenuButton: React.FC<Props> = ({ planet }) => {
  const setSelectedPlanet = useSetRecoilState(selectedPlanet);
  const setDrawerToggle = useSetRecoilState(drawerToggleState);
  const resetSelectedSection = useResetRecoilState(selectedSection);

  const handleClick = () => {
    setSelectedPlanet(planet);
    setDrawerToggle(false);
    resetSelectedSection();
  };

  const iconColor = "rgba(255, 255, 255, 0.5)";
  return (
    <button className="menu-button" onClick={handleClick}>
      <span
        className="menu-button__icon"
        style={{ background: planet.color }}
      ></span>
      {planet.name}
      <div className="spacer" />
      <FaChevronRight color={iconColor} />
    </button>
  );
};
