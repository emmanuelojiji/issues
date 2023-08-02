import React, { useEffect, useState } from "react";
import { Issues } from "../Data";
import "./AssignedTo.scss";
import Avatar from "./Avatar";
import { Users } from "../Users";

const AssignedTo = ({ setUserModalVisible, setSelectedUser }) => {
  const currentUrl = window.location.href;
  const splitUrl = currentUrl.split("/");

  const [id, setId] = useState(null);

  useEffect(() => {
    if (splitUrl.length === 6) {
      setId(splitUrl[5]);
    } else {
      setId(splitUrl.pop());
    }
  }, [splitUrl]);

  const targetIssue = Issues.find((issue) => issue.id === id);

  return (
    <div className="assigned-to">
      <h3>Assigned To</h3>
      <div className="avatar-container">
        {targetIssue?.assignees.map((assignee) => {
          const user = Users.find((user) => user.id === assignee.id);
          return (
            <Avatar
              key={assignee.id}
              avatarImage={user ? user.avatar : null}
              setUserModalVisible={setUserModalVisible}
              setSelectedUser={setSelectedUser}
              userId={user?.id}
              opacity={!assignee.available ? "0.3" : undefined}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AssignedTo;
