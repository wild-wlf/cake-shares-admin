import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  font-size: var(--font-size-base);
  line-height: 1;
  color: var(--dark);
  margin-bottom: 0.625rem;
  display: block;
  pointer-events: ${({ $onlyRead }) => $onlyRead && "none"};
  ${({ labelIcon }) =>
    labelIcon &&
    css`
      display: flex;
      align-items: center;
    `}
  ${({ $labelReverse }) =>
    $labelReverse &&
    css`
      position: relative;
      .label {
        flex-direction: row-reverse;
      }
    `};
  .label {
    display: flex;
    align-items: center;
  }
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  margin-right: 3px;
`;
