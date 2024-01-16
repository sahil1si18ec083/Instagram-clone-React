import React from "react";
import { deepOrange, deepPurple } from "@mui/material/colors";
import CustomAvatar from "../CustomComponents/CustomAvatar";
const PostHeader = () => {
  return (
    <div className="header-bar">
      <div className="flex33">
       
        <CustomAvatar name={"Sahil kumar"} color={deepPurple} value={500} />
        <span className="userName">sK</span>
        <span className="post-duration">{`•${3}${"m"} ago`}</span>
      </div>
      <div>
       
        <button className="unfollow-btn">{"Unfollow"}</button>
      </div>
    </div>
  );
};

export default PostHeader;
