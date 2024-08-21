import React, { useState } from 'react';
import Button from '../Button';
import { ButtonsGroupWrapper } from './ButtonsGroup.style';
import Select from '../Select';

const ButtonsGroup = ({ title = '', setSearchQuery, buttons = false, dropdown = false, data, kycData }) => {
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
            placeholder="Select Type"
            onChange={({ target: { value } }) => {
              setSearchQuery(prev => ({
                ...prev,
                type: value?.value,
              }));
            }}
            options={data}
            labelReverse
          />
        </div>
      )}
      {kycData && (
        <div className="select-holder">
          <Select
            width="200px"
            noMargin
            placeholder="Select KYC"
            onChange={({ target: { value } }) => {
              setSearchQuery(prev => ({
                ...prev,
                kyc: value?.value,
              }));
            }}
            options={kycData}
            labelReverse
          />
        </div>
      )}
    </ButtonsGroupWrapper>
  );
};

export default ButtonsGroup;
