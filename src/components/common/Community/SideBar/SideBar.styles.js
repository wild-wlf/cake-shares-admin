import styled, { css } from 'styled-components';

export const StyledSideBar = styled.div`
  width: 100%;
  max-width: 320px;
  background: rgba(64, 143, 140, 0.1);
  padding: 20px 22px;
  border-radius: 30px 0px 0px 0px;
  cursor: pointer;

  @media (max-width: 1199px) {
    position: absolute;
    top: 50px;
    left: 0;
    bottom: -15px;
    background: var(--gray-2);
    max-width: 340px;
    transform: translateX(-200%);
    border-radius: 30px;
    height: auto;
    z-index: 9;
    transition: 0.4s;
    .chat-community-sidebar-active & {
      transform: translateX(0);
    }
  }

  .group-holder {
    height: calc(100vh - 300px);
    overflow-y: auto;
    margin: 0 -22px;
    padding: 0 22px;
  }
  .tabs-holder {
    max-width: 280px;
    background-color: var(--white);
    display: flex;
    margin: 0 auto;
    border-radius: 60px;
    margin-bottom: 30px;
    cursor: pointer;

    .tab {
      width: 50%;
      font-size: 14px;
      line-height: 18px;
      padding: 12px 15px;
      text-align: center;
      border-radius: 60px;
      transition: 0.3s;

      &.active {
        background: var(--green);
        color: var(--white);
      }
    }
  }
  *::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
  }

  *::-webkit-scrollbar-track {
    border-radius: 30px;
    background: red !important;
  }

  *::-webkit-scrollbar-thumb {
    background: red !important;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
    border-radius: 30px;
  }
`;
