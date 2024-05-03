import React from 'react';
import { SectionHeader } from './ContentHeader.styles';
import SearchField from '../SearchField';

function ContentHeader({ heading, subtext, children, buttons, inputPlaceHolder, onChangeFilters }) {
  return (
    <>
      <SectionHeader>
        <div className="heading-holder">
          <h1>
            {subtext && <span>{subtext}</span>}
            {heading}
          </h1>
          {buttons && <div>{buttons}</div>}
        </div>
        <div className="btn-input">
          {inputPlaceHolder && (
            <SearchField
              placeholder={inputPlaceHolder}
              onChangeFilters={_ => {
                onChangeFilters({ ..._, page: 1 });
              }}
            />
          )}
          <div className="btn-holder">{children}</div>
        </div>
      </SectionHeader>
    </>
  );
}

export default ContentHeader;
