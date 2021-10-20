import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlanetProvider } from "./lib/context";
ReactDOM.render(
  <React.StrictMode>
    <PlanetProvider>
      <App />
    </PlanetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
