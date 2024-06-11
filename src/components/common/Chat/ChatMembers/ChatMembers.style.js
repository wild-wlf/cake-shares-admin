import styled from 'styled-components';

export const ChatMembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  gap: 20px;

  div {
    display: flex;
    .infoWrapper {
      width: 100%;
      display: flex;
      gap: 20px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 6px;

        h6 {
          font-size: 18px;
          font-weight: 500;
        }
        span {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    .online {
      font-size: 24px;
      font-weight: 400;
      color: rgba(64, 143, 140, 1);
    }
    .offline {
      font-size: 24px;
      font-weight: 400;
    }
  }
`;
