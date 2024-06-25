import React from 'react';
import { ToggleSwitchStyle } from './Switch.styles';

const Switch = ({ value, label, ...props }) => {
  return (
    <>
      <ToggleSwitchStyle>
        {label && (
          <label className="title" htmlFor={'label'}>
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
          id={'label'}
        />
        <label className="switch" htmlFor={'label'}></label>
      </ToggleSwitchStyle>
    </>
  );
};

export default Switch;
