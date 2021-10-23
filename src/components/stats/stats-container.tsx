import React from "react";
import { useRecoilValue } from "recoil";
import { StatItem } from "./stat-item/";
import { Wrapper } from "./stats-container.styles";
import { selectedPlanet } from "../../lib/state";

export const StatsContainer = () => {
  const activePlanet = useRecoilValue(selectedPlanet);
  const { rotation, revolution, radius, temperature } = activePlanet;
  return (
    <Wrapper>
      <StatItem label="Rotation Time" value={rotation} />
      <StatItem label="Revolution Time" value={revolution} />
      <StatItem label="Radius" value={radius} />
      <StatItem label="Average temp." value={temperature} />
    </Wrapper>
  );
};
