import styled from 'styled-components';

export const StyledPollDetailsModal = styled.div`
  padding-top: 20px;
  color: var(--dark);
  span {
    display: block;
  }
  .heading {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: 10px;
    position: relative;

    &.vote-option {
      padding-left: 10px;
      margin-bottom: 0;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--green);
      }
      span {
        margin-bottom: 0;
      }
    }
  }
  .question {
    margin-bottom: 25px;
  }
  .options-holder {
    max-height: 330px;
    overflow-y: auto;
    .options {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
    .total-votes,
    .votes-holder {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .total-votes {
      margin-bottom: 20px;
    }
    .votes-holder {
      gap: 4px;
      .heading {
        margin-bottom: 0;
      }
    }
    .user-holder {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      gap: 15px;
      .container {
        display: flex;
        flex-flow: wrap;
        gap: 20px;
      }
      .view-all {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(64, 143, 140, 1);
        cursor: pointer;
      }
      .length {
        font-size: 16px;
        font-weight: 600;
      }
      .img-holders {
        margin: 0 auto 5px;

        img {
          border-radius: 50%;
          height: 30px;
          width: 30px;
          object-fit: cover;
        }
      }

      .user-name {
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        margin-bottom: 3px;
      }
      .time {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;
