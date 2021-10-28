import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedPlanet, selectedSection } from "../../lib/state";
import { Wrapper, MenuButton } from "./tab-menu.styles";

export const TabMenu = () => {
  const [currentSection, setCurrentSection] = useRecoilState(selectedSection);
  const { color } = useRecoilValue(selectedPlanet);

  return (
    <Wrapper>
      <MenuButton
        planetColor={color}
        isActive={currentSection === "overview"}
        className="top-menu__button"
        onClick={() => setCurrentSection("overview")}
      >
        Overview
      </MenuButton>
      <MenuButton
        planetColor={color}
        isActive={currentSection === "structure"}
        className="top-menu__button"
        onClick={() => setCurrentSection("structure")}
      >
        Structure
      </MenuButton>
      <MenuButton
        planetColor={color}
        isActive={currentSection === "geology"}
        className="top-menu__button"
        onClick={() => setCurrentSection("geology")}
      >
        Geology
      </MenuButton>
    </Wrapper>
  );
};
