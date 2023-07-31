import React from "react";
import "./Notification.scss";

const SystemNotification = ({ type, message }) => {
  
  return (
    <div className="notification">
      <div className="icon"></div>
      {message}
    </div>
  );
};

export default SystemNotification;
