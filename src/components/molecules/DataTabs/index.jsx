import React, { useState } from "react";

import {
  StyledTabs,
  Wrap,
  StyledTabList,
  TabBtn,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
} from "./DataTabs.styles";

function DataTabs({
  data,
  verticalTabs,
  uploadBtn,
  rounded,
  title,
  noBorder,
  noOverflow,
}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledTabs verticalTabs={verticalTabs} rounded={rounded}>
      <Wrap uploadBtn verticalTabs={verticalTabs} rounded={rounded}>
        <StyledTabList verticalTabs={verticalTabs} rounded={rounded}>
          {title && <strong className="title">{title}</strong>}
          {data.map((tab, index) => (
            <TabBtn
              key={tab.label}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              <StyledTab
                active={activeTab === index}
                verticalTabs={verticalTabs}
                rounded={rounded}
              >
                {tab.label}
              </StyledTab>
            </TabBtn>
          ))}
        </StyledTabList>
        {uploadBtn ?? uploadBtn}
      </Wrap>
      <StyledTabPanels
        verticalTabs={verticalTabs}
        rounded={rounded}
        $noBorder={noBorder}
        $noOverflow={noOverflow}
      >
        {data?.map((tab, index) => (
          <StyledTabPanel key={tab.label} active={activeTab === index}>
            {activeTab === index && tab?.content}
          </StyledTabPanel>
        ))}
      </StyledTabPanels>
    </StyledTabs>
  );
}

export default DataTabs;
