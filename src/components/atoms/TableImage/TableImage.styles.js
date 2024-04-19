import styled, { css } from 'styled-components';

export const ImageHolder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
  background: #d9d9d9;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ${({ rounded }) =>
    rounded &&
    css`
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 0;
      background: none;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `}
`;
