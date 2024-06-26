import React from 'react';
import { StyledCheckBox } from './CheckBox.styles';

const CheckBox = ({ label, type, color }) => {
  return (
    <StyledCheckBox $type={type} $color={color}>
      <input id={label} type="checkbox" value={label} />
      {label && (
        <label className="labelTitle" htmlFor={label}>
          {label}
        </label>
      )}
    </StyledCheckBox>
  );
};

export default CheckBox;
