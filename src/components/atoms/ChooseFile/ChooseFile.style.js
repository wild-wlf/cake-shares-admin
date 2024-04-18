/* eslint-disable no-unused-vars */
import styled from 'styled-components';

export const InputFile = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 32px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--white);
  cursor: pointer;
  background: #c4c4c4;
  border: 2px solid #eff2f8;
  border-radius: 5px;

  input[type='file'] {
    display: none;
  }
`;

export const LabelText = styled.span`
  display: block;
`;
