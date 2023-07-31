import React from "react";
import { Issues } from "../Issues";
import "./AssignedTo.scss";
import Avatar from "./Avatar";
import { Users } from "../Users";

const AssignedTo = ({ setUserModalVisible, setSelectedUser }) => {
  const targetIssue = Issues.find((issue) => issue.id === "wrong_condition");

  return (
    <div className="assigned-to">
      <h3>Assigned To</h3>
      <div className="avatar-container">
        {targetIssue.assignees.map((assignee) => {
          const user = Users.find((user) => user.id === assignee.id);
          return (
            <Avatar
              key={assignee.id}
              avatarImage={user ? user.avatar : null}
              setUserModalVisible={setUserModalVisible}
              setSelectedUser={setSelectedUser}
              userId={user.id}
              opacity={!assignee.available && "0.3"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AssignedTo;
