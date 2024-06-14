import styled from "styled-components";

export const NotificationsHolder = styled.div`
  width: 100%;
  border-radius: 20px;
  background: var(--white);
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .holder {
    width: 100%;
    padding: 14px 0;
    border-bottom: 1px solid var(--gray-150);
    &:nth-child(1) {
      padding-top: 0;
    }
    &:nth-last-child(1) {
      border: 0;
      padding-bottom: 0;
    }
  }
  .notification {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    .content {
      display: flex;
      gap: 10px;
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
      color: var(--success);
      background: rgba(76, 175, 80, 0.1);
    }
  }
  .text {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: var(--matte-black);
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
