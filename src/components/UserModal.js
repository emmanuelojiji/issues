import React from "react";
import Avatar from "./Avatar";
import "./UserModal.scss";

const UserModal = () => {
  return (
    <div className="user-modal-container">
      <div className="user-modal">
        <Avatar />
      </div>
    </div>
  );
};

export default UserModal;
