import React, { useState } from "react";
import IssueInfo from "./IssueInfo";
import AssignedTo from "./AssignedTo";
import Calendar from "./Calendar";
import "./DashboardPanel.scss";
import FilterPill from "./FilterPill";

const DashboardPanel = ({
  setHoveredFilter,
  filteredIssues,
  setFilteredIssues,
}) => {
  const handleFilter = (issue_id) => {
    setFilteredIssues((prevFilteredIssues) =>
      prevFilteredIssues.includes(issue_id)
        ? prevFilteredIssues.filter((id) => id !== issue_id)
        : [...prevFilteredIssues, issue_id]
    );
    console.log(filteredIssues);
  };

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
          onClick={() => handleFilter("wrong_condition")}
          state={filteredIssues.includes("wrong_condition") && "active"}
        />
        <FilterPill
          text="Damaged Parts"
          onMouseOver={() => setHoveredFilter("damaged_parts")}
          onMouseLeave={() => setHoveredFilter()}
          onClick={() => handleFilter("damaged_parts")}
          state={filteredIssues.includes("damaged_parts") && "active"}
        />
        <FilterPill
          text="Missing parts"
          onMouseOver={() => setHoveredFilter("missing_parts")}
          onMouseLeave={() => setHoveredFilter()}
          onClick={() => handleFilter("missing_parts")}
          state={filteredIssues.includes("missing_parts") && "active"}
        />
        <FilterPill
          text="Extra parts"
          onMouseOver={() => setHoveredFilter("extra_parts")}
          onMouseLeave={() => setHoveredFilter()}
          onClick={() => handleFilter("extra_parts")}
          state={filteredIssues.includes("extra_parts") && "active"}
        />
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
