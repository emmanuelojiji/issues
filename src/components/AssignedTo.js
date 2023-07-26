import React from "react";
import "./AssignedTo.scss";
import Avatar from "./Avatar";

const AssignedTo = ({ userModalVisible, setUserModalVisible }) => {
  return (
    <div className="assigned-to">
      <h3>Assigned To</h3>
      <div className="avatar-container">
        <Avatar onClick={() => setUserModalVisible(true)} />
        <Avatar onClick={() => setUserModalVisible(true)} />
        <Avatar onClick={() => setUserModalVisible(true)} />
      </div>
    </div>
  );
};

export default AssignedTo;
