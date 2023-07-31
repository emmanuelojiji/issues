import React from "react";
import Avatar from "./Avatar";
import "./DateCard.scss";

const DateCard = ({
  dateRange,
  avatarImage,
  setUserModalVisible,
  setSelectedUser,
  userId,
}) => {
  return (
    <div className="date-card">
      <div>
        <h3>Out of office</h3>
        <p>{dateRange}</p>
      </div>
      <Avatar
        avatarImage={avatarImage}
        setUserModalVisible={setUserModalVisible}
        setSelectedUser={setSelectedUser}
        userId={userId}
      />
    </div>
  );
};

export default DateCard;
