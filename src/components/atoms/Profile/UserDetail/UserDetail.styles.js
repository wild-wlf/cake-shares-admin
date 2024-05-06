import styled from "styled-components";

export const StyledUserDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .colWrapper {
    width: 100%;
    padding: 15px;
    box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    @media screen and (min-width: 767px) {
      padding: 20px;
    }
    .colHeader {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .colTitle {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
      }
    }
    .chatButton {
      color: rgba(78, 97, 153, 1);
      width: 62px;
      height: 29px;
      background: rgba(78, 97, 153, 0.1);
      border-radius: 62px;
    }
    .colBody {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      row-gap: 25px;
      @media screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (min-width: 1439px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .col-content {
      display: flex;
      align-items: flex-start;
      flex-basis: 30%;
      gap: 15px;
      .iconWrap {
        background: rgba(64, 143, 140, 0.1);
        width: 30px;
        height: 30px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        padding: 7px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .textWrap {
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;
        .title {
          color: var(--dark);
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
        }
      }
      .discreptionWrap {
        display: flex;
        gap: 10px;
      }
    }
    .danger {
      color: red;
      .iconWrap {
        background: rgba(215, 65, 32, 0.1);
      }
    }
  }
`;
