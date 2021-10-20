import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 48px;
  border: 1px solid rgb(255, 255, 255, 0.2);
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 8px;

  .stat-label {
    color: rgb(255, 255, 255, 0.5);
    text-transform: uppercase;
    font: inherit;
    font-size: 8px;
    line-height: 16px;
    font-family: "Spartan", sans-serif;
    font-weight: 700;
  }
  .stat-value {
    font-family: "Antonio", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0ch.75px;
    color: white;
  }
`;
