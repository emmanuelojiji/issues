import React from "react";
import Avatar from "./Avatar";
import "./DateCard.scss";

const DateCard = () => {
  return (
    <div className="date-card">
      <div>
        <h3>Out of office</h3>
        <p>Date range</p>
      </div>
      <Avatar />
    </div>
  );
};

export default DateCard;
