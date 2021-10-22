import styled from "styled-components";
import media from "styled-media-query";

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
    letter-spacing: -0.75px;
    color: white;
  }

  ${media.greaterThan("medium")`
  max-width: 164px;
  flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
    margin-right: 10px;
    flex: 1;
    gap: 10px;

    &:last-child{
      margin-right: 0;
    }
    .stat-value {
      font-size: 24px;
      line-height: 31px;
    }
  `}
  ${media.greaterThan("large")`
    max-width: 255px;

    .stat-label {
      font-size: 11px;
      line-height: 25px;
  }
    .stat-value {
      font-size: 40px;
      line-height: 52px;
    }
  `}
`;
