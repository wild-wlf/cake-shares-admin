import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 30px 0 30px;

  .barData {
    .closedNav {
      display: none;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .Heading {
      display: flex;
      gap: 7px;
      align-items: center;
      img {
        height: 18px;
        width: 18px;
      }
      h1 {
        font-size: 22px;
        font-weight: 500;
      }
    }
    p {
      font-size: 16px;
      font-weight: 300;
      padding-top: 5px;
    }
  }

  .barActions {
    display: flex;
    align-items: center;
    gap: 10px;

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
      z-index: 1;
      .bell-white {
        display: none;
      }
    }
    .notificationWrapper-visible {
      visibility: visible;
      transform: translateY(0);
      opacity: 1;
      max-width: 432px;
      position: absolute;
      top: 70px;
      right: 30px;
      transform: translateY(50px);
      transition: 0.4s;
    }
    .notificationWrapper {
      max-width: 432px;
      position: absolute;
      top: 20px;
      right: 0px;
      padding-top: 64px;
      visibility: hidden;
      transform: translateY(50px);
      opacity: 0;
      transition: 0.4s;
    }
    .textField {
      display: flex;
      width: 100%;
      height: 26px;
      padding: 0 10px 0 0;
      align-items: center;
      position: relative;
      gap: 8px;

      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 0;
        transition: all 0.6s ease-in-out;
        left: 0;
        bottom: 0;
        background: var(--green);
      }

      &.textField-home {
        color: var(--green);
        &::before {
          width: 70px;
        }
      }
    }
    .textField::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 70px;
      height: 1px;
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
  }

  @media (max-width: 1200px) {
    .barData {
      p {
        width: 250px;
      }
    }
    .barActions {
      .textFieldRight {
        .heading {
          padding-right: 40px;
        }
      }
    }
  }

  @media (max-width: 1042px) {
    .barData {
      p {
        width: 200px;
      }
    }
  }

  @media (max-width: 992px) {
    .barData {
      .closedNav {
        display: block;
      }
      .dataContainer {
        display: none;
      }
    }
    .barActions {
      .textfeildWrapper {
        display: none;
      }
    }
  }
`;

export const DataContainer = styled.div`
  display: none;
  padding: 26px 30px 0 30px;
  .Heading {
    display: flex;
    gap: 7px;
    align-items: center;
    img {
      height: 18px;
      width: 18px;
    }
    h1 {
      font-size: 22px;
      font-weight: 500;
    }
  }
  p {
    font-size: 16px;
    font-weight: 300;
    padding-top: 5px;
  }
  @media (max-width: 992px) {
    display: block;
  }
`;
