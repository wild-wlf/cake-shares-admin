import React from 'react';
import 'flatpickr/dist/flatpickr.css';
import { DatePickerStyle } from '../Input/Input.styles';

export const DatePickr = ({ label, name, value, noMargin, ...props }) => {
  const DatePickrProps = {
    id: name,
    name,
    ...props,
  };
  return (
    <DatePickerStyle
      value={value}
      options={{
        dateFormat: 'Y-m-d',
        onChange: selectedDates => {
          props.onChange({ target: { value: selectedDates, name: props.name } });
        },
      }}
      placeholder="Select Date"
      {...DatePickrProps}
    />
  );
};
