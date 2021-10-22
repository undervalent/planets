import React from "react";
import { usePlanet } from "../../lib/context";
import { Wiki } from "./wiki";
import { usePlanetImage } from "../../lib/hooks";
interface Props {
  section: "overview" | "structure" | "geology";
}

export const PanelContent: React.FC<Props> = ({ section }) => {
  const {
    state: { activePlanet },
  } = usePlanet();

  const images = usePlanetImage(activePlanet.name);
  const content = activePlanet[section];
  const image = images && images[section] ? images[section] : null;

  return (
    <div>
      <h1>{activePlanet.name}</h1>
      {image ? <img src={`${image}`} alt={activePlanet.name} /> : null}
      <p>{content.content}</p>
      <Wiki source={content.source} />
    </div>
  );
};
