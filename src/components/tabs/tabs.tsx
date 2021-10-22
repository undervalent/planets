import React from "react";
import "@reach/tabs/styles.css";
import { usePlanet } from "../../lib/context";
import {
  Tabs as TabContainer,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@reach/tabs";

import { TabWrapper } from "./tabs.styles";
import { PanelContent } from "../panel-content";

export const Tabs = () => {
  const {
    state: { activePlanet },
  } = usePlanet();
  const [tabIndex, setTabIndex] = React.useState(0);

  const generateStyle = (tabOption: number) => {
    const isActive = tabIndex === tabOption;
    return {
      borderBottom: `4px solid ${
        isActive ? activePlanet.color : "transparent"
      }`,
      color: `${isActive ? "#fff" : "rgba(255,255,255,.5)"}`,
    };
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <TabWrapper>
      <TabContainer
        index={tabIndex}
        onChange={handleTabsChange}
        style={{ width: "100%" }}
      >
        <TabList>
          <Tab style={generateStyle(0)}>Overview</Tab>
          <Tab style={generateStyle(1)}>Structure</Tab>
          <Tab style={generateStyle(2)}>Surface</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PanelContent section={"overview"} />
          </TabPanel>
          <TabPanel>
            <PanelContent section={"structure"} />
          </TabPanel>
          <TabPanel>
            <PanelContent section={"geology"} />
          </TabPanel>
        </TabPanels>
      </TabContainer>
    </TabWrapper>
  );
};
