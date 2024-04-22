import styled from "styled-components";

export const StyledGraph = styled.div`
  width: 100%;
  background: var(--white);
  border-radius: 25px;
  border: 1px solid rgba(74, 85, 104, 0.1);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 40px 30px 0 0;
  flex-grow: 1;
  position: relative;

  /* @media (min-width: 992px) {
    width: calc(50% - 30px);
    margin: 0 15px 15px;
  }

  @media (min-width: 1200px) {
    width: calc(33.33% - 30px);
    margin: 0 15px;
  } */

  .label {
    width: 93%;
    position: relative;
    bottom: 50px;
    left: 40px;
    display: flex;
    flex-flow: wrap;
    gap: 6px;
    justify-content: space-between;
    font-size: 14px;
  }

  .highcharts-container {
    height: 285px !important;
    width: 100% !important;
  }

  .highcharts-background {
    fill: transparent !important;
  }

  .highcharts-title,
  .highcharts-credits,
  .highcharts-axis,
  .highcharts-xaxis-labels,
  .highcharts-subtitle,
  .highcharts-yaxis,
  .highcharts-no-tooltip {
    display: none;
  }
`;
export const GraphHeader = styled.div`
  padding-left: 30px;
  margin-bottom: 35px;
  display: flex;
  align-items: start;
  position: relative;
  .Head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span,
  strong {
    display: block;
    font-size: 22px;
    font-weight: 500;
  }
`;

export const GraphHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 0 0 8px;

  @media (min-width: 992px) {
    margin: 0 -15px;
    padding: 0;
  }
`;
