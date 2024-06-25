import React, { useState } from "react";

import {
  StyledTabs,
  Wrap,
  StyledTabList,
  TabBtn,
  Head,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  ButtonContainer,
} from "./DataTabs.styles";
import Switch from "../Switch";
import Field from "../Field";
import { CiSearch } from "react-icons/ci";
import Button from "@/components/atoms/Button";

function DataTabs({
  data,
  verticalTabs,
  uploadBtn,
  title,
  noBorder,
  noOverflow,
}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Head>
        <div className="Search">
          <Field
            type="search"
            rounded
            sm
            name="search"
            placeholder={'Search Permission Groups'}
            suffix={<CiSearch className="icon" />}
          />
        </div>
        <Switch onChange={e => console.log(e)} label="Select All Group Permissions" />
      </Head>
      <StyledTabs verticalTabs={verticalTabs}>
        <Wrap uploadBtn verticalTabs={verticalTabs}>
          <StyledTabList verticalTabs={verticalTabs}>
            {title && <strong className="title">{title}</strong>}
            {data.map((tab, index) => (
              <TabBtn
                key={tab.label}
                onClick={() => {
                  setActiveTab(index);
                }}>
                <StyledTab active={activeTab === index} verticalTabs={verticalTabs}>
                  {tab.label}
                </StyledTab>
              </TabBtn>
            ))}
          </StyledTabList>
          {uploadBtn ?? uploadBtn}
        </Wrap>
        <StyledTabPanels verticalTabs={verticalTabs} $noBorder={noBorder} $noOverflow={noOverflow}>
          {data?.map((tab, index) => (
            <StyledTabPanel key={tab.label} active={activeTab === index}>
              {activeTab === index && tab?.content}
            </StyledTabPanel>
          ))}
        </StyledTabPanels>
      </StyledTabs>
      <ButtonContainer>
        <Button rounded width={'170px'} height={'40px'} sm btntype={'primary'}>
          Save Changes
        </Button>
      </ButtonContainer>
    </>
  );
}

export default DataTabs;
