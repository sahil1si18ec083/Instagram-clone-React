import React, { useRef } from "react";
import { useState } from "react";
import { CommentLogo } from "../../utility/constants";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Textarea from "@mui/joy/Textarea";
import CustomModal from "../CustomComponents/CustomModal";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const caption = useRef("");
  const style = {
    position: "absolute",
    top: "39%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    borderRadius:"0.375rem"   
  };
  const fnToggleModalVisibility = () => {
    setOpen((prev) => !prev);
  };
  const fnHandleFileChange = (event) => {
    debugger;
    setUploadedImageUrl(URL.createObjectURL(event.target.files[0]));
  };
  console.log(caption);
  return (
    <div>
      <div className="side-nav-icon" onClick={() => fnToggleModalVisibility()}>
        <CommentLogo />
        <span>Create </span>
      </div>

      <CustomModal open={open} handleClose={handleClose} style={style}>
        <div>
          <header className="flex-align">
            <div>Create Post</div>
            <CloseIcon
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            />
          </header>

          <Textarea
            color="neutral"
            ref={caption}
            minRows={2}
            placeholder="Post Caption..."
            size="lg"
            variant="outlined"
            sx={{
              background: "black",
              color: "white",
              fontSize: "0.9rem",
            }}
          />
          <div className="post-image">
            <label for="fileInput">
              <ImageIcon
                sx={{
                  color: "white",
                }}
              />
            </label>
            {
              uploadedImageUrl &&   <CloseIcon
              sx={{
                cursor: "pointer",
                color:"white"
              }}
              onClick={() => setUploadedImageUrl(null)}
            />
            }
          
            <input
              id="fileInput"
              type="file"
              onChange={(event) => fnHandleFileChange(event)}
            />
          </div>
          <div id="image-preview">
            {
              uploadedImageUrl && <img src={uploadedImageUrl} style={{
                width:"100%"
              }} />
            }
             

          </div>
          <div className="post-button-section">
            <button className="post-btn">Post</button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default CreatePost;
