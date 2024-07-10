import styled from 'styled-components';

export const StyledKycBuyer = styled.div`
  max-width: 688px;
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  .back-icon {
    cursor: pointer;
  }
  .kycdiscreption {
    display: block;
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    padding: 20px 0;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .description {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    padding: 10px 0 20px 0;
  }

  .fakelabel {
    display: block;
    margin-bottom: 15px;
    position: relative;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    padding-left: 10px;
    &::before {
      position: absolute;
      content: '*';
      top: 0;
      left: 0;
      font-size: 14px;
      color: #d74120;
    }
  }
  .combineField {
    width: 100%;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      display: flex;
      gap: 20px;
    }
  }
  .twoCol {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
  .combineFields {
    width: 100%;
    @media screen and (min-width: 768px) {
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }
  }
  .stepOneButton {
    @media screen and (max-width: 767px) {
      margin-top: 25px;
    }
  }
`;

export const StepWrapperContainar = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: var(--dark);
  max-width: 90px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  .stepStatus {
    display: block;
    margin-bottom: 5px;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    background: #d9d9d9;
  }
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    width: ${({ $width }) => $width * 50 + '%'};
    background: var(--secondary-50);
  }
`;
export const Step = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background: ${({ $bg }) => ($bg ? 'var(--secondary-50)' : '#D9D9D9')};
  z-index: 5;
`;
