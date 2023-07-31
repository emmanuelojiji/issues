import React from "react";
import { Issues } from "../Issues";
import { Users } from "../Users";
import "./Calendar.scss";
import DateCard from "./DateCard";

const Calendar = ({ issueId }) => {
  const selectedIssue = Issues.find((issue) => issue.id === issueId);

  const assignees = selectedIssue.assignees;

  // Get the user IDs assigned to the selected issue
  const assignedUserIds = assignees.map((assignee) => assignee.id);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>Calendar</h3>
        <p>This week</p>
      </div>
      {Users.map((user) => {
        if (assignedUserIds.includes(user.id) && user.dates) {
          return (
            <DateCard
              key={user.id}
              dateRange={user.dates}
              avatarImage={user.avatar}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Calendar;
