import React from "react";
import { Issues } from "../Issues";
import "./AssignedTo.scss";
import Avatar from "./Avatar";

const AssignedTo = ({ userModalVisible, setUserModalVisible }) => {
  const targetIssue = Issues.find((issue) => issue.id === "wrong_condition");

  return (
    <div className="assigned-to">
      <h3>Assigned To</h3>
      <div className="avatar-container">
        {targetIssue.assignees.map((assignee) => (
          <Avatar
            onClick={() => {
              setUserModalVisible(true);
              console.log(assignee.name);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignedTo;
