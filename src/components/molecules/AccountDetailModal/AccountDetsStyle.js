import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 20px;
    font-weight: 400;
    padding: 26px 0;
  }
  @media (max-width: 650px) {
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 450px) {
    p {
      font-size: 14px;
    }
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 26px;
  gap: 26px;

  .Dets {
    padding-right: 26px;
    border-right: 1px solid #dadada;
    &:last-child {
      border: none;
      padding-left: 0;
    }
    h4 {
      font-size: 14px;
      font-weight: 500;
    }
    span {
      font-size: 10px;
      font-weight: 300;
    }
  }
  @media (max-width: 650px) {
    .Dets {
      padding-right: 16px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
