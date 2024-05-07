import styled, { css } from "styled-components";

export const StyledTabPanels = styled.div`
  background: var(--white);
  width: 100%;
  ${({ verticalTabs }) =>
    verticalTabs &&
    css`
      border: ${({ $noBorder }) =>
        $noBorder ? "" : "1px solid rgba(74, 85, 104, 0.1)"};
      border-radius: ${({ $noBorder }) => ($noBorder ? "" : "25px")};
      overflow: ${({ $noOverflow }) => ($noOverflow ? "" : "hidden")};
      padding: ${({ $noBorder }) => ($noBorder ? "" : "20px 5px")};
    `}
  ${({ rounded }) =>
    rounded &&
    css`
      border: ${({ $noBorder }) =>
        $noBorder ? "" : "1px solid rgba(74, 85, 104, 0.1)"};
      border-radius: ${({ $noBorder }) => ($noBorder ? "" : "25px")};
      overflow: ${({ $noOverflow }) => ($noOverflow ? "" : "hidden")};
      padding: ${({ $noBorder }) => ($noBorder ? "" : "20px 5px")};
    `}
`;

export const StyledTabPanel = styled.div`
  position: relative;
  padding: 0 15px;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  height: 0;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;
      height: auto;
    `}
`;
export const TabBtn = styled.div`
  flex-shrink: 0;
`;
export const StyledTabList = styled.div`
  margin: 0 0 15px;
  position: relative;
  z-index: 1;
  .title {
    display: block;
    margin-bottom: 15px;
    color: var(--dark);
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
  }
  ${({ verticalTabs }) =>
    verticalTabs === true &&
    css`
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 10px;
      width: 100%;
      height: auto;
      padding: 0;
      border-bottom: 2px solid var(--gray-6);

      ${StyledTabPanel} {
        padding-left: 0;
      }
      ${StyledTabPanels} {
        padding: 10px 0;
      }
      ${TabBtn} {
        padding: 0 0 0 20px;

        &:first-child {
          padding: 0 0 0 0;
        }
      }
    `}
  ${({ rounded }) =>
    rounded === true &&
    css`
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 10px;
      width: 100%;
      height: auto;
      padding: 0;

      ${StyledTabPanel} {
        padding-left: 0;
      }
      ${StyledTabPanels} {
        padding: 10px 0;
      }
      ${TabBtn} {
        padding: 0 0 0 0px;
      }
    `}
`;

export const StyledTab = styled.button`
  font-size: var(--font-size-base);
  line-height: 16px;
  font-weight: 400;
  text-transform: capitalize;
  color: var(--gray-5);
  position: relative;
  padding: 10px 0px 18px;
  border-radius: 0px;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

  ${({ verticalTabs }) =>
    verticalTabs === true &&
    css`
      margin-bottom: 0;
    `}

  &:after {
    position: absolute;
    content: "";
    transition: ease-in-out 0.5s;
    left: 50%;
    right: 0;
    bottom: -2px;
    transform: translateX(-50%);
    height: 2px;
    width: 0;
    background: var(--primary);
  }

  ${({ rounded }) =>
    rounded === true &&
    css`
      margin-bottom: 0;
      padding: 8px 15px;
      border-radius: 100px;
      border: 1px solid #f1f1f1;
      color: var(--gray-5);
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
      &:hover {
        &:after {
          visibility: visible;
          opacity: 1;
          width: 100%;
        }
      }
      &::after {
        display: none;
      }
    `}
  ${({ active }) =>
    active &&
    css`
      color: var(--primary);

      &:after {
        visibility: visible;
        opacity: 1;
        width: 100%;
      }
      ${({ rounded }) =>
        rounded === true &&
        css`
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          color: var(--white);
          background: var(--primary);

          &::after {
            display: none;
          }
        `}
    `}
     &:hover {
    color: var(--primary);

    &:after {
      visibility: visible;
      opacity: 1;
      width: 100%;
    }
    ${({ rounded }) =>
      rounded === true &&
      css`
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        color: var(--white);
        background: var(--primary);

        &::after {
          display: none;
        }
      `}
  }
`;

export const Wrap = styled.div`
  overflow-y: auto;
  width: 265px;
  height: 450px;
  padding: 0 8px;
  border-right: 1px solid #e6e8ec;
  position: relative;

  ${({ verticalTabs }) =>
    verticalTabs === true &&
    css`
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      padding: 0 15px 0 0;
      overflow-y: hidden;
      border-right: 0;
    `}
  ${({ rounded }) =>
    rounded === true &&
    css`
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      padding: 7px 15px;
      overflow-y: hidden;
      border-right: 0;
    `}
  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledTabs = styled.div`
  display: flex;
  margin: 0;
  width: 100%;

  ${({ verticalTabs }) =>
    verticalTabs === true &&
    css`
      display: block;
      margin: 15px 0 15px 0;
    `}
  ${({ rounded }) =>
    rounded === true &&
    css`
      display: block;
    `}
`;
