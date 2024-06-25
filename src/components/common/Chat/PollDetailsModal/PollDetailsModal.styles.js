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
  }
  .question {
    margin-bottom: 25px;
  }
  .options-holder {
    max-height: 330px;
    overflow-y: auto;
    .options {
      margin-bottom: 16px;
    }
    .total-votes,
    .votes-holder {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      .img-holder {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto 5px;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
      .heading {
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
