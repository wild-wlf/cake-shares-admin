import styled from 'styled-components';

export const NotificationsHolder = styled.div`
  max-width: 432px;
  width: 100%;
  background: var(--white);
  padding: 25px;
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .holder {
    max-width: 432px;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid rgba(240, 242, 243, 1);
    margin-bottom: 15px;

    &:nth-child(1) {
      padding-top: 0;
    }
    &:nth-last-child(1) {
      border: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
  .notifications {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0;
    margin-bottom: 15px;
    background-color: var(--white);

    .content {
      display: flex;
      align-items: center;
      gap: 15px;
      color: var(--matte-black);
      .heading {
        font-weight: 600;
      }
      .date-time {
        display: flex;
        gap: 15px;
        .date {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -8px;
            width: 1px;
            height: 12px;
            background: var(--matte-black);
          }
        }
      }
    }
    .tag {
      padding: 5px 10px;
      border-radius: 60px;
      color: rgba(64, 143, 140, 1);
      background: rgba(64, 143, 140, 0.1);
    }
  }
  .text {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: var(--matte-black);
  }
  @media only screen and (min-width: 420px) {
    border-radius: 20px;
  }
`;
export const ImageHolder = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background && background};
`;
