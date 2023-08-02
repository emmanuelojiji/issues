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
      <h3 className="text-button">Hide Filters</h3>

      <h3>By category</h3>
      <div className="filters-container">
        <FilterPill
          text="Wrong Condition"
          onMouseOver={() =>
            filteredIssues.length === 0 && setHoveredFilter("wrong_condition")
          }
          onMouseLeave={() => setHoveredFilter()}
          onClick={() => handleFilter("wrong_condition")}
          state={filteredIssues.includes("wrong_condition") && "active"}
        />
        <FilterPill
          text="Damaged Parts"
          onMouseOver={() => filteredIssues.length === 0 && setHoveredFilter("damaged_parts")}
          onMouseLeave={() => setHoveredFilter()}
          onClick={() => handleFilter("damaged_parts")}
          state={filteredIssues.includes("damaged_parts") && "active"}
        />
        <FilterPill
          text="Missing parts"
          onMouseOver={() => filteredIssues.length === 0 && setHoveredFilter("missing_parts")}
          onMouseLeave={() => setHoveredFilter()}
          onClick={() => handleFilter("missing_parts")}
          state={filteredIssues.includes("missing_parts") && "active"}
        />
        <FilterPill
          text="Extra parts"
          onMouseOver={() => filteredIssues.length === 0 && setHoveredFilter("extra_parts")}
          onMouseLeave={() => setHoveredFilter()}
          onClick={() => handleFilter("extra_parts")}
          state={filteredIssues.includes("extra_parts") && "active"}
        />
      </div>

      <h3>By status</h3>
      <div className="filters-container">
        <FilterPill text="Outstanding" />
        <FilterPill text="Resolved" />
        <FilterPill text="Non-blocking" />
      </div>
    </aside>
  );
};

export default DashboardPanel;
