import styled from 'styled-components';

export const HandleGeneralInfoModalWrapper = styled.div`
  padding-top: 26px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  .InfoIcon {
    width: 140px;
    height: 140px;
  }
  .title {
    display: block;
    margin-bottom: 25px;
    max-width: 500px;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
  }
  p {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 576px) {
    gap: 20px;
    padding-top: 20px;
    .InfoIcon {
      width: 100px;
      height: 100px;
    }
    .title {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    button {
      width: 100%;
    }
  }
`;
