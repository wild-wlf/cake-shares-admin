import styled, { css } from 'styled-components';

export const TableRow = styled.tr`
  border: none;
  border-bottom: 1px solid var(--table-border);
  background: none;
  display: table-row;
  width: 100%;
  border-radius: 0;
  padding: 0;

  ${({ responsive }) =>
    responsive &&
    css`
      @media (max-width: 991px) {
        background: var(--white);
        border: 1px solid var(--table-border);
        display: block;
        padding: 15px;
        position: relative;
      }
    `}

  @media (min-width: 992px) {
    &:nth-child(1) {
      td {
        &:nth-child(1) {
          border-radius: 10px 0 0 0;
        }
        &:nth-last-child(1) {
          border-radius: 0 10px 0 0;
        }
      }
    }
    &:last-child {
      border-bottom: 0;
      td {
        padding-bottom: 0;
      }
    }
  }

  @media (min-width: 768px) {
    border-radius: 10px;
  }

  &:hover {
    td {
      @media (min-width: 992px) {
        transition: background var(--animation-speed) ease-in-out;
        background: var(--gray-3);
        cursor: pointer;
      }
    }
  }
`;

export default TableRow;
