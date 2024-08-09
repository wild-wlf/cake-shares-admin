import styled from 'styled-components';

export const VerficationModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding-top: 26px;
  .VerificationIcon {
    width: 140px;
    height: 140px;
  }
  span {
    max-width: 500px;
    width: 100%;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
  }
  .btn-holder {
    display: flex;

    gap: 10px; /* Adjust the gap size as needed */
  }
  @media only screen and (max-width: 576px) {
    gap: 20px;
    padding-top: 20px;
    .VerificationIcon {
      width: 100px;
      height: 100px;
    }
    span {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
