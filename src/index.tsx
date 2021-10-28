import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
