import React from "react";
import { usePlanet } from "../../lib/context";
import { StatItem } from "./stat-item/";
import { Wrapper } from "./stats-container.styles";
export const StatsSontainer = () => {
  const {
    state: { activePlanet },
  } = usePlanet();
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

export default StatsSontainer;
