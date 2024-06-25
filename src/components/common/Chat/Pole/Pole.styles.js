import styled, { css } from 'styled-components';

export const StyledPole = styled.div`
  position: relative;
  max-width: 273px;
  padding: 18px 13px;
  margin-left: ${({ $type }) => ($type === 'send' ? 'auto' : '')};

  ${({ $type }) =>
    $type === 'send'
      ? css`
          border-radius: 10px 0 10px 10px;
          background: var(--green);
          color: var(--white);
        `
      : css`
          border-radius: 10px 10px 10px 0;
          background-color: rgba(78, 97, 153, 0.1);
          color: var(--base-text-color);
        `}
  .pole_title {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
  }

  .isMulti {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    gap: 5px;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    text-align: left;
    ${({ $type }) =>
      $type !== 'send' &&
      css`
        img {
          filter: invert(68%) sepia(41%) saturate(12%) hue-rotate(323deg) brightness(60%) contrast(83%);
        }
      `}
  }
  .time-holder {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 14px;
    ${({ $type }) =>
      $type === 'send'
        ? css`
            right: 13px;
            .icon {
              /* display: none; */
            }
          `
        : css`
            right: 0;
          `}
  }
  button {
    width: 100%;
    text-align: center;
    padding-top: 14px;
    ${({ $type }) =>
      $type === 'send'
        ? css`
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          `
        : css`
            border-top: 1px solid var(--base-text-color);
          `}
    ${({ $type }) =>
      $type === 'send'
        ? css`
            color: var(--white);
          `
        : css`
            color: var(--base-text-color);
          `}
  }
  .votesWrapper {
    margin-bottom: 15px;
    position: relative;
    .totalVotes {
      font-size: 12px;
      font-weight: 300;
      line-height: 14px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const StyledProgress = styled.div`
  width: 100%;
  position: relative;
  height: 8px;
  border-radius: 8px;
  background: ${({ $bg }) => ($bg ? 'rgba(241, 241, 241, 1)' : 'var(--white)')};
  overflow: hidden;
  margin-top: 10px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ $level }) => $level + '%'};
    background: rgba(64, 143, 140, 0.5);
    border-radius: 6px;
    transition: 0.3s all ease-in-out;
  }
`;
