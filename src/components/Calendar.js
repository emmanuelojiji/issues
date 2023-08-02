import React from "react";
import { Issues } from "../Data";
import { Users } from "../Users";
import "./Calendar.scss";
import DateCard from "./DateCard";

const Calendar = ({ issueId, setUserModalVisible, setSelectedUser }) => {
  const selectedIssue = Issues.find((issue) => issue.id === issueId);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>Calendar</h3>
        <p className="this-week">This week</p>
      </div>
      {Users.map((user) => {
        if (user.dates && user.dates.length > 0) {
          return user.dates.map((date, index) => (
            <DateCard
              key={`${user.id}-${index}`}
              dateRange={date}
              avatarImage={user.avatar}
              userId={user.id}
              setUserModalVisible={setUserModalVisible}
              setSelectedUser={setSelectedUser}
            />
          ));
        }
        return null;
      })}
    </div>
  );
};

export default Calendar;
