import React from "react";
import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { Route, useLocation } from "react-router-dom";
import { StatsContainer } from "./components/stats";
import { SideDrawer } from "./components/side-drawer";
import { Toolbar } from "./components/toolbar";
import { Backdrop } from "./components/backdrop";
import { drawerToggleState, currentPlanet, selectedSection } from "./lib/state";
import { TabMenu } from "./components/tab-menu";
import { PanelContent } from "./components/panel-content";

function App() {
  const [sideDrawerOpen, setDrawerToggle] = useRecoilState(drawerToggleState);
  const setCurrentPlanet = useSetRecoilState(currentPlanet);
  const resetSelectedSection = useResetRecoilState(selectedSection);

  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  const handlePathUpdate = React.useCallback(() => {
    setCurrentPlanet(path || "Mercury");
    resetSelectedSection();
    setDrawerToggle(false);
  }, [path, resetSelectedSection, setCurrentPlanet, setDrawerToggle]);

  React.useEffect(() => {
    handlePathUpdate();
    return () => {};
  }, [path, handlePathUpdate]);

  const backdrop = sideDrawerOpen ? <Backdrop /> : null;

  return (
    <div className="container">
      <Toolbar />
      <SideDrawer />
      {backdrop}
      <main>
        <TabMenu />
        <Route path="/" component={PanelContent} />
        <StatsContainer />
      </main>
    </div>
  );
}

export default App;
