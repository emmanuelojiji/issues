import React from "react";
import { Link } from "react-router-dom";
import "./IssueCard.scss";

const IssueCard = ({ title, id }) => {
  return (
    <Link to={`/issue/${id}`} className="issue-card">
      <div>
        <div className="issue-card-header"></div>
        <h3>{title}</h3>
        <div className="issue-card-footer"></div>
      </div>
    </Link>
  );
};

export default IssueCard;
