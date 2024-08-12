import styled from 'styled-components';

export const ChatHeaderWrapper = styled.header`
  background-color: rgba(78, 97, 153, 0.1);
  border-radius: 60px;
  padding: 7px 0px 7px 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  gap: 12px;
  /* position: absolute; */
  top: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
  margin-bottom: 20px;

  .image-wrapper {
    position: relative;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 3px;
      right: -3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    &.online {
      &::after {
        background: var(--green);
      }
    }

    &.offline {
      &::after {
        background: var(--dark);
      }
    }
  }

  h6 {
    font-size: 20px;
    font-weight: 400;
  }
  span {
    font-size: 12px;
    font-weight: 300;
  }
`;
