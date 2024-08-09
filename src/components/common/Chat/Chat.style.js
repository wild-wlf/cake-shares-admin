import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  .chatWrapper {
    width: 100%;
    position: relative;
    padding-bottom: 55px;
  }
  .hamburger {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: -40px;

    @media screen and (min-width: 1500px) {
      display: none;
      position: static;
    }
  }
  .community-hamburger {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    @media screen and (min-width: 1200px) {
      display: none;
    }
  }
`;

export const ChatBody = styled.div`
  height: calc(100vh - 306px);
  overflow: auto;
  padding-right: 8px;

  .title {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    height: calc(100vh - 239px);
  }

  .messages-holder {
    margin-bottom: 40px;
  }
`;
