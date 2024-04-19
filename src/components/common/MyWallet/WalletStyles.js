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
`;

export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 50px;
  /* align-items: center; */
  flex-wrap: wrap;
  .ChartContainer {
    width: 32%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const Button2 = styled.button`
  width: 170px;
  height: 40px;
  background-color: #408f8c;
  border-radius: 52px;
  color: #fff;
  &:hover {
    background-color: #70aba9;
  }
`;
export const Button3 = styled.button`
  width: 170px;
  height: 40px;
  border-radius: 52px;
  color: #111;
  border: 1px solid #dadada;
`;
