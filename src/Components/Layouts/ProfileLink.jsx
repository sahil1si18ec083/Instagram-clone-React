import React from "react";
import { SearchLogo } from "../../utility/constants";

import { deepOrange, deepPurple } from "@mui/material/colors";
import CustomAvatar from "../CustomComponents/CustomAvatar";
const ProfileLink = () => {
  return (
    <div>
      <div className="side-nav-icon">
      
        <CustomAvatar name={"Sahil kumar"} color={deepPurple} value={500} />
        <span>Profile </span>
      </div>
    </div>
  );
};

export default ProfileLink;
