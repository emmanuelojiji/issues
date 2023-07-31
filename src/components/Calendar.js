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

  // Filter the Users array to get only the users with IDs present in the assignees array
  const assignedUsers = Users.filter((user) =>
    assignedUserIds.includes(user.id)
  );

  const usersWithDates = assignedUsers.filter((user) => user.dates);


  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>Calendar</h3>
        <p>This week</p>
      </div>
      {usersWithDates.map((user) => (
        <DateCard dateRange={user.dates} avatarImage={user.avatar} />
      ))}
    </div>
  );
};

export default Calendar;
