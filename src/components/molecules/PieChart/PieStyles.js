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
    strong {
      font-size: 22px;
      font-weight: 500;
    }
  }

  @media (max-width: 1200px) {
    .head {
      strong {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;

export const StyledGraph = styled.div`
  width: 100%;
  background: var(--white);
  border-radius: 25px;
  border: 1px solid rgba(74, 85, 104, 0.1);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 40px 31px;
`;

export const ChartContainer = styled.div`
  .highcharts-container {
    height: 300px !important;
  }

  @media (max-width: 1200px) {
    .highcharts-container {
      height: 200px !important;
    }
  }
`;
