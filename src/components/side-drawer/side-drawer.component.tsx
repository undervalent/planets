import React from "react";
import { useRecoilValue } from "recoil";
import { Wrapper } from "./side-drawer.styles";
import { MenuButton } from "./components";
import { allPlanets, drawerToggleState } from "../../lib/state";
import { IPlanet } from "../../lib/types";

export const SideDrawer: React.FC = () => {
  const planets = useRecoilValue(allPlanets);
  const isDrawerOpen = useRecoilValue(drawerToggleState);
  const dataButtons = planets.map((planet: IPlanet) => (
    <li key={planet.name}>
      <MenuButton planet={planet} />
    </li>
  ));
  return (
    <Wrapper>
      <nav className={`side-drawer ${isDrawerOpen ? "open" : ""}`}>
        <h1 className="side-drawer__header">The Planets</h1>
        <ul>{dataButtons} </ul>
      </nav>
    </Wrapper>
  );
};

export default SideDrawer;
