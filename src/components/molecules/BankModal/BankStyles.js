import styled from "styled-components";

export const Container = styled.div`
  .Heading {
    padding: 26px 0;
    font-size: 20px;
    font-weight: 300;
  }
  .feildContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 26px;
    .wrapper {
      width: 48%;
    }
    .fullWidth {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  width: 170px;
  height: 40px;
  background-color: #408f8c;
  border-radius: 52px;
  color: #fff;
  &:hover {
    background-color: #70aba9;
  }
`;
