import styled from "styled-components";
import media from "styled-media-query";

export const PlanetContentWrapper = styled.section`
  margin-top: 64px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-container {
    max-height: 422px;
    max-width: 400px;
  }
  .planet-image-wrapper {
    position: relative;
  }
  .planet-image {
    max-height: 422px;
    max-width: 100%;
  }
  .geology-image {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 163px;
    bottom: 0;
  }
  .panel-headline {
    margin: 50px 0 10px 0;
    padding: 0;
  }
  .planet-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${media.greaterThan("medium")`
    .planet-information {
       justify-content: flex-start;
       align-items: flex-start;
       margin-left: ;
       flex: 1;
      }
    .planet-content {
      display: flex;
      justify-content: space-around;
      gap: 70px;
    }
    .image-container {
      height: 422px;
  }
`}
  ${media.greaterThan("large")`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 68px;

    .planet-content {
      flex-direction: column;
      flex: 1;
      max-width: 350px;
      gap: 5px;
      margin-bottom: 87px;
      margin-left: 88px;
    }
    .panel-headline {
      font-size: 80px;
      line-height: 104px;
      margin-top: 55px;
    }
    .image-container {
      display: flex;
      min-width: 400px;
      align-items: center;
      justify-content: center;
      margin-top: -20px;
      margin-left: 100px;

    }
    .planet-image {
    max-width: initial;
    max-height: none;
  }
`}
`;
