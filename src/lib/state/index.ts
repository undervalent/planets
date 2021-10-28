import { atom, selector } from "recoil";
import { IPlanet, SubSection } from "../types";
import planets from "../data/data.json";

export const drawerToggleState = atom<boolean>({
  key: "DrawerToggle",
  default: false,
});

export const allPlanets = atom<IPlanet[]>({
  key: "allPanets",
  default: planets,
});
export const selectedSection = atom<SubSection>({
  key: "selectedSection",
  default: "overview",
});

export const currentPlanet = atom({ key: "currentPlanet", default: "Earth" });

export const selectedPlanet = selector<IPlanet>({
  key: "selectedPlanet",
  get: ({ get }) => {
    const planet = get(currentPlanet);
    const planetsList = get(allPlanets);
    const item = planetsList.filter((el) => el.name === planet);
    return item.length ? item[0] : planetsList[3];
  },
});
