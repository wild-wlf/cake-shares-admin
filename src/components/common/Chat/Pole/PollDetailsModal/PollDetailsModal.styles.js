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
      gap: 15px;
      .img-holders {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto 5px;

        img {
          width: 100%;
          height: auto;
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
