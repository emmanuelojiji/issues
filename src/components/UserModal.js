import React from "react";
import Avatar from "./Avatar";
import "./UserModal.scss";
import { Users } from "../Users";

const UserModal = ({ selectedUser, setUserModalVisible }) => {
  const user = Users.find((user) => user.id === selectedUser);

  return (
    <div
      className="user-modal-container"
      onClick={() => setUserModalVisible(false)}
    >
      <div className="user-modal">
        <Avatar size="80px" />
        <h1>{user.name}</h1>
      </div>
    </div>
  );
};

export default UserModal;
