import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import { Wrapper, MenuButton } from "./toolbar.styles";
import { ToggleButton } from "./components/toggle-button";
import { allPlanets, selectedPlanet } from "../../lib/state";

export const Toolbar: React.FC = () => {
  const planets = useRecoilValue(allPlanets);
  const activePlanet = useRecoilValue(selectedPlanet);

  const buttons = planets.map((el) => (
    <li key={el.name}>
      <Link to={el.name}>
        <MenuButton
          color={activePlanet.name === el.name ? el.color : "transparent"}
        >
          {el.name}
        </MenuButton>
      </Link>
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
