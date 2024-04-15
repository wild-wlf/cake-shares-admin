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
  width: 450px;
  background: var(--white);
  border-radius: 25px;
  border: 1px solid rgba(74, 85, 104, 0.1);
  padding: 23px 31px;
`;

export const ChartContainer = styled.div`
  /* width: 356.31px;
  height: 184px; */
`;
