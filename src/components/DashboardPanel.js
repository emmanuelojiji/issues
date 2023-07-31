import React from "react";
import IssueInfo from "./IssueInfo";
import AssignedTo from "./AssignedTo";
import Calendar from "./Calendar";
import "./DashboardPanel.scss";
import FilterPill from "./FilterPill";

const DashboardPanel = ({ userModalVisible, setUserModalVisible }) => {
  return (
    <aside className="panel">
      <h2>Issues Board</h2>
      <h4 className="text-button">Hide Filters</h4>

      <h2>By category</h2>
      <div className="filters-container">
        <FilterPill text="Wrong Condition" />
        <FilterPill text="Damaged Parts" />
        <FilterPill text="Missing parts" />
        <FilterPill text="Extra parts" />
      </div>

      <h2>By status</h2>
      <div className="filters-container">
        <FilterPill text="Outstanding" />
        <FilterPill text="Resolved" />
        <FilterPill text="Non-blocking" />

      </div>
    </aside>
  );
};

export default DashboardPanel;
