import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .inputBox {
    position: relative;
    width: 100%;
    label {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      gap: 3px;
      span {
        color: var(--danger);
      }
    }
    &.checkbox {
      display: flex;
      align-items: flex-end;
      margin-bottom: 10px;

      label {
        margin-bottom: 3px;
        cursor: pointer;
      }
    }
  }

  .customInput {
    border: 2px solid var(--light);
    background: var(--white);
    outline: none;
    height: 45px;
    padding: 12px 23px;
    width: 100%;
    font-family: 'Outfit', sans-serif;
    transition: border var(--animation-speed) ease-in-out;
    color: var(--secondary-text-color);
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    border-radius: 60px;
  }
`;


export const SavedCardStyles = styled.div`
  margin-bottom: 20px;
  min-height: 77px;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .danger {
    color: var(--danger);
    cursor: pointer;
  }
  .title {
    display: block;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  .slick-slide {
    padding: 0 5px;
  }
  .slick-slider {
    padding: 0 15px;
    .slick-arrow {
      background: #408f8c;
      border-radius: 50%;
      width: 20px !important;
      height: 20px !important;
      &::before {
        font-size: 19px;
        opacity: 1;
        width: 20px !important;
        height: 20px !important;
      }
    }
    .slick-prev {
      left: -8px;
    }
    .slick-next {
      right: -15px;
    }
  }
  .savedCard {
    border: 1px solid #f1f1f1;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 195px !important;
    padding: 13px 25px;
    border-radius: 100px;
    flex-shrink: 0;
    button {
      font-size: 12px;
      font-weight: 300;
      line-height: 16px;
    }
    .card-img {
      flex-shrink: 0;
      max-width: 18px;
      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        margin: -3px -8px -3px 0px;
      }
    }
    .fake-checkbox,
    .active {
      width: 12px;
      height: 12px;
      border-radius: 12px;
      border: 0.5px solid #cdcdcd;
    }
    .active {
      border: 0.5px solid #408f8c;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background: #408f8c;
      }
    }
  }
`;