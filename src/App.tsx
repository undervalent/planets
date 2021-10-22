import React from "react";
import { useRecoilValue } from "recoil";
import { StatsSontainer } from "./components/stats";
import { SideDrawer } from "./components/side-drawer";
import { Toolbar } from "./components/toolbar";
import { Backdrop } from "./components/backdrop";
import { drawerToggleState } from "./lib/state";
import { TopMenu } from "./components/top-menu";
import { PanelContent } from "./components/panel-content";

function App() {
  const sideDrawerOpen = useRecoilValue(drawerToggleState);

  const backdrop = sideDrawerOpen ? <Backdrop /> : null;

  return (
    <div className="container">
      <Toolbar />
      <SideDrawer />
      {backdrop}
      <main>
        <TopMenu />
        <PanelContent />
        <StatsSontainer />
      </main>
    </div>
  );
}

export default App;
