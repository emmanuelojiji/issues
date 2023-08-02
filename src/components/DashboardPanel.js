import React, { useState } from "react";
import IssueInfo from "./IssueInfo";
import AssignedTo from "./AssignedTo";
import Calendar from "./Calendar";
import "./DashboardPanel.scss";
import FilterPill from "./FilterPill";

const DashboardPanel = ({
  userModalVisible,
  setUserModalVisible,
  setHoveredFilter,
}) => {
  return (
    <aside className="panel">
      <h2>Issues Board</h2>
      <h4 className="text-button">Hide Filters</h4>

      <h2>By category</h2>
      <div className="filters-container">
        <FilterPill
          text="Wrong Condition"
          onMouseOver={() => setHoveredFilter("wrong_condition")}
          onMouseLeave={() => setHoveredFilter()}
        />
        <FilterPill
          text="Damaged Parts"
          onMouseOver={() => setHoveredFilter("damaged_parts")}
          onMouseLeave={() => setHoveredFilter()}
        />
        <FilterPill
          text="Missing parts"
          onMouseOver={() => setHoveredFilter("missing_parts")}
          onMouseLeave={() => setHoveredFilter()}
        />
        <FilterPill text="Extra parts"  onMouseOver={() => setHoveredFilter("extra_parts")}
          onMouseLeave={() => setHoveredFilter()} />
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
