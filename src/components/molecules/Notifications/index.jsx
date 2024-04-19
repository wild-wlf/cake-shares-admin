import React from "react";
import { ImageHolder, NotificationsHolder } from "./Notifications.styles";
import storeImg from "../../../_assets/new-store-icon.png";
import Image from "next/image";
import UserImg from "../../../_assets/user-icon.png";

const Notifications = () => {
  const notificationData = [
    {
      image: storeImg,
      heading: "New Store Created!",
      date: "19 Oct, 2023",
      time: "20:50 PM",
      tag: "New",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      background: "#ecfaff",
    },
    {
      image: UserImg,
      heading: "New Store Created!",
      date: "19 Oct, 2023",
      time: "20:50 PM",
      background: "#d7daeb",
    },
    {
      image: storeImg,
      heading: "New Store Created!",
      date: "19 Oct, 2023",
      time: "20:50 PM",
      tag: "New",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      background: "#ecfaff",
    },
    {
      image: UserImg,
      heading: "New Store Created!",
      date: "19 Oct, 2023",
      time: "20:50 PM",
      background: "#d7daeb",
    },
  ];
  return (
    <NotificationsHolder>
      {notificationData.map((item, index) => (
        <div key={index} className="holder">
          <div className="notification">
            <div className="content">
              <ImageHolder background={item.background}>
                <Image src={item.image} alt="notification" />
              </ImageHolder>
              <div>
                <span className="heading">{item.heading}</span>
                <div className="date-time">
                  <span className="date">{item.date}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
            {item.tag && (
              <div className="tag">
                <span>{item.tag}</span>
              </div>
            )}
          </div>
          <span className="text">{item.text}</span>
        </div>
      ))}
    </NotificationsHolder>
  );
};

export default Notifications;
