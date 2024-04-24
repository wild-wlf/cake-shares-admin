import styled from "styled-components";

export const Sidenav = styled.div`
  position: absolute;
  left: ${({ open }) => (open ? "0" : "-260px")};
  top: 0;
  background-color: white;
  width: 260px;
  padding-top: 39px;
  padding-left: 20px;
  height: 100%;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  border-top-right-radius: 40px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  .backdrop {
    display: ${({ open }) => (open ? "block" : "none")};
    transition: display 0.3s ease-in-out;
    position: fixed;
    top: 0;
    right: -260px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px);
    z-index: -1;
  }

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
