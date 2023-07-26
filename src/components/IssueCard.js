import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import "./IssueCard.scss";

const IssueCard = ({ title, id }) => {
  return (
    <Link to={`/issue/${id}`} className="issue-card">
      <div className="issue-card-content">
        <div className="issue-card-header">
          <div className="status-pill">Unresolved</div>
        </div>
        <h3>{title}</h3>
        <div className="issue-card-footer">
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;
