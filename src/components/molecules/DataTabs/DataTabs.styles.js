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
`;

export const StyledTabPanel = styled.div`
  position: relative;
  padding: 20px 15px;
  margin-left: 15px;
  opacity: 0;
  visibility: hidden;
  height: 0;
  border: 1px solid #e1e4e8;
  display: none;
  border-radius: 20px;
  ${({ active }) =>
    active &&
    css`
      display: block;
      opacity: 1;
      visibility: visible;
      height: auto;
    `};
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
`;

export const StyledTab = styled.button`
  max-width: max-content;
  font-size: 14px;
  line-height: 18px;
  font-weight: 300;
  text-transform: capitalize;
  color: #9d9d9d;
  position: relative;
  padding: 10px 0px 4px;
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
    left: 0;
    bottom: 2px;
    height: 2px;
    width: 0;
    background: var(--green);
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--green);

      &:after {
        visibility: visible;
        opacity: 1;
        width: 100%;
      }
    `}
  &:hover {
    color: var(--green);

    &:after {
      visibility: visible;
      opacity: 1;
      width: 100%;
    }
  }
`;

export const Wrap = styled.div`
  overflow-y: auto;
  max-width: 175px;
  width: 100%;
  border-right: 1px solid rgba(225, 228, 232, 1);
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
  padding-top: 20px;

  ${({ verticalTabs }) =>
    verticalTabs === true &&
    css`
      display: block;
      margin: 15px 0 15px 0;
    `}
`;

export const Head = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Search {
    width: 265px;
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 26px;
`;
