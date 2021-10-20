import * as React from "react";
import { IPlanet } from "../types";
import data from "../data/data.json";

type Action =
  | {
      type: "SET_PLANET";
      payload: IPlanet;
    }
  | {
      type: "SET_ACTIVE_TAB";
      payload: string;
    }
  | {
      type: unknown;
      payload: any;
    };

type Dispatch = (action: Action) => void;
type State = { activePlanet: IPlanet };
type PlantesProviderProps = { children: React.ReactNode };

const PlanetsContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function planetReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_PLANET":
      return {
        ...state,
        activePlanet: action.payload,
      };
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function PlanetProvider({ children }: PlantesProviderProps) {
  const [state, dispatch] = React.useReducer(planetReducer, {
    activePlanet: data[0],
  });
  const value = { state, dispatch };
  return (
    <PlanetsContext.Provider value={value}>{children}</PlanetsContext.Provider>
  );
}

export function usePlanet() {
  const context = React.useContext(PlanetsContext);
  if (context === undefined) {
    throw new Error(`Must be used withing the PlanetProvider`);
  }
  return context;
}
