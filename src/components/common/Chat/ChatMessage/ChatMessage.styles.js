import styled from 'styled-components';
import css from 'styled-jsx/css';

export const StyledChatMessage = styled.div`
  /* max-width: 650px; */
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-left: 35px;
  margin-left: ${({ $type }) => ($type === 'send' ? '' : 'auto')};

  .message-holder {
    width: ${({ $type }) => ($type === 'send' ? '100%' : '')};
    margin-left: ${({ $type }) => ($type === 'send' ? '' : 'auto')};
  }

  .message {
    padding: 10px 15px;
    position: relative;
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    margin-bottom: 40px;

    ${({ $type }) =>
      $type === 'send'
        ? css`
            border-radius: 10px 10px 10px 0;
            background-color: rgba(78, 97, 153, 0.1);
            color: var(--base-text-color);
            a {
              color: var(--base-text-color);
              font-weight: 500;
              text-decoration: underline;
            }
          `
        : css`
            border-radius: 10px 0 10px 10px;
            background: var(--green);
            color: var(--white);
            a {
              color: var(--white);
              font-weight: 500;
              text-decoration: underline;
            }
          `}
  }

  .time-holder {
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    bottom: 15px;
    font-size: 12px;
    line-height: 16px;

    .icon {
      color: ${({ $type }) => ($type === 'seen' ? 'var(--green)' : 'var(--gray)')};
    }

    ${({ $type }) =>
      $type === 'send'
        ? css`
            left: 35px;
            .icon {
              display: none;
            }
          `
        : css`
            right: 0;
          `}
  }

  .img-holder {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: 40px;
    left: 0;
    display: ${({ $type }) => ($type === 'send' ? 'block' : 'none')};

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;

  .message-content {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const ReactionContainer = styled.div`

  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const AddedReaction = styled.div`
  position: absolute;
  left: -10%;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(64, 143, 140, 0.5);
  span {
    font-size: 13px;
  }
`;

export const GroupReaction = styled.div`
  position: absolute;
  left: -10px;
  padding: 1px 3px;
  border-radius: 29%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(64, 143, 140, 0.5);
  span {
    font-size: 12px;
    white-space: nowrap;
    color: #fff;
  }
`;
