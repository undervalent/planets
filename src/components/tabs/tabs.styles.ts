import styled from "styled-components";

export const TabWrapper = styled.section`
  :root {
    --reach-tabs: 1;
  }
  [data-reach-tabs][data-orientation="vertical"] {
    display: flex;
  }

  [data-reach-tab-list] {
    display: flex;
    background: transparent;
    width: 100%;
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);
    justify-content: space-around;
    height: 46px;
  }

  [data-reach-tab-list][aria-orientation="vertical"] {
    flex-direction: column;
  }

  [data-reach-tab] {
    display: inline-block;
    border: none;
    padding: 0.25em 0.5em;
    margin: 0;
    border-bottom: 4px solid transparent;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-transform: uppercase;
    font-family: "Spartan", sans-serif;
    font-weight: 700;
    font-size: 9px;
    line-height: 10px;
    letter-spacing: 1.92857px;
  }

  [data-reach-tab]:active {
    background: hsla(0, 0%, 0%, 0.05);
  }

  [data-reach-tab]:disabled {
    opacity: 0.25;
    cursor: default;
  }

  [data-reach-tab][data-selected] {
    border-bottom-color: currentColor;
  }
`;
