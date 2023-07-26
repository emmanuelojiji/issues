import React from "react";
import Avatar from "./Avatar";
import "./UserModal.scss";

const UserModal = ({ setUserModalVisible }) => {
  return (
    <div
      className="user-modal-container"
      onClick={() => setUserModalVisible(false)}
    >
      <div className="user-modal">
        <Avatar size="80px" />
      </div>
    </div>
  );
};

export default UserModal;
