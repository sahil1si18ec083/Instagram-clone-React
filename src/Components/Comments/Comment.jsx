import React from "react";
import CustomSkeleton from "../CustomComponents/CustomSkeleton";
import CustomAvatar from "../CustomComponents/CustomAvatar";
import { deepPurple } from "@mui/material/colors";
const Comment = ({ commentValue, username, commentmadeago }) => {
  return username ? (
    <>
      <div className="comment-body-container">
        <CustomAvatar name={username} color={deepPurple} value={500} />\
        <div className="flex-column">
          <div className="comment-slice flex">
            <div className="username">{username}</div>
            <div className="posted-comment">{commentValue}</div>
          </div>
          <div className="comment-duration">{`${commentmadeago}h ago`}</div>
        </div>
      </div>
    </>
  ) : (
    <CustomSkeleton />
  );
};

export default Comment;
