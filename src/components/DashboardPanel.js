import React from "react";
import IssueInfo from "./IssueInfo";
import AssignedTo from "./AssignedTo";
import Calendar from "./Calendar";
import "./DashboardPanel.scss";

const DashboardPanel = ({ userModalVisible, setUserModalVisible }) => {
  return (
    <aside className="panel">
      <h2>Issues Board</h2>
      <h4 className="text-button">Hide Filters</h4>
    </aside>
  );
};

export default DashboardPanel;
