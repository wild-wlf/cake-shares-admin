import React from 'react';

import { StyledInputIcon } from './InputIcon.styles';

function InputIcon({ prefix, invalid, suffix, children, onClick, disabled, ...props }) {
  return (
    <>
      <StyledInputIcon
        $prefix={prefix}
        onClick={onClick}
        $invalid={invalid}
        $suffix={suffix}
        disabled={disabled}
        {...props}>
        {children}
      </StyledInputIcon>
    </>
  );
}

export default InputIcon;
