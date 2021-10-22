import React from "react";
import { WikiWrapper } from "./wiki.styles";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

interface Props {
  source: string;
}

export const Wiki: React.FC<Props> = ({ source }) => {
  return (
    <WikiWrapper>
      <span className="wiki-source">Source: </span>{" "}
      <a href={source}>
        <span className="wikipedia-link">
          <span className="wikipedia-text">Wikipedia</span>{" "}
          <FaExternalLinkSquareAlt />
        </span>
      </a>
    </WikiWrapper>
  );
};
