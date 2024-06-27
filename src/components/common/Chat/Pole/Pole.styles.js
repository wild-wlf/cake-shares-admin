import styled, { css } from 'styled-components';

export const StyledPole = styled.div`
  position: relative;
  max-width: 273px;
  padding: 18px 13px;
  margin-left: ${({ $type }) => ($type === 'seen' ? 'auto' : '')};

  ${({ $type }) =>
    $type === 'seen'
      ? css`
          border-radius: 10px 0 10px 10px;
          background: var(--green);
          color: var(--white);
        `
      : css`
          border-radius: 10px 10px 10px 0;
          background-color: rgba(78, 97, 153, 0.1);
          color: var(--base-text-color);
          margin-left: 40px;
        `}
  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 10px;
    position: relative;

    button {
      color: ${({ $type }) => ($type === 'seen' ? 'var(--white)' : 'var(--green)')};
    }
  }
  .pole_title {
    display: block;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
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
              display: none;
            }
          `
        : css`
            right: 0;
          `}
  }
  .view-votes {
    width: 100%;
    text-align: center;
    padding-top: 14px;
    ${({ $type }) =>
      $type === 'seen'
        ? css`
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          `
        : css`
            border-top: 1px solid var(--base-text-color);
          `}
    ${({ $type }) =>
      $type === 'seen'
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

  .img-holder {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: -35px;
    display: ${({ $type }) => ($type === 'send' ? 'block' : 'none')};

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
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
