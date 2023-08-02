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
        <p>Out of office</p>
        <p>{dateRange}</p>
      </div>
      <Avatar
        avatarImage={avatarImage}
        setUserModalVisible={setUserModalVisible}
        setSelectedUser={setSelectedUser}
        userId={userId}
        size="30px"
      />
    </div>
  );
};

export default DateCard;
