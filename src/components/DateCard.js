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
      <div className="date-card-left">
        <div className="blue-circle"></div>
        <div>
          <h5>Out of office</h5>
          <p className="date-range">{dateRange}</p>
        </div>
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
