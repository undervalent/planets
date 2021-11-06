import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.header`
  width: 100%;
  height: 68px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: -3px;
  .toolbar__navigation {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 10px;
    max-width: 1440px;
    margin: auto;
  }
  .toolbar__logo {
    margin-left: 10px;
  }
  .toolbar__logo h1 {
    font-family: Antonio;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .toolbar__navigation-items {
    display: none;
    width: 100%;
  }
  .toolbar__logo a {
    color: white;
    text-decoration: none;
    font-size: 15px;
  }
  .toolbar__navigation-items ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  .toolbar__navigation-items li {
    padding: 0 5px;
  }
  .toolbar__navigation-items a {
    color: white;
    text-decoration: none;
  }
  .toolbar__navigation-items a:hover,
  .toolbar__navigation-items a:active {
    color: red;
  }

  .spacer {
    flex: 1;
  }

  ${media.between("medium", "large")`
    height: 140px;
    .toolbar__logo {
    margin-bottom: 9px;

    }
    .toolbar__navigation {
      flex-direction: column;
      width: 100%;
    }
    .toolbar__navigation-items {
      display: block;
      max-width: 668px;
    }
    .spacer {
      display: none;
    }
  `}
  ${media.greaterThan("large")`
  height: 85px;
  margin-top: 0;
  .toolbar__navigation-items li {
    display: flex;
    align-items: center
  }
    .toolbar__navigation-items {
      display: flex;
      justify-content: flex-end;
      flex: 1
    }
  `}
`;

export const MenuItem = styled.div<{ planetColor: string }>`
  color: white;
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  padding: 12px 10px;
  border-top: ${({ planetColor }) => `4px solid ${planetColor}`};
  width: 100%;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  cursor: pointer;

  ${media.between("medium", "large")`
  border-top: 4px solid transparent;
  `}
  ${media.greaterThan("large")`
  padding: 22px 10px;
  `}
`;
