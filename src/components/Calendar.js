import React from "react";
import "./Calendar.scss";
import DateCard from "./DateCard";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>Calendar</h3>
        <p>This week</p>
      </div>
      <DateCard />
      <DateCard />
      <DateCard />
    </div>
  );
};

export default Calendar;
