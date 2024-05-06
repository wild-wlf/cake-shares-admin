import styled from "styled-components";

export const AdvertiseSuccessfulModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 20px;
  h2 {
    font-size: 24px;
    font-weight: 500;
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }

  @media only screen and (max-width: 576px) {
    h2 {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
  }
`;
