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

export const Tabs = () => {
  const {
    state: { activePlanet },
  } = usePlanet();



  return (
    <TabWrapper>
      <TabContainer>
        <TabList>
          <Tab>Uno</Tab>
          <Tab>Dos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Uno</TabPanel>
          <TabPanel>Dos</TabPanel>
        </TabPanels>
      </TabContainer>
    </TabWrapper>
  );
};
