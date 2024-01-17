import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaRegComment } from "react-icons/fa6";
import TextFieldWithButton from "../CustomComponents/TextFieldWithButton";
import CommentSection from "../Comments/CommentSection";
const PostFooter = () => {
  const userName = "sK";
  const caption = "Hi this is my first post";
  const commnentsLength = 1;
  const [commentValue, setCommentValue] = useState("");
  const [openCommentSection, setOpenCommentSection] = useState(false);
  const fnViewAllComments = () => {
    setOpenCommentSection(true)
  };
  return (
    <div
      style={{
        color: "white",
      }}
    >
      <div className="icon-columns">
        <FavoriteBorderIcon className="footer-icons" />
        <FaRegComment className="footer-icons" />
      </div>
      <div className="comment-section">
        <span>{userName}</span>
        <span>{caption}</span>
      </div>
      {commnentsLength > 0 && (
        <>
          <button id="view-comments" onClick={() => fnViewAllComments()}>
            {`View all ${commnentsLength} comments`}
          </button>
          <CommentSection
            open={openCommentSection}
            setOpen={setOpenCommentSection}
          />
        </>
      )}
      <div className="post-textField">
        <TextFieldWithButton
          value={commentValue}
          placeholder={"Add a comment"}
          setValue={setCommentValue}
          buttonLabel={"Post"}
        />
      </div>
    </div>
  );
};

export default PostFooter;
