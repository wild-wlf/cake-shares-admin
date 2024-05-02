import styled from "styled-components";

export const Sidenav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  width: 260px;
  padding-top: 39px;
  padding-left: 20px;
  height: 100%;
  transition: left 0.3s ease-in-out;
  border-top-right-radius: 40px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: block;
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

`;
