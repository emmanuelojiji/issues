import React from "react";
import "./Notification.scss";
import icon_closed from "../media/icon-closed.svg";
import icon_email from "../media/icon-email.svg";
import icon_heart from "../media/icon-heart.svg";
import icon_split from "../media/icon-split.svg";
import icon_tick from "../media/icon-tick.svg";

const SystemNotification = ({ type, message }) => {
  let icon;

  if (type === "issue_closed") {
    icon = icon_closed;
  } else if (type === "split_job") {
    icon = icon_split;
  } else if (type === "tracking_email_sent") {
    icon = icon_email;
  } else if (type === "issue_resolved") {
    icon = icon_tick;
  }

  return (
    <div className="notification">
      <div className="icon">
        <img src={icon} />
      </div>
      {message}
    </div>
  );
};

export default SystemNotification;
