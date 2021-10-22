import React from "react";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import { Wrapper, MenuButton } from "./toolbar.styles";
import { ToggleButton } from "./components/toggle-button";
import { allPlanets, selectedPlanet, selectedSection } from "../../lib/state";
import { IPlanet } from "../../lib/types";

export const Toolbar: React.FC = () => {
  const planets = useRecoilValue(allPlanets);
  const [activePlanet, setActivePlanet] = useRecoilState(selectedPlanet);
  const resetSection = useResetRecoilState(selectedSection);

  const handleClick = (el: IPlanet) => {
    resetSection();
    setActivePlanet(el);
  };

  const buttons = planets.map((el) => (
    <li>
      <MenuButton
        onClick={() => handleClick(el)}
        color={activePlanet.name === el.name ? el.color : "transparent"}
      >
        {el.name}
      </MenuButton>
    </li>
  ));
  return (
    <Wrapper>
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <h2>The Planets</h2>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>{buttons}</ul>
        </div>
        <div className="toolbar__toggle-button">
          <ToggleButton />
        </div>
      </nav>
    </Wrapper>
  );
};
