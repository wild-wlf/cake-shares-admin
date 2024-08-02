import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .inputBox {
    position: relative;
    width: 100%;
    label {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      gap: 3px;
      span {
        color: var(--danger);
      }
    }
  }

  .customInput {
    border: 2px solid var(--light);
    background: var(--white);
    outline: none;
    height: 45px;
    padding: 12px 23px;
    width: 100%;
    font-family: 'Outfit', sans-serif;
    transition: border var(--animation-speed) ease-in-out;
    color: var(--secondary-text-color);
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    border-radius: 60px;
  }
`;
