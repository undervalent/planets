import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { selectedSection, selectedPlanet } from "../../../../lib/state";
import { SubSection } from "../../../../lib/types";
import { Button } from "../button";

import { Wrapper } from "./section-menu.styles";

interface Sections {
  section: SubSection;
  label: string;
}

const sections: Sections[] = [
  { section: "overview", label: "Overview" },
  { section: "structure", label: "Internal Structure" },
  { section: "geology", label: "surface goelogy" },
];

export const SectionMenu = () => {
  const { color } = useRecoilValue(selectedPlanet);
  const [currentSection, setCurrentSection] = useRecoilState(selectedSection);
  const clickHandler = (section: SubSection): void =>
    setCurrentSection(section);

  return (
    <Wrapper>
      {sections.map((el, idx) => (
        <Button
          key={el.section}
          displayNumber={`0${idx + 1}`}
          color={currentSection === el.section ? color : "transparent"}
          clickHandler={clickHandler}
          section={el.section}
        >
          {el.label}
        </Button>
      ))}
    </Wrapper>
  );
};
