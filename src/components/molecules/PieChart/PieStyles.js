import styled from "styled-components";

export const GraphHeader = styled.div`
  display: flex;
  align-items: start;
  position: relative;
  .head {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledGraph = styled.div`
  width: 440px;
  background: var(--white);
  border-radius: 25px;
  border: 1px solid rgba(74, 85, 104, 0.1);
  /* box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px 10px 20px rgba(0, 0, 0, 0.1); */
  padding: 23px 31px;
  /* span {
    font-size: 22px;
    font-weight: 500;
  }
  strong {
    font-size: 22px;
    font-weight: 500;
  } */
`;

export const ChartContainer = styled.div`
  .highcharts-container {
    height: 330px !important;
  }
`;
