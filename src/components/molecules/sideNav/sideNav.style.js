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
  padding: 30px 30px 30px 50px;
  height: 100%;
  transition: left 0.3s ease-in-out;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: block;
  }

  .nav-logo {
    max-width: 176px;
    /* margin-bottom: 10px; */
    img {
      max-width: 176px;
      height: auto;
    }
  }
`;

export const NavLinks = styled.ul`
  padding-top: 30px;

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
      width: 190px;
      padding: 14px 20px;
      height: 50px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: flex-start;
      font-size: 14px;
      font-weight: 300;
      color: black;
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
  width: 195px;
  background-color: rgba(64, 143, 140, 0.3);
  border-radius: 16px;
  height: 90px;
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
