import React from "react";
import { useRecoilState } from "recoil";
import { drawerToggleState } from "../../../../lib/state";

import { Wrapper } from "./toggle-button.styles";

export const ToggleButton: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(drawerToggleState);
  const clickHandler = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Wrapper onClick={clickHandler}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </Wrapper>
  );
};
