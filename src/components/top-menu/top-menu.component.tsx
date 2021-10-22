import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedPlanet, selectedSection } from "../../lib/state";
import { Wrapper, MenuButton } from "./top-menu.styles";

export const TopMenu = () => {
  const [currentSection, setCurrentSection] = useRecoilState(selectedSection);
  const { color } = useRecoilValue(selectedPlanet);

  return (
    <Wrapper>
      <MenuButton
        color={color}
        active={currentSection === "overview"}
        className="top-menu__button"
        onClick={() => setCurrentSection("overview")}
      >
        Overview
      </MenuButton>
      <MenuButton
        color={color}
        active={currentSection === "structure"}
        className="top-menu__button"
        onClick={() => setCurrentSection("structure")}
      >
        Structure
      </MenuButton>
      <MenuButton
        color={color}
        active={currentSection === "geology"}
        className="top-menu__button"
        onClick={() => setCurrentSection("geology")}
      >
        Geology
      </MenuButton>
    </Wrapper>
  );
};
