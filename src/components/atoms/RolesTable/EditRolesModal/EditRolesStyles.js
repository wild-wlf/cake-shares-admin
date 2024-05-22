import styled from "styled-components";

export const Container = styled.div`
  padding-top: 26px;
  .feildContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 26px;
    .wrapper {
      width: 48%;
    }
  }

  .btn {
    padding-bottom: 26px;
    width: 290px;
  }

  @media (max-width: 580px) {
    .feildContainer {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 16px;
      gap: 16px;
      .wrapper {
        width: 100%;
      }
    }
    .btn {
      width: 100%;
    }
  }
`;
