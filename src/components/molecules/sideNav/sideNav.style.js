import styled from "styled-components";

export const Sidenav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  /* margin: 30px 0; */
  background-color: white;
  width: 300px;
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
`;
