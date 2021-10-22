import React from "react";
import { useRecoilState } from "recoil";
import { drawerToggleState } from "../../lib/state";

import { Wrapper } from "./backdrop.styles";
import { useLockBodyScroll } from "../../lib/hooks";

export const Backdrop: React.FC = () => {
  useLockBodyScroll();
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(drawerToggleState);
  const clickHandler = () => setIsDrawerOpen(!isDrawerOpen);

  return <Wrapper onClick={clickHandler}></Wrapper>;
};
