/* eslint-disable no-restricted-imports */
import styled from "styled-components";

export const StyledTopBar = styled.header`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  padding: 30px 50px;
  font-family: var(--base-font-sans-serif);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  .closedNav {
    display: none;
  }
  .logoWrapper {
    display: flex;
    gap: 32px;
  }
  .logo {
    max-width: 206px;
    img {
      max-width: 208px;
      height: auto;
    }
  }
  .textfeildWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .textField {
    display: flex;
    width: 100%;
    height: 26px;
    padding: 0 10px 0 0;
    align-items: center;
    position: relative;
    gap: 8px;
    background: var(--white);
    color: var(--green);
  }
  .textField::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 1px;
    background-color: var(--green);
  }
  .textFieldRight {
    display: flex;
    width: 100%;
    height: 26px;
    padding: 0 10px 10px 0;
    align-items: center;
    position: relative;
    gap: 8px;
    background: var(--white);
    font-weight: 500;
    .heading {
      padding-right: 69px;
    }
  }
  .textFieldRight::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--green);
  }
  .notification {
    display: flex;
    padding: 8px 10px;
    align-items: center;
    gap: 4px;
    border-radius: 50px;
    border: 1px solid #cdcdcd;
    color: var(--dark);
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    cursor: pointer;
    &:hover {
      .notificationWrapper {
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
        z-index: 9;
      }
    }
  }
  .notificationWrapper {
    max-width: 432px;
    position: absolute;
    top: 0;
    right: 30px;
    padding-top: 64px;
    visibility: hidden;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.4s;
  }
  .wallet {
    display: flex;
    padding: 8px 15px;
    align-items: center;
    gap: 8px;
    border-radius: 50px;
    border: 1px solid #cdcdcd;
    color: var(--dark);
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    cursor: pointer;
    &:hover {
      .walletWrapper {
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .walletWrapper {
    max-width: 432px;
    position: absolute;
    top: 0;
    right: 30px;
    padding-top: 64px;
    visibility: hidden;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.4s;
  }
  .sideNav {
    position: absolute;
    left: -260px;
    transition: all 0.3s ease-in-out;
    height: 100%;
  }
  .sideNav.show {
    left: 0;
    transition: linear 0.3s;
  }

  @media (max-width: 1024px) {
    .textFieldRight {
      .heading {
        display: inline-block;
        padding-right: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    .closedNav {
      display: block;
      border: 1px solid black;
      cursor: pointer;
    }
    .logo {
      display: none;
    }
    .textField {
      display: none;
    }
    .textFieldRight {
      display: none;
    }
  }
`;
