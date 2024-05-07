import styled from "styled-components";

export const Sidenav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  max-width: 300px;
  padding: 30px 10px 30px 50px;
  height: 100%;
  transition: left 0.3s ease-in-out;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 992px) {
    display: none;
  }

  .nav-logo {
    max-width: 176px;
    /* margin-bottom: 10px; */
    img {
      max-width: 176px;
      height: auto;
    }
  }
  .aside-active & {
    display: block;
  }
`;

export const NavLinks = styled.ul`
  padding-right: 20px;
  margin-bottom: 20px;
  .listHead {
    font-size: 16px;
    font-weight: 400;
    color: #9d9d9d;
  }

  .NavItem {
    cursor: pointer;
    border-radius: 100px;
    margin-top: 17px;
    transition: 0.5s all ease-in-out;
    .Link {
      max-width: 190px;
      width: 100%;
      padding: 14px 20px;
      height: 50px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: flex-start;
      font-size: 14px;
      font-weight: 300;
      color: black;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: var(--white);
        left: -5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .iconCon {
      height: 25px;
      width: 25px;
      display: flex;
      padding: 3px;
      align-items: center;
      justify-content: center;
      background-color: black;
      border-radius: 50%;
      transition: 0.5s all ease-in-out;
    }

    &:hover {
      background-color: rgba(64, 143, 140, 0.3);
      .Link {
        font-weight: 500;
        color: #408f8c;
      }
      .iconCon {
        background-color: #408f8c;
      }
    }
  }
  .active {
    background-color: rgba(64, 143, 140, 0.3);
    .Link {
      font-weight: 500;
      color: #408f8c;
    }
    .iconCon {
      background-color: #408f8c;
    }
  }
`;

export const LinkContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const UserDet = styled.div`
  max-width: 195px;
  background-color: rgba(64, 143, 140, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 17px;
  gap: 10px;
  img {
    border-radius: 50%;
  }
  .detailContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .userName {
    font-size: 14px;
    font-weight: 400;
  }
  .type {
    color: #408f8c;
    font-size: 8px;
    font-weight: 300;
  }
  .date {
    font-size: 8px;
    font-weight: 300;
  }
`;
