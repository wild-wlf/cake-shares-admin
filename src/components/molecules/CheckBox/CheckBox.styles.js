import styled, { css } from 'styled-components';

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    gap: 5px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    text-align: left;

    img {
      max-width: 25px;
    }
    @media screen and (min-width: 768px) {
      gap: 10px;
      img {
        max-width: 32px;
      }
    }
  }

  ${({ $type }) =>
    $type === 'checkbox' &&
    css`
      input[type='checkbox'] {
        position: relative;
        border: 2px solid #d9d9d9;
        background: none;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        padding: 0 !important;
        vertical-align: text-top;
        height: 20px;
        width: 20px;
        border-radius: 4px;
        appearance: none;
        opacity: 0.5;
      }
      input[type='checkbox']:hover {
        opacity: 1;
      }
      input[type='checkbox']:checked {
        background-color: #408f8c;
        opacity: 1;
        &:before {
          content: '';
          position: absolute;
          right: 50%;
          top: 50%;
          width: 5px;
          height: 10px;
          border: solid #fff;
          border-width: 0 2px 2px 0;
          margin: -1px -0.5px 0 0px;
          transform: rotate(45deg) translate(-50%, -50%);
          z-index: 2;
        }
      }

      input[type='checkbox']:before {
        content: '';
        position: absolute;
        right: 50%;
        top: 50%;
        width: 4px;
        height: 9px;
        margin: -1px -0.5px 0 0px;
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: 2;
      }
    `}
  ${({ $type }) =>
    $type === 'circle' &&
    css`
      input[type='checkbox'] {
        position: relative;
        border: 2px solid #afb7c6;
        border-radius: 2px;
        background: none;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        vertical-align: text-top;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        -webkit-appearance: none;
      }

      input[type='checkbox']:hover {
        opacity: 1;
      }

      input[type='checkbox']:checked {
        background-color: var(--primary-500);
        border: 2px solid var(--primary-500);
        opacity: 1;
      }
      input[type='checkbox']:before {
        content: '';
        position: absolute;
        right: 58%;
        top: 50%;
        width: 4px;
        height: 9px;
        border: solid #fff;
        border-width: 0;
        margin: -1px -1px 0 -1px;
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: 2;
      }
      input[type='checkbox']:checked:before {
        border-width: 0 1px 1px 0;
      }
    `}
  ${({ $type }) =>
    $type === 'rounded' &&
    css`
      label {
        font-size: 12px;
        line-height: 16px;
        font-weight: 300;
      }
      input[type='checkbox'] {
        position: relative;
        border: 2px solid #fff;
        border-radius: 2px;
        background: none;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        vertical-align: text-top;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        -webkit-appearance: none;

        ${({ $color }) =>
          $color === 'send'
            ? css`
                border: 2px solid #fff;
              `
            : css`
                border: 2px solid var(--base-text-color);
              `}
      }

      input[type='checkbox']:hover {
        opacity: 1;
      }

      input[type='checkbox']:checked {
        opacity: 1;
        ${({ $color }) =>
          $color === 'send'
            ? css`
                border: 2px solid #fff;
              `
            : css`
                border: 2px solid var(--base-text-color);
              `}
      }
      input[type='checkbox']:checked:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        ${({ $color }) =>
          $color === 'send'
            ? css`
                border: 2px solid #fff;
              `
            : css`
                border: 2px solid var(--base-text-color);
              `}
      }
    `}
`;
