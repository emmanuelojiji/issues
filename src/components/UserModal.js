import React from "react";
import Avatar from "./Avatar";
import "./UserModal.scss";
import { Users } from "../Users";
import DateCard from "./DateCard";

const UserModal = ({ selectedUser, setUserModalVisible, avatarImage }) => {
  const user = Users.find((user) => user.id === selectedUser);

  return (
    <div
      className="user-modal-container"
      onClick={() => setUserModalVisible(false)}
    >
      <div className="user-modal">
        <Avatar size="100px" avatarImage={user.avatar} />
        <h1 className="name">{user.name}</h1>
        <p className="role">{user.role}</p>
        <p className="number">+44 746 536 4756</p>
        <button>Send Email</button>
        <div className="calendar-header">
          <div className="calendar-header-left">
            <h3>Calendar</h3> <p className="month">AUG</p>
          </div>
          <p className="time-zone">12:30EST</p>
        </div>

        <div className="date-card-container">
          {user.dates &&
            user.dates.map((date) => <DateCard dateRange={date} />)}

          {!user.dates && <p className="no-dates">No dates to show</p>}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
