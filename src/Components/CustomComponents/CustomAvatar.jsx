import React from "react";
import { Avatar } from "@mui/material";

const CustomAvatar = ({ name, color, value }) => {
  return (
    <div>
      <Avatar sx={{ bgcolor: color[value], cursor:"pointer" }}>{name?.at(0)}</Avatar>
    </div>
  );
};

export default CustomAvatar;
