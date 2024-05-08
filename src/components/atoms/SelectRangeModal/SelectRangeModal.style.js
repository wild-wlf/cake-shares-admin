import styled from "styled-components";

export const SelectRangeModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  .filter-div {
    width: 50%;
    h5 {
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 24px;
    }
    .inner-container {
      display: flex;
      align-items: flex-start;
      gap: 7px;
      background-color: rgba(246, 248, 250, 1);
      border-radius: 10px;
      width: 100%;
      padding: 10px 0px 0px 10px;
      min-height: 60px;
      margin-bottom: 16px;
      .desc {
        display: flex;
        flex-direction: column;
        gap: 5px;
        h6 {
          font-size: 14px;
          font-weight: 500;
        }
        span {
          font-size: 14px;
          font-weight: 300;
          color: rgba(111, 124, 151, 1);
        }
      }
    }

    .btn-wrapper {
      display: flex;
      gap: 10px;
    }
  }
  .date-picker {
    .react-datepicker {
      box-shadow: none !important;
    }
  }
`;
