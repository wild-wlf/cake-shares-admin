import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0px 50px;
  margin-top: 100px;
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
    padding-top: 45px;
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
  align-items: center;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;

`;
