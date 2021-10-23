import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  .link {
    width: 100%;
    display: block;
    height: 100%;
    text-decoration: none;
  }
  .side-drawer {
    height: 100%;
    width: 70%;
    max-width: 400px;
    background: #070724;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 375px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
  }
  .side-drawer ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 24px;
  }
  .side-drawer li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    height: 64px;
  }
  .side-drawer.open {
    transform: translateX(0);
  }
  .spacer {
    flex: 1;
  }
  .side-drawer__header {
    padding-left: 24px;
    padding-bottom: 13px;
    margin-bottom: 44px;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    color: #ffffff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  ${media.greaterThan("medium")`
  display: none ;
`}
`;
