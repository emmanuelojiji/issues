import React from "react";
import Avatar from "./Avatar";
import "./DateCard.scss";

const DateCard = ({
  dateRange,
  avatarImage,
  setUserModalVisible,
  setSelectedUser,
  userId,
  avatarDisplay,
}) => {
  return (
    <div className="date-card">
      <div>
        <p>Out of office</p>
        <p className="date-range">{dateRange}</p>
      </div>
      <Avatar
        setSelectedUser={setSelectedUser}
        setUserModalVisible={setUserModalVisible}
        avatarImage={avatarImage}
        size="30px"
        userId={userId}
        avatarDisplay={avatarDisplay}
      />
    </div>
  );
};

export default DateCard;
