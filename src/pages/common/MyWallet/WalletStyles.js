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
  /* align-items: center; */
  flex-wrap: wrap;
  /* .ChartContainer {
    width: 440px;
  } */
`;

export const ButtonContainer = styled.div`

`;
