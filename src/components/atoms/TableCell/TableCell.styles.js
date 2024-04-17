import styled, { css } from "styled-components";

const styles = css`
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-size: var(--font-size-sm);

  ${({ responsive }) =>
    responsive
      ? css`
          @media (min-width: 992px) {
            /* background-color: var(--gray-4); */
            display: table-cell;
            padding: 0.8rem 0.5rem;

            &:first-child {
              padding-left: 25px;
              /* border-radius: 10px 0 0 10px; */
            }
            &:last-child {
              padding-right: 1.25rem;
              /* border-radius: 0 10px 10px 0; */
            }
          }
        `
      : css`
          display: table-cell;
          padding: 0.8rem 0.5rem;
          &:first-child {
            padding-left: 1.25rem;
          }
          &:last-child {
            padding-right: 1.25rem;
          }
        `}
`;

export const Th = styled.th`
  ${styles}
  background: var(--gray-4);
  padding-top: 0.9375rem;
  padding-bottom: 0.9375rem;
  text-transform: capitalize;
`;

export const Td = styled.td`
  ${styles}
  ${({ responsive }) =>
    responsive &&
    css`
      display: flex;
      justify-content: space-between;
      @media (max-width: 991px) {
        padding: 10px 15px;
        &:last-child {
          height: 0;
          padding: 0;
        }
        &:nth-child(odd) {
          background: var(--gray-3);
          border-radius: 8px;
        }
      }
      &:before {
        content: attr(data-th);
        font-weight: bold;
        display: inline-block;
        color: var(--gray);
        padding-right: 12px;

        @media (min-width: 992px) {
          display: none;
        }
      }
    `}
`;
