import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const CustomModal = ({ open, handleClose, children }) => {
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
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="custom-model"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
