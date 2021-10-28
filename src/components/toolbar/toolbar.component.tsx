import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import { Wrapper, MenuItem } from "./toolbar.styles";
import { ToggleButton } from "./components/toggle-button";
import { allPlanets, selectedPlanet } from "../../lib/state";

export const Toolbar: React.FC = () => {
  const planets = useRecoilValue(allPlanets);
  const activePlanet = useRecoilValue(selectedPlanet);

  if (!activePlanet) return null;

  const buttons = planets.map((el) => (
    <li key={el.name}>
      <Link to={el.name}>
        <MenuItem
          planetColor={activePlanet.name === el.name ? el.color : "transparent"}
        >
          {el.name}
        </MenuItem>
      </Link>
    </li>
  ));
  return (
    <Wrapper>
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <h1>The Planets</h1>
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
