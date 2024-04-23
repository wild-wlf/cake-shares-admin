import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0px 50px;
  margin-top: 20px;
  font-family: var(--base-font-sans-serif);
  z-index: 5;
  .btnDiv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .textContainer {
    width: 100%;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 34px;
      font-weight: 500;
    }
  }
  @media (max-width: 530px) {
    padding: 0px 20px;
    .textContainer {
      .title {
        font-size: 28px;
        font-weight: 500;
      }
      .credit {
        h1 {
          font-size: 28px;
        }
      }
    }
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 50px;
  .ChartContainer {
    width: 32%;
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;
    .ChartContainer {
      width: 400px;
    }
  }

  @media (max-width: 910px) {
    flex-wrap: wrap;
    .ChartContainer {
      width: 350px;
    }
  }

  @media (max-width: 810px) {
    flex-wrap: wrap;
    .ChartContainer {
      width: 320px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .ChartContainer {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const ButtonConfirm = styled.button`
  width: 170px;
  height: 40px;
  background-color: #408f8c;
  border-radius: 52px;
  color: #fff;
  &:hover {
    background-color: #70aba9;
  }
`;
export const ButtonCancel = styled.button`
  width: 170px;
  height: 40px;
  border-radius: 52px;
  color: #111;
  border: 1px solid #dadada;
`;
