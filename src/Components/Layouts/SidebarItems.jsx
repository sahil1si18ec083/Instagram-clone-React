import React from "react";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import { InstagramLogo } from "../../utility/constants";
import LogoutIcon from '@mui/icons-material/Logout';
const SidebarItems = () => {
  return (
    <>
      <div className="instgram-logo">
        <InstagramLogo />
        </div>
        <Home />
        <Search />
        <Notifications />
        <CreatePost />
        <ProfileLink />
 
        <div className="logout-logo">
        <LogoutIcon />
        <span>Logout</span>
        </div>
      
    </>
  );
};

export default SidebarItems;
