import React from "react";
import { Link } from "react-router-dom";
import { Issues } from "../Data";
import { Users } from "../Users";
import Avatar from "./Avatar";
import "./IssueCard.scss";

const IssueCard = ({ title, id, status, color, opacity }) => {
  const targetIssue = Issues.find((issue) => issue.id === id);
  const assignedUserIds = targetIssue.assignees.map((assignee) => assignee.id);
  const assignedUsers = Users.filter((user) =>
    assignedUserIds.includes(user.id)
  );

  return (
    <Link
      to={`/issue/${id}`}
      className="issue-card"
      style={{ opacity: opacity }}
    >
      <div className="issue-card-content">
        <div className="issue-card-header">
          <div className={`status-pill ${status}`}>{status}</div>
        </div>
        <h3 style={{ color }}>{title}</h3>
        <div className="issue-card-footer">
          {assignedUsers.map((user, index) => (
            <Avatar
              key={index}
              avatarImage={user.avatar}
              opacity={user.dates && "0.2"}
              size="30px"
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;
