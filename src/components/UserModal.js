import React from "react";
import Avatar from "./Avatar";
import "./UserModal.scss";
import { Users } from "../Users";
import DateCard from "./DateCard";

const UserModal = ({ selectedUser, setUserModalVisible }) => {
  const user = Users.find((user) => user.id === selectedUser);

  return (
    <div
      className="user-modal-container"
      onClick={() => setUserModalVisible(false)}
    >
      <div className="user-modal">
        <Avatar size="100px" avatarImage={user.avatar} />
        <h1>{user.name}</h1>
        <p>{user.role}</p>

        <div className="date-card-container">
          {user.dates && user.dates.map((date) => (
            <DateCard dateRange={date}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
