import React from "react";

import { Wrapper } from "./stat-item.styles";

interface Props {
  label: string;
  value: string;
}

export const StatItem: React.FC<Props> = ({ label, value }) => {
  return (
    <Wrapper>
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </Wrapper>
  );
};

export default StatItem;
