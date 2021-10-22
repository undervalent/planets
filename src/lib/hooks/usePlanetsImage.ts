import earth from "../assets/planet-earth.svg";
import earthInternal from "../assets/planet-earth-internal.svg";
import earthGeology from "../assets/geology-earth.png";
import mercury from "../assets/planet-mercury.svg";
import mercuryInternal from "../assets/planet-mercury-internal.svg";
import mercuryGeology from "../assets/geology-mercury.png";
import venus from "../assets/planet-venus.svg";
import venusInternal from "../assets/planet-venus-internal.svg";
import venusGeology from "../assets/geology-venus.png";
import mars from "../assets/planet-mars.svg";
import marsInternal from "../assets/planet-mars-internal.svg";
import marsGeology from "../assets/geology-mars.png";
import jupiter from "../assets/planet-jupiter.svg";
import jupiterInternal from "../assets/planet-jupiter-internal.svg";
import jupiterGeology from "../assets/geology-jupiter.png";
import saturn from "../assets/planet-saturn.svg";
import saturnInternal from "../assets/planet-saturn-internal.svg";
import saturnGeology from "../assets/geology-saturn.png";
import uranus from "../assets/planet-uranus.svg";
import uranusInternal from "../assets/planet-uranus-internal.svg";
import uranusGeology from "../assets/geology-uranus.png";
import neptune from "../assets/planet-neptune.svg";
import neptuneInternal from "../assets/planet-neptune-internal.svg";
import neptuneGeology from "../assets/geology-neptune.png";

export function usePlanetImage(planet: string): {
  overview: string;
  structure: string;
  geology: string;
} | null {
  switch (planet) {
    case "Earth":
      return {
        overview: earth,
        structure: earthInternal,
        geology: earthGeology,
      };
    case "Mercury":
      return {
        overview: mercury,
        structure: mercuryInternal,
        geology: mercuryGeology,
      };
    case "Venus":
      return {
        overview: venus,
        structure: venusInternal,
        geology: venusGeology,
      };
    case "Mars":
      return {
        overview: mars,
        structure: marsInternal,
        geology: marsGeology,
      };
    case "Jupiter":
      return {
        overview: jupiter,
        structure: jupiterInternal,
        geology: jupiterGeology,
      };
    case "Saturn":
      return {
        overview: saturn,
        structure: saturnInternal,
        geology: saturnGeology,
      };
    case "Uranus":
      return {
        overview: uranus,
        structure: uranusInternal,
        geology: uranusGeology,
      };
    case "Neptune":
      return {
        overview: neptune,
        structure: neptuneInternal,
        geology: neptuneGeology,
      };
    default:
      throw new Error("This planet does not exist");
  }
}
