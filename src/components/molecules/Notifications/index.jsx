/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ImageHolder, NotificationsHolder } from './Notifications.styles';

import Investment from '../../../_assets/investment-icon.svg';
import Property from '../../../_assets/property-icon.svg';
import Message from '../../../_assets/message-icon.svg';
import Image from 'next/image';
import notificationService from '@/services/notificationservice';
import { format } from 'date-fns';
import { limitText } from '@/helpers/common';

const Notifications = ({ fetchNotifications, setIsBadge }) => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 3,
  });

  const { notification_data, notification_loading } = notificationService.GetAllNotifications(
    searchQuery,
    fetchNotifications,
  );

  useEffect(() => {
    const showBadge = notification_data.length && notification_data?.find(_ => _.isRead === false);
    setIsBadge(showBadge);
  }, [notification_data]);

  const getImageAndBackground = type => {
    let data = { image: Message, background: 'rgba(78, 97, 153, 0.2)' };
    switch (type) {
      case 'user_created':
        data = { image: Message, background: 'rgba(78, 97, 153, 0.2)' };
        break;
      case 'product_created':
        data = { image: Property, background: 'rgba(64, 143, 140, 0.2)' };
        break;
      case 'investment_created':
        data = { image: Investment, background: 'rgba(64, 143, 140, 0.2)' };
        break;
      case 'investment_created':
        data = { image: Investment, background: 'rgba(64, 143, 140, 0.2)' };
        break;

      default:
        break;
    }

    return data;
  };
     
  return (
    <NotificationsHolder>
      {notification_data.length > 0
        ? notification_data.map((item, index) => (
            <div key={index} className="holder">
              <div className="notifications">
                <div className="content">
                  <ImageHolder background={getImageAndBackground(item.actionType).background}>
                    <Image src={getImageAndBackground(item.actionType).image} alt="notification" />
                  </ImageHolder>
                  <div>
                    <span className="heading">{item.title || 'heading'}</span>
                    <div className="date-time">
                      <span className="date">{format(new Date(item?.created_at), 'yyyy-MM-dd')}</span>
                    </div>
                  </div>
                </div>
                {!item.isRead && (
                  <div className="tag">
                    <span>New</span>
                  </div>
                )}
              </div>
              <span className="text">{limitText(item?.message, 50)}</span>
            </div>
          ))
        : 'Nothing found'}
    </NotificationsHolder>
  );
};

export default Notifications;
