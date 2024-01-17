import React, { useState } from "react";
import CustomModal from "../CustomComponents/CustomModal";
import CloseIcon from "@mui/icons-material/Close";
import Textarea from "@mui/joy/Textarea";
import CommentBody from "./CommentBody";
const CommentSection = ({ open, setOpen }) => {
  const [addedComment, setAddedComment] = useState("");
  debugger;
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "39%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 375,
    bgcolor: "black",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    borderRadius: "0.375rem",
    paddingTop: "1rem"
  };
  const fnClickPostHandler=()=>{
    // function called on post button
    

  }
  return (
    <div>
      <CustomModal open={open} handleClose={handleClose} style={style}>
        <div className="comment-header">
          <header className="flex-align">
            <div>Comments</div>
            <CloseIcon
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            />
          </header>
        </div>
        <CommentBody />

        <Textarea
          value={addedComment}
          onChange={(e) => setAddedComment(e.target.value)}
          disabled={false}
          placeholder={"Comment"}
          minRows={2}
          size="md"
          variant="outlined"
        />
        <div id="comment-footer">
          <button className="post-comment" onClick={()=>fnClickPostHandler()} >Post</button>
        </div>
      </CustomModal>
    </div>
  );
};

export default CommentSection;
