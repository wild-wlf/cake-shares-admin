import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0 0;
  width: 100%;
  background-color: #4e6199;
  padding: 16px 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Data = styled.div`
  color: #fff;
  position: relative;
  h1 {
    font-size: 42px;
    margin: 0;
    padding: 6px 0;
  }
  .f-span {
    font-size: 22px;
    font-weight: 500;
  }
  .l-span {
    font-size: 20px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 0;
    right: -67px;
    width: 1px;
    height: 80px;
    background-color: #fff;
    opacity: 0.2;
  }
  &:last-child::after {
    display: none; 
  }

  @media (max-width: 1296px) {
    h1 {
      font-size: 40px;
    }
    &::after {
      right: -57px;
    }
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 35px;
    }
    .f-span {
      font-size: 18px;
    }
    .l-span {
      font-size: 18px;
    }
    &::after {
      right: -50px;
    }
  }
`;
