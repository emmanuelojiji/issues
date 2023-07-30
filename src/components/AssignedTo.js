import React from "react";
import { Issues } from "../Issues";
import "./AssignedTo.scss";
import Avatar from "./Avatar";
import { Users } from "../Users";

const AssignedTo = ({ setUserModalVisible, setSelectedUser }) => {
  const targetIssue = Issues.find((issue) => issue.id === "wrong_condition");

  const getUserAvatar = (assignee) => {
    const user = Users.find((user) => user.id === assignee.id);
    return user.avatar;
  };

  return (
    <div className="assigned-to">
      <h3>Assigned To</h3>
      <div className="avatar-container">
        {targetIssue.assignees.map((assignee) => (
          <Avatar
            avatarImage={getUserAvatar(assignee)}
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
