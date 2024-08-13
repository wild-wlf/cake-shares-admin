import React, { useState } from 'react';
import Button from '../Button';
import { ButtonsGroupWrapper } from './ButtonsGroup.style';
import Select from '../Select';

const ButtonsGroup = ({ title = '', setSearchQuery, buttons = false, dropdown = false, data }) => {
  const [Tab, setTab] = useState(0);

  return (
    <ButtonsGroupWrapper>
      <h1>{title}</h1>
      {buttons && (
        <div className="btn-Wrapper">
          {categoryData?.map((item, index) => (
            <div key={index}>
              <Button
                rounded
                sm
                btntype="white"
                width="83px"
                className={Tab === index ? 'button active' : 'button'}
                onClick={() => {
                  setTab(index);
                  setSearchQuery(prev => ({ ...prev, type: item.text.toLowerCase(), status: '' }));
                }}>
                {item.image}
                {item.text}
              </Button>
            </div>
          ))}
        </div>
      )}

      {dropdown && (
        <div className="select-holder">
          <Select
            width="200px"
            noMargin
            placeholder="All"
            onChange={({ target: { value } }) => {
              setSearchQuery({ type: value?.value });
            }}
            options={data}
            labelReverse
          />
        </div>
      )}
    </ButtonsGroupWrapper>
  );
};

export default ButtonsGroup;
