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
  title,
  noBorder,
  noOverflow,
}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledTabs verticalTabs={verticalTabs}>
      <Wrap uploadBtn verticalTabs={verticalTabs}>
        <StyledTabList verticalTabs={verticalTabs}>
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
