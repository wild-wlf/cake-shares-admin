import React from 'react';
import { ToggleSwitchStyle } from './Switch.styles';

const Switch = ({ value, label, name, ...props }) => {
  return (
    <>
      <ToggleSwitchStyle>
        {label && (
          <label className="title" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          type="checkbox"
          checked={value}
          onChange={({ target: { checked } }) => {
            props.onChange({
              target: { value: checked },
            });
          }}
          id={name}
        />
        <label className="switch" htmlFor={name}></label>
      </ToggleSwitchStyle>
    </>
  );
};

export default Switch;
