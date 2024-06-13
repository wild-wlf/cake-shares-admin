import React, { useState } from 'react';
import { StyledSideBar } from './SideBar.styles';
import CommunityGroup from '../CommunityGroup';
import userImg01 from '../../../../_assets/user-image-01.png';
import userImg02 from '../../../../_assets/user-image-02.png';
import userImg03 from '../../../../_assets/user-image-03.png';

const SideBar = () => {
  const [tab, setTab] = useState(1);
  const [groupActive, setGroupActive] = useState(null);
  function handleGroupActive(index) {
    setGroupActive(index);
  }
  function handleTabs(index) {
    setTab(index);
  }
  const groupData = [
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
      messageCounter: 3,
      type: 'private',
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
      messageCounter: 2,
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
      type: 'private',
      messageCounter: 9,
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
      type: 'private',
      messageCounter: 7,
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
      type: 'private',
      messageCounter: 4,
    },
    {
      image1: userImg01,
      image2: userImg02,
      image3: userImg03,
      title: 'Egypt Gov. Pro pro',
      text: 'You, Logan & 33 33',
      time: '20 min ago',
    },
  ];

  return (
    <StyledSideBar>
      <div className="tabs-holder">
        <div className={tab === 1 ? 'tab active' : 'tab'} onClick={() => handleTabs(1)}>
          <span>All Conversations</span>
        </div>
        <div className={tab === 2 ? 'tab active' : 'tab'} onClick={() => handleTabs(2)}>
          <span>Starred</span>
        </div>
      </div>
      <div className="group-holder">
        {groupData?.map((item, index) => (
          <CommunityGroup
            key={index}
            type={item?.type}
            image1={item?.image1}
            image2={item?.image2}
            image3={item?.image3}
            title={item?.title}
            text={item?.text}
            time={item?.time}
            messageCounter={item?.messageCounter}
            groupActive={groupActive === index}
            onClick={() => handleGroupActive(index)}
          />
        ))}
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
