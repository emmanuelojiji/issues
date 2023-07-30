import React from "react";
import { Issues } from "../Issues";
import "./AssignedTo.scss";
import Avatar from "./Avatar";
import { Users } from "../Users";

const AssignedTo = ({
  userModalVisible,
  setUserModalVisible,
  setSelectedUser,
  selectedUser,
}) => {
  const targetIssue = Issues.find((issue) => issue.id === "wrong_condition");

  return (
    <div className="assigned-to">
      <h3>Assigned To</h3>
      <div className="avatar-container">
        {targetIssue.assignees.map((assignee) => (
          <Avatar
            avatarImage={Users}
            setUserModalVisible={setUserModalVisible}
            onClick={() => {
              setSelectedUser(assignee.id);
              setUserModalVisible(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignedTo;
