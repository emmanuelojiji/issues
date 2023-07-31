import React from "react";
import Avatar from "./Avatar";
import "./DateCard.scss";

const DateCard = ({dateRange, avatarImage}) => {
  return (
    <div className="date-card">
      <div>
        <h3>Out of office</h3>
        <p>{dateRange}</p>
      </div>
      <Avatar avatarImage={avatarImage} />
    </div>
  );
};

export default DateCard;
