import React, { useState } from 'react';
import Button from '../Button';
import { ButtonsGroupWrapper } from './ButtonsGroup.style';

const ButtonsGroup = ({ title = '', setSearchQuery }) => {
  const [Tab, setTab] = useState(0);

  const categoryData = [
    {
      text: 'All',
    },
    {
      text: 'New',
    },
    {
      text: 'Funded',
    },
  ];
  return (
    <ButtonsGroupWrapper>
      <h1>{title}</h1>
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
    </ButtonsGroupWrapper>
  );
};

export default ButtonsGroup;
