import styled from "styled-components";

export const Sidenav = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  background-color: white;
  height: 100%;
  width: 260px;
  padding-top: 39px;
  padding-left: 20px;

  .nav-content {
    display: flex;
    h1 {
      color: black;
    }
  }
  .nav-logo {
    max-width: 208px;
    img {
      max-width: 208px;
      height: auto;
    }
  }

  .profile {
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .profile-details {
    display: flex;
    gap: 9px;
  }
  .user-details {
    display: flex;
    flex-direction: column;
  }
  .sub {
    font-size: 10px;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
`;
