import React from "react";
import { Issues } from "../Data";
import { Users } from "../Users";
import "./Calendar.scss";
import DateCard from "./DateCard";

const Calendar = ({ issueId, setUserModalVisible, setSelectedUser }) => {
  const selectedIssue = Issues.find((issue) => issue.id === issueId);

  const assignees = selectedIssue.assignees;


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
              userId={user.id}
              setUserModalVisible={setUserModalVisible}
              setSelectedUser={setSelectedUser}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Calendar;
