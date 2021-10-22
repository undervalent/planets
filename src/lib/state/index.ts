import { atom } from "recoil";
import { IPlanet, SubSection } from "../types";
import planets from "../data/data.json";

export const drawerToggleState = atom<boolean>({
  key: "DrawerToggle",
  default: false,
});

export const selectedPlanet = atom<IPlanet>({
  key: "selectedPlanet",
  default: planets[0],
});

export const allPlanets = atom<IPlanet[]>({
  key: "allPanets",
  default: planets,
});
export const selectedSection = atom<SubSection>({
  key: "selectedSection",
  default: "overview",
});
