import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import Dashboard from "../_assets/Dashboard.png";
import Portfolio from "../_assets/Portfolio.png";
import privateChat from "../_assets/privateChat.png";
import stakeChat from "../_assets/stakeChat.png";
import comunityChat from "../_assets/comunityChat.png";
import navWalletIcon from "../_assets/navWalletIcon.png";
import settingIcon from "../_assets/settingIcon.png";
import navlogoutIcon from "../_assets/navlogoutIcon.png";

export const nav = [
  {
    name: "Menu",
    link: [
      {
        navigation: "seller",
        name: "Dashboard",
        icon: Dashboard,
      },
      {
        navigation: "my-portfolio",
        name: "My Portfolio",
        icon: Portfolio,
      },
    ],
  },
  {
    name: "Messages & Chats",
    link: [
      {
        navigation: "private-chat",
        name: "Private Chat",
        icon: privateChat,
      },
      {
        navigation: "stakeholder-chat",
        name: "Stakeholder Chat",
        icon: stakeChat,
      },
      {
        navigation: "community-chat",
        name: "Community Chat",
        icon: comunityChat,
      },
    ],
  },
  {
    name: "System",
    link: [
      {
        navigation: "my-wallet",
        name: "My Wallet",
        icon: navWalletIcon,
      },
      {
        navigation: "settings",
        name: "Settings",
        icon: settingIcon,
      },
      {
        navigation: "Log-Out",
        name: "Log Out",
        icon: navlogoutIcon,
      },
    ],
  },
];
