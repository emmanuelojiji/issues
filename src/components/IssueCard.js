import React from "react";
import { Link } from "react-router-dom";
import { Issues } from "../Issues";
import { Users } from "../Users";
import Avatar from "./Avatar";
import "./IssueCard.scss";

const IssueCard = ({ title, id, status }) => {
  const targetIssue = Issues.find((issue) => issue.id === id);

  const assignedUserAvatars = targetIssue.assignees.map((assignee) => {
    const user = Users.find((user) => user.id === assignee.id);
    return user ? user.avatar : null;
  });

  return (
    <Link to={`/issue/${id}`} className="issue-card">
      <div className="issue-card-content">
        <div className="issue-card-header">
          <div className={`status-pill ${status}`}>{status}</div>
        </div>
        <h3>{title}</h3>
        <div className="issue-card-footer">
          {assignedUserAvatars.map((avatar, index) => (
            <Avatar
              key={index}
              avatarImage={avatar}
              // You can add more Avatar props here as needed
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;
