import React from "react";
import { Issues } from "../Issues";
import "./IssueInfo.scss";

const IssueInfo = ({ issueId, issueResolved }) => {
  const selectedIssue = Issues.find((issue) => issue.id === issueId);
  return (
    <div className={`issue-info ${issueResolved ? "resolved" : "unresolved"}`}>
      <h3>{selectedIssue.title}</h3>
      <p>Due Date: Fri 5 Jul 2023</p>
    </div>
  );
};

export default IssueInfo;
