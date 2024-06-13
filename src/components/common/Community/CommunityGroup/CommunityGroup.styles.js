import styled, { css } from 'styled-components';

export const StyledCommunityGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 22px;
  margin: 0 -22px;

  ${({ $groupActive }) =>
    $groupActive &&
    css`
      background: var(--green);
      color: var(--white);
    `}

  .all-images {
    width: 50px;
    height: 50px;
    position: relative;

    .image-holder {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      ${({ $type }) =>
        $type === 'private' &&
        css`
          width: 100%;
          height: 100%;
          &.img2,
          &.img3 {
            display: none;
          }
        `}
      img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .img1 {
      top: 0;
      left: 0;
    }
    .img2 {
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
    .img3 {
      bottom: 0;
      left: 0;
    }
  }

  .community-name {
    max-width: 125px;

    .title,
    .text {
      display: block;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 6px;
    }
    .text {
      font-weight: 300;
      margin-bottom: 0;
    }
  }

  .time-holder {
    .time {
      display: block;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 8px;
    }

    .icon-holder {
      display: flex;
      justify-content: flex-end;
      gap: 8px;

      .icon {
        width: 20px;
        height: 20px;
        background: var(--dark);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ $groupActive }) => ($groupActive ? 'var(--green)' : 'var(--gray-2)')};
        cursor: pointer;
        &.active {
          background-color: #ff9900;
        }
      }

      .message-counter {
        background: var(--white);
        color: var(--primary);
        cursor: default;
      }
    }
  }
`;
