import styled from "styled-components";

export const DeleteModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-top: 20px;
  .title-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2 {
      font-size: 24px;
      font-weight: 500;
    }
    span {
      font-size: 16px;
      font-weight: 400;
    }
  }
  .btn-wrapper {
    display: flex;
    gap: 10px;
    .danger {
      font-weight: 500;
    }
  }
  @media only screen and (max-width: 576px) {
    .title-div {
      h2 {
        font-size: 20px;
      }
      span {
        font-size: 14px;
      }
    }
  }
`;
