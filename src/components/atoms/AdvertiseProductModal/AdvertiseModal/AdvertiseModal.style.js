import styled from "styled-components";

export const AdvertiseModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .desc {
    font-size: 20px;
    font-weight: 400;
  }
  .field-div {
    padding: 26px 0px;
  }
  .budget-desc {
    padding-bottom: 26px;
    font-size: 16px;
    font-weight: 400;
    span {
      font-size: 16px;
      font-weight: 600;
      color: rgba(78, 97, 153, 1);
    }
  }
  @media only screen and (max-width: 576px) {
    .desc {
      font-size: 16px;
    }
    .budget-desc {
      padding-bottom: 26px;
      font-size: 16px;
      span {
        font-size: 16px;
      }
    }
  }
`;
