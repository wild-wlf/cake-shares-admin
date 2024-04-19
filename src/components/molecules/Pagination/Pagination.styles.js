import styled from "styled-components";

export const PaginationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 0 0;

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .page-input {
    height: 35px !important;
    width: 35px !important;
    padding: 5px !important;
    text-align: center;
    background: none;
  }
`;

export const PaginationButton = styled.button`
  width: 26px;
  height: 26px;
  border: 1px solid var(--black);
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    display: block;
    font-size: 16px;
    line-height: 1;
    color: var(--matte-black);
  }
`;
