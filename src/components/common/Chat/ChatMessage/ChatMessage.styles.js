import styled from 'styled-components';
import css from 'styled-jsx/css';

export const StyledChatMessage = styled.div`
  max-width: 650px;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-left: 35px;
  margin-left: ${({ $type }) => ($type === 'send' ? '' : 'auto')};

  .message-holder {
    margin-left: ${({ $type }) => ($type === 'send' ? '' : 'auto')};
  }

  .message {
    padding: 8px 10px;
    position: relative;
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    margin-bottom: 8px;

    @media (min-width: 576px) {
      padding: 10px 15px;
    }

    ${({ $type }) =>
      $type === 'send'
        ? css`
            border-radius: 10px 10px 10px 0;
            background: var(--gray-3);
            color: var(--base-text-color);
          `
        : css`
            border-radius: 10px 0 10px 10px;
            background: var(--green);
            color: var(--white);
          `}
  }

  .time-holder {
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    bottom: -16px;
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
    bottom: 0;
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
