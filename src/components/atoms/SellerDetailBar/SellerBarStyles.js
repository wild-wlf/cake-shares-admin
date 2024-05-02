import styled from "styled-components";

export const Container = styled.div`
  /* margin: 50px 0 0; */
  width: 100%;
  background-color: #4e6199;
  padding: 16px 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 890px) {
    gap: 24px;
  }
  @media (max-width: 530px) {
    padding: 16px 20px;
  }
`;

export const Data = styled.div`
  color: #fff;
  position: relative;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding-right: 67px;
  &:last-child {
    border: none;
    padding-right: 0;
  }
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

  @media (max-width: 1296px) {
    padding-right: 50px;
    h1 {
      font-size: 40px;
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
  }
  @media (max-width: 1024px) {
    padding-right: 30px;
  }
  @media (max-width: 890px) {
    &:nth-child(2n) {
      border-right: none;
      padding-right: 0;
    }
  }
`;
