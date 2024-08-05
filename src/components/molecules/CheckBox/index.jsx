import React from 'react';
import { StyledCheckBox } from './CheckBox.styles';

const CheckBox = ({
  type = 'checkbox',
  label,
  fieldName,
  className,
  onChange,
  checked,
  color,
  value = '',
  name,
  disabled = false,
}) => {
  function handelChange(e) {
    const isChecked = e.target.checked;
    onChange({ fieldName, isChecked });
  }
  return (
    <StyledCheckBox $type={type} className={className} $color={color}>
      <input
        type={type}
        id={fieldName}
        onChange={handelChange}
        checked={checked}
        value={value}
        disabled={disabled}
        name={name ?? fieldName}
      />
      <label htmlFor={fieldName}>{label}</label>
    </StyledCheckBox>
  );
};

export default CheckBox;
